import mongoose from "mongoose";

const prodeuctSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Image1: {
        type: String,
        required: true
    },
    Image2: {
        type: String,
        required: true
    },
    Image3: {
        type: String,
        required: true
    },
    Image4: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    catagrory: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    sizes: {
        type: Array,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    bestSeller: {
        type: Boolean,

    }
}, { timestamps: true })

prodeuctSchema.index(
  { name: 1, catagrory: 1, subCategory: 1 },
  { unique: true }
);


const product = mongoose.model("Product", prodeuctSchema);

export default product;