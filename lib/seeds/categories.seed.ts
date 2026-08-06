import Category from "@/models/category.model";
import dotenv from "dotenv";
import { connectDB } from "../mongoose";
dotenv.config();

async function addCategories() {
  await connectDB();
  await Category.insertMany([
    {
      name: "Indo Western",
      description: "Stylish Indo Western outfits for modern occasions.",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_IndoWestern_D_01-03-2026-08-19?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
    },
    {
      name: "Jodhpuri",
      description: "Elegant Jodhpuri suits for weddings and special events.",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_Jodhpuri_D_02-03-2026-08-11?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
    },
  ]);
}
async function getCategories() {
  await connectDB();
  const categories = await Category.find();
  console.log("Categories:", categories);
}

getCategories()
  .then(() => {
    console.log("Categories retrieved successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error retrieving categories:", err);
    process.exit(1);
  });
