import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    category: {
      Ref: "Category",
      type: mongoose.Schema.Types.ObjectId,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    message: String,
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
