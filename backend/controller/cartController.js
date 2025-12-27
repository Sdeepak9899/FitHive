import User from "../model/userModel.js";
// import Product from "../models/product.js";
import Product from "../model/productModel.js";

// Add to cart
export const addToCart = async (req, res) => {
  try {
    const { userId, productId, size, quantity } = req.body;
    if (!userId || !productId || !size || !quantity)
      return res.status(400).json({ success: false, message: "Missing fields" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    const existingIndex = user.cartData.items.findIndex(
      (item) => item.productId.toString() === productId && item.size === size
    );

    if (existingIndex > -1) {
      user.cartData.items[existingIndex].quantity += quantity;
    } else {
      user.cartData.items.push({
        productId,
        name: product.name,
        size,
        quantity,
        price: product.price,
        image: product.Image1,
      });
    }

    user.cartData.totalItems = user.cartData.items.reduce((acc, item) => acc + item.quantity, 0);
    user.cartData.totalPrice = user.cartData.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    await user.save();
    res.status(200).json({ success: true, cart: user.cartData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Remove from cart
export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId, size } = req.body;
    if (!userId || !productId || !size)
      return res.status(400).json({ success: false, message: "Missing fields" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    user.cartData.items = user.cartData.items.filter(
      (item) => !(item.productId.toString() === productId && item.size === size)
    );

    user.cartData.totalItems = user.cartData.items.reduce((acc, item) => acc + item.quantity, 0);
    user.cartData.totalPrice = user.cartData.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    await user.save();
    res.status(200).json({ success: true, cart: user.cartData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Update cart quantity
export const updateCart = async (req, res) => {
  try {
    const { userId, productId, size, quantity } = req.body;
    if (!userId || !productId || !size || quantity === undefined)
      return res.status(400).json({ success: false, message: "Missing fields" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const index = user.cartData.items.findIndex(
      (item) => item.productId.toString() === productId && item.size === size
    );

    if (index === -1)
      return res.status(404).json({ success: false, message: "Item not in cart" });

    if (quantity <= 0) {
      user.cartData.items.splice(index, 1);
    } else {
      user.cartData.items[index].quantity = quantity;
    }

    user.cartData.totalItems = user.cartData.items.reduce((acc, item) => acc + item.quantity, 0);
    user.cartData.totalPrice = user.cartData.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    await user.save();
    res.status(200).json({ success: true, cart: user.cartData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get cart
export const getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    res.status(200).json({ success: true, cart: user.cartData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
