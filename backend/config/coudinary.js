// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// // 📤 Uploads a single file to Cloudinary
// const uploadOnCloudinary = async (filepath) => {
//   // 🛠️ Configure Cloudinary
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET_KEY,
//   });

//   try {
    
//     if (!filepath) return null;

//     const uploadResult = await cloudinary.uploader.upload(filepath, {
//       resource_type: "auto", 
//     });

   
//     fs.unlinkSync(filepath);

//     return uploadResult.secure_url;
//   } catch (error) {
 
//     if (fs.existsSync(filepath)) fs.unlinkSync(filepath);

//     console.log(" Cloudinary Upload Error:", error.message);
//     return null;
//   }
// };

// export default uploadOnCloudinary;




import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const uploadOnCloudinary = async (filepath) => {
  try {
    if (!filepath) return null;

    const result = await cloudinary.uploader.upload(filepath, {
      resource_type: "auto",
    });

    // remove local file after upload
    fs.unlinkSync(filepath);

    return result.secure_url;
  } catch (error) {
    if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
    console.log("Cloudinary Upload Error:", error.message);
    return null;
  }
};


export default uploadOnCloudinary;


