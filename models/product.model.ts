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
    thumbnailImagePublicId: {
      type: String,
    },
    thumbnailImageAlt: {
      type: String,
    },
    hoverImage: {
      type: String,
    },
    hoverImagePublicId: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],
    imagePublicIds: [
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
    videoPublicId: {
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
    isHandPicked: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  { timestamps: true },
);

productSchema.index({ slug: 1 }, { unique: true, sparse: true });

productSchema.index({
  createdAt: -1,
  _id: -1,
});

productSchema.index({
  views: -1,
  createdAt: -1,
  _id: -1,
});

productSchema.index({
  isBestSeller: -1,
  createdAt: -1,
  _id: -1,
});

const Product =
  mongoose.models.Cloths || mongoose.model("Cloths", productSchema);

export default Product;
