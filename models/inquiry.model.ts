import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
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

const Inquiry = mongoose.models.Inquiry || mongoose.model("Inquiry", inquirySchema);

export default Inquiry;
