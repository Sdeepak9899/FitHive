import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import validator from "validator";
import { loginToken, loginToken1 } from "../config/token.js";


/* ================= REGISTER ================= */
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (password.length < 10) {
      return res.status(400).json({ message: "Enter a strong password" });
    }

    // Check if user already exists
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user — let Mongoose fill cartData defaults automatically
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
      provider: "manual",
    });

    // Generate JWT token
    const token = await loginToken(user._id);

    // Set token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
    });

    // Return structured response
    return res.status(201).json({
      message: "Registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        cartData: user.cartData, 
        provider: user.provider,
      },
    });

  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await loginToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: `${user.role} login successful`,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        cartData: user.cartData, 
        
      },
      
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};



export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "logout successfully" });
    } catch (error) {
        console.log("logout error ", error);
        return res.status(500).json({ message: "Internal server error", error: error.meaasage });
    }
}



export const googleLogin = async (req, res) => {
  try {
    const { name, email, picture } = req.body;

    console.log(" Google login payload:", req.body);

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    let user = await User.findOne({ email });

    if (!user) {
      // GOOGLE USER CREATE
      user = await User.create({
        name,
        email,
        avatar: picture,
        provider: "google",
        password: null, 
      });
    }

    const token = await loginToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Google login successful",
      user,
      token,
    });

  } catch (error) {
    console.log(" Google Login Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};



// export const profile = async (req, res) => {
//   try {
//     const user = req.user;

//     return res.status(200).json({
//       message: "Profile fetched successfully",
//       profile: {
//         id: user._id,
//         name: user.name,
//         email: user.email,

//         //  role check
//         role: user.role, // "admin" or "user"

//         //  login method check
//         provider: user.provider, // "google" or "manual"

//         avatar: user.avatar,
//         createdAt: user.createdAt,
//       },
//     });

//   } catch (error) {
//     console.error("Profile error:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };






// export const adminLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password required" });
//     }

//     const admin = await User.findOne({ email, role: "admin" }).select("+password");

//     if (!admin) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, admin.password);

//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const token = await loginToken1(admin._id);

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false, // true in prod
//       sameSite: "Strict",
//       maxAge: 24 * 60 * 60 * 1000,
//     });

//     return res.status(200).json({
//       message: "Admin login successful",
//       admin: {
//         id: admin._id,
//         name: admin.name,
//         email: admin.email,
//         role: admin.role,
//       },
//     });

//   } catch (error) {
//     console.error("Admin login error:", error);
//     return res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };




// import User from "../model/userModel.js";
// import bcrypt from "bcryptjs";
// import validator from "validator";
// import { loginToken, loginToken1 } from "../config/token.js";

// /* ================= REGISTER ================= */

// export const register = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         const existUser = await User.findOne({ email });
//         if (existUser) {
//             return res.status(400).json({ message: "user already exist" });

//         }
//         if (!validator.isEmail(email)) {
//             return res.status(400).json({ meaasage: "invald email" });
//         }
//         if (password.length < 10) {
//             return res.status(400).json({ message: "Enter Strong password" })
//         }
//         let hashPassword = await bcrypt.hash(password, 10)

//         const user = await User.create({
//             name,
//             email, password: hashPassword,
//         });

//         let token = await loginToken(user._id);
//         res.cookie("token", token, {
//             httpOnly: true,
//             secure: false,
//             sameSite: "Strict",
//             maxAge: 7 * 24 * 60 * 60 * 1000
//         })
//         return res.status(201).json(user);
//     }

//     catch (error) {
//         console.log("register error ", error);
//         return res.status(500).json({ message: "Internal server error", error: error.meaasage });
//     }
// }


// /* ================= LOGIN ================= */


// /* ================= GOOGLE LOGIN ================= */
// export const googleLogin = async (req, res) => {
//   try {
//     const { name, email, picture } = req.body;

//     if (!email) return res.status(400).json({ message: "Email required" });

//     let user = await User.findOne({ email });

//     if (!user) {
//       user = await User.create({
//         name,
//         email,
//         avatar: picture,
//         provider: "google",
//       });
//     }

//     const token = loginToken(user._id);

//     res.cookie("user_token", token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "Strict",
//       maxAge: 7 * 24 * 60 * 60 * 1000,
//     });

//     return res.status(200).json({ message: "Google login successful", user });
//   } catch (error) {
//     console.log("GOOGLE LOGIN ERROR", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// /* ================= LOGOUT ================= */
// export const logout = async (req, res) => {
//     try {
//         res.clearCookie("token");
//         return res.status(200).json({ message: "logout successfully" });
//     } catch (error) {
//         console.log("logout error ", error);
//         return res.status(500).json({ message: "Internal server error", error: error.meaasage });
//     }
// }

// /* ================= ADMIN LOGIN ================= */
// export const adminLogin = (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (
//       email === process.env.ADMIN_EMAIL &&
//       password === process.env.ADMIN_PASSWORD
//     ) {
//       const token = adminToken(email);

//       res.cookie("admin_token", token, {
//         httpOnly: true,
//         secure: false,
//         sameSite: "Strict",
//         maxAge: 1 * 24 * 60 * 60 * 1000,
//       });

//       return res.status(200).json({ message: "Admin login successful" });
//     }

//     return res.status(400).json({ message: "Invalid admin credentials" });
//   } catch (error) {
//     console.log("ADMIN LOGIN ERROR", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };
