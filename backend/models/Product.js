import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
