import { Router } from "express";
import { addProduct,  getProductById, productlist } from "../controller/productController.js";
import upload from "../middleware/multer.js";

const productRoutes = Router();

productRoutes.post("/addProduct", upload.fields([{
    name: "image1", maxCount: 1
}, {
    name: "image2", maxCount: 1
},
{
    name: "image3", maxCount: 1
}, {
    name: "image4", maxCount: 1
}]), addProduct);

productRoutes.get("/productlist",productlist)
productRoutes.get("/productbyid/:id",getProductById)
// productRoutes.delete("/deleteproduct/:id",deleteProduct)


export default productRoutes;