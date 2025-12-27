// import isEmail from "validator/lib/isEmail.js";
// import user from "../model/userModel.js";



// export const getCurrentUser = async (req, res) => {
//   try {

//      const user = await User.findById(req.userId).select("-password")
//      console.log(user,"khusdbkhbksdax")
//         if (!user) {
//             return res.status(400).json({ message: "user is not found" })
//         }
//      res.status(200).json(user);
//     console.log(user,"userget1234")
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };


// export const getCurrentUser = async (req, res) => {
//   try {
//     const user = req.user; // use the object attached by middleware

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     return res.status(200).json({
//       id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       provider: user.provider,
//       avatar: user.avatar,
//       cartData: user.cartData,
//     });
//   } catch (error) {
//     console.log("getCurrentUser error:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };



// export const getAdmin =async (req,res)=>{
//     try {
//         const adminEmail = req.adminEmail;
//         if(!adminEmail){
//             return res.status(404).json({
//                 message:"admin not found"
//             })
//         }
//         return res.status(201).json({
//             email:adminEmail,
//             role:"admin"
//         })
//     } catch (error) {
//           console.log(" getAdmin current user", error);
//         return res.status(500).json({
//             message: "Internal server error",
//             error: error.message,
//         });
//     }
// }


import User from "../model/userModel.js";

/* ------------------ GET CURRENT USER ------------------ */
export const getCurrentUser = async (req, res) => {
  try {
    const currentUser = req.user;

    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      id: currentUser._id,
      name: currentUser.name,
      email: currentUser.email,
      role: currentUser.role,
      provider: currentUser.provider,
      avatar: currentUser.avatar,
      cartData: currentUser.cartData,
    });
  } catch (error) {
    console.error("getCurrentUser error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/* ------------------ GET ADMIN ------------------ */
export const getAdmin = async (req, res) => {
  try {
    const adminEmail = req.adminEmail;

    if (!adminEmail) {
      return res.status(404).json({ message: "Admin not found" });
    }

    return res.status(200).json({
      email: adminEmail,
      role: "admin",
    });
  } catch (error) {
    console.error("getAdmin error:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
