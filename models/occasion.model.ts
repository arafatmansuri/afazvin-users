import mongoose from "mongoose";

const occasionSchema = new mongoose.Schema(
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
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Occasion = mongoose.model("Occasion", occasionSchema);

export default Occasion;
