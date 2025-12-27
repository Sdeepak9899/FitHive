import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

export const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies; // make sure cookie name matches what you send
    if (!token) return res.status(401).json({ message: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Fetch user from DB
    const user = await User.findById(decoded.userId || decoded.id).select("-password"); 
    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = user; // attach full user object
    next();
  } catch (error) {
    console.log("isAuth error:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};





/* ADMIN AUTH */
export const adminAuth = (req, res, next) => {
  try {
    const token = req.cookies.admin_token;
    if (!token) return res.status(401).json({ message: "Admin Unauthorized" });

    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid admin token" });
  }
};
