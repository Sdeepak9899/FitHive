import express from "express";
import { addToCart, removeFromCart, updateCart, getCart } from "../controller/cartController.js";
import { isAuth } from "../middleware/adminAuth.js";

const cartRouter = express.Router();

cartRouter.get("/:userId",isAuth, getCart);
cartRouter.post("/add", isAuth, addToCart);
cartRouter.post("/remove", isAuth, removeFromCart);
cartRouter.post("/update", isAuth, updateCart);

export default cartRouter;
