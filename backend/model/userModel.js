// // import mongoose from "mongoose";

// // const useSchema = new mongoose.Schema({
// //     name: {
// //         type: String,
// //         required: true,
// //     },
// //     email: {
// //         type: String,
// //         required: true,
// //         unique: true,
// //     },
// //     password: {
// //         type: String,
// //         required: true,
// //     },
// //     cartData: {
// //         type: Object,
// //         default: {}
// //     }

// // }, { timestamps: true, minimize: false });

// // const User = mongoose.model("User", useSchema);
// // export default User;


// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: function () {
//         return this.provider !== "google";
//       },
//     },
//     provider: {
//       type: String,
//       default: "manual", 
//     },
//     cartData: {
//       type: Object,
//       default: {},
//     },
//   },
//   { timestamps: true, minimize: false }
// );

// const User = mongoose.model("User", userSchema);
// export default User;


// working
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },

//     email: {
//       type: String,
//       unique: true,
//       required: true,
//     },

//     password: {
//       type: String,
//       required: function () {
//         return this.provider === "manual";
//       },
//       select: false,
//     },

//     avatar: {
//       type: String,
//       default: "",
//     },
//     role: {
//       type: String,
//       enum: ["user", "admin"]
//       , default: "user",
//     },

//       cartData: {
//       items: {
//         // type: [cartItemSchema],
//         type: [Object],
//         default: [],
//       },
//       totalItems: {
//         type: Number,
//         default: 0,
//       },
//       totalPrice: {
//         type: Number,
//         default: 0,
//       },
//     },

//     provider: {
//       type: String,
//       enum: ["manual", "google"],
//       default: "manual",
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("User", userSchema);




import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  name: { type: String, required: true },
  size: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
  price: { type: Number, required: true },
  image: { type: String },
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: {
      type: String,
      required: function () {
        return this.provider === "manual";
      },
      select: false,
    },
    avatar: { type: String, default: "" },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    provider: { type: String, enum: ["manual", "google"], default: "manual" },
    cartData: {
      items: { type: [cartItemSchema], default: [] },
      totalItems: { type: Number, default: 0 },
      totalPrice: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
