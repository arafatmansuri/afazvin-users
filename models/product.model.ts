import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      ref: "Category",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    occasion: {
      ref: "Occasion",
      type: mongoose.Schema.Types.ObjectId,
    },
    description: {
      type: String,
    },
    thumbnailImage: {
      type: String,
      required: true,
    },
    thumbnailImageAlt: {
      type: String,
    },
    hoverImage: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],
    colors: [
      {
        type: String,
      },
    ],
    price: {
      type: Number,
    },
    video: {
      type: String,
    },
    views: {
      type: Number,
      default: 0,
    },
    isBestSeller: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Cloths", productSchema);

export default Product;
