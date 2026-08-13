import Category from "@/models/category.model";
import dotenv from "dotenv";
import { connectDB } from "./index";
dotenv.config();

async function addCategories() {
  await connectDB();
 await Category.create({
  name: "General",
  description: "General category for inquiries and miscellaneous items.",
  slug: "general",
  image:
    "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_D_01-03-2026-08-19?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
 })
  // await Category.insertMany([
  //   {
  //     name: "Sherwani",
  //     description:
  //       "Traditional Sherwani outfits for weddings and formal occasions.",
  //     slug: "sherwani",
  //     image:
  //       "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_D_01-03-2026-08-19?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
  //   },
  //   {
  //     name: "Koti Kurta",
  //     slug: "koti-kurta",
  //     description: "Elegant Koti KURTAS for weddings and special events.",
  //     image:
  //       "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_KurtaJacket_D_28-02-2026-09-39?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
  //   },
  //   {
  //     name: "Koti Indo",
  //     slug: "koti-indo",
  //     description: "Stylish Koti Indo Western outfits for modern occasions.",
  //     image:
  //       "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_KurtaSet_D_28-02-2026-09-40?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
  //   },
  //   {
  //     name: "Ethnic wear",
  //     slug: "ethnic-wear",
  //     description: "Traditional ethnic wear for various occasions.",
  //     image:
  //       "https://manyavar.scene7.com/is/image/manyavar/HP_Whats_your_vibe_ShortKurta_D_02-03-2026-09-25?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
  //   },
  //   {
  //     name: "Blazers",
  //     slug: "blazers",
  //     description: "Stylish blazers for formal and semi-formal occasions.",
  //     image:
  //       "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Reception_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
  //   },
  // ]);
  // await Category.insertMany([
  //   {
  //     name: "Indo Western",
  //     description: "Stylish Indo Western outfits for modern occasions.",
  //     image:
  //       "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_IndoWestern_D_01-03-2026-08-19?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
  //   },
  //   {
  //     name: "Jodhpuri",
  //     description: "Elegant Jodhpuri suits for weddings and special events.",
  //     image:
  //       "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_Jodhpuri_D_02-03-2026-08-11?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
  //   },
  // ]);
}
async function getCategories() {
  await connectDB();
  const categories = await Category.find();
  console.log("Categories:", categories);
}

getCategories()
  .then(() => {
    console.log("Categories added successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error adding categories:", err);
    process.exit(1);
  });
