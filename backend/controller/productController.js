import  uploadOnCloudinary from "../config/coudinary.js";
// import  from "../config/uploadcoudinary.js";
import product from "../model/productModel.js";


// export const addProduct = async(req, res) => {
   
//     try {
//         const {name, description, price, catagrory, subCategory, sizes, bestSeller} = req.body;

//         const Image1 = await uploadOnCloudinary(req.files.image1[0].path);
//         const Image2 = await uploadOnCloudinary(req.files.image1[1].path);
//         const Image3 = await uploadOnCloudinary(req.files.image1[2].path);
//         const Image4 = await uploadOnCloudinary(req.files.image1[3].path);


//         const ProductData = {
//             name,
//              description,
//               price :Number(price), 
//               subCategory, 
//               catagrory, 
//               date :Date.now(), 
//               sizes :JSON.parse(sizes),
//               bestSeller :bestSeller === "true"? true:false, 
//               Image1, 
//               Image2, 
//               Image3, 
//               Image4
//         }
//         const Product = await product.create(ProductData);

//         return res.status(201).json({
//             success:true,
//             message:"Product added successfully",
//             Product
//         });
//     } catch (error) {
//         console.log("Add Product Error:", error.message);
//         return res.status(500).json({
//             success:false,
//             message:"Unable to add product",
//             error:error.message
//         });
//     }
// }




// export const addProduct = async (req, res) => {
//   try {
//     const { name, description, price, catagrory, subCategory, sizes, bestSeller } = req.body;

//     // Upload images
//     const Image1 = req.files.image1 ? await uploadOnCloudinary(req.files.image1[0].path) : null;
//     const Image2 = req.files.image2 ? await uploadOnCloudinary(req.files.image2[0].path) : null;
//     const Image3 = req.files.image3 ? await uploadOnCloudinary(req.files.image3[0].path) : null;
//     const Image4 = req.files.image4 ? await uploadOnCloudinary(req.files.image4[0].path) : null;

//     const ProductData = {
//       name,
//       description,
//       price: Number(price),
//       catagrory,
//       subCategory,
//       sizes: JSON.parse(sizes),
//       bestSeller: bestSeller === "true",
//       date: Date.now(),
//       Image1,
//       Image2,
//       Image3,
//       Image4,
//     };

//     const Product = await product.create(ProductData);

//     return res.status(201).json({
//       success: true,
//       message: "Product added successfully",
//       Product,
//     });
//   } catch (error) {
//     console.log("Add Product Error:", error.message);
//     return res.status(500).json({
//       success: false,
//       message: "Unable to add product",
//       error: error.message,
//     });
//   }
// };



export const addProduct = async (req, res) => {
  try {
    const { name, description, price, catagrory, subCategory, sizes, bestSeller } = req.body;

    // 1️⃣ Check if product already exists
    const existingProduct = await product.findOne({
      name: name.trim(),
      catagrory,
      subCategory,
    });

    if (existingProduct) {
      return res.status(409).json({
        success: false,
        message: "Product already exists",
      });
    }

    // 2️⃣ Upload images only AFTER validation
    const Image1 = await uploadOnCloudinary(req.files.image1[0].path);
    const Image2 = await uploadOnCloudinary(req.files.image2[0].path);
    const Image3 = await uploadOnCloudinary(req.files.image3[0].path);
    const Image4 = await uploadOnCloudinary(req.files.image4[0].path);

    const ProductData = {
      name: name.trim(),
      description,
      price: Number(price),
      catagrory,
      subCategory,
      sizes: JSON.parse(sizes),
      bestSeller: bestSeller === "true",
      date: Date.now(),
      Image1,
      Image2,
      Image3,
      Image4,
    };

    const Product = await product.create(ProductData);

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      Product,
    });

  } catch (error) {
    // 3️⃣ Handle duplicate index error (safety net)
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Product already exists (duplicate)",
      });
    }

    res.status(500).json({
      success: false,
      message: "Unable to add product",
      error: error.message,
    });
  }
};




export const productlist = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      catagrory,
      subCategory,
      bestSeller,
      search,
    } = req.query;

    const query = {};

    if (catagrory) query.catagrory = catagrory;
    if (subCategory) query.subCategory = subCategory;
    if (bestSeller !== undefined) query.bestSeller = bestSeller === "true";

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    const products = await product
      .find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await product.countDocuments(query);

    res.status(200).json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      products,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};





export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const Product = await product.findById(id);

    if (!Product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      Product,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};


// export const deleteProduct = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // 1️⃣ Find the product
//     const productToDelete = await product.findById(id);
//     if (!productToDelete) {
//       return res.status(404).json({ success: false, message: "Product not found" });
//     }

//     // 2️⃣ Delete all images from Cloudinary
//     if (productToDelete.images?.length) {
//       await Promise.all(
//         productToDelete.images.map(img => deleteFromCloudinary(img.public_id))
//       );
//     }

//     // 3️⃣ Delete product from MongoDB
//     await productToDelete.deleteOne();

//     res.status(200).json({ success: true, message: "Product deleted successfully" });

//   } catch (error) {
//     console.error("Delete Product Error:", error);
//     res.status(500).json({ success: false, message: "Failed to delete product" });
//   }
// };
