import Category from "@/models/category.model";
import Inquiry from "@/models/inquiry.model";
import Occasion from "@/models/occasion.model";
import Product from "@/models/product.model";
import dotenv from "dotenv";
import { connectDB } from "./index";
dotenv.config();

async function updateDatabase() {
  await connectDB();
  await Category.updateMany({}, { $set: { isActive: true } });
  await Occasion.updateMany({}, { $set: { isActive: true } });
  await Product.updateMany({}, { $set: { status: "published" } });
  await Inquiry.updateMany({}, { $set: { status: "pending" } });
}
async function getUpdatedDatabase() {
  await connectDB();
  const products = await Product.find({ isActive: false }).lean();
  const occasions = await Occasion.find({ isActive: false }).lean();
  const inquiries = await Inquiry.find({ status: "pending" }).lean();
  console.log("Products with isActive false:", products);
  console.log("Occasions with isActive false:", occasions);
  console.log("Inquiries with status pending:", inquiries);
}

getUpdatedDatabase()
  .then(() => {
    console.log("Database updated successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error updating database:", err);
    process.exit(1);
  });
