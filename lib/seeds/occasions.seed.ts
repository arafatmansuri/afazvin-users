import Occasion from "@/models/occasion.model";
import dotenv from "dotenv";
import { connectDB } from "./index";
dotenv.config();

async function addOccasions() {
  await connectDB();
  await Occasion.insertMany([
    {
      name: "Wedding",
      description:
        "Celebrate love and commitment with our exquisite wedding attire, perfect for the big day.",
      slug: "wedding",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Wedding_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
    },
    {
      name: "Reception",
      slug: "reception",
      description: "Elegant Reception outfits for special events.",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Reception_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
    },
    {
      name: "Engagement",
      slug: "engagement",
      description: "Beautiful Engagement outfits for your special moment.",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Engagement_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
    },
    {
      name: "Haldi",
      slug: "haldi",
      description: "Traditional Haldi outfits for the pre-wedding ceremony.",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Haldi_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
    },
    {
      name: "Mehendi",
      slug: "mehendi",
      description: "Elegant Mehendi outfits for the pre-wedding ceremony.",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Mehendi_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
    },
    {
      name: "Cocktail",
      slug: "cocktail",
      description: "Stylish Cocktail outfits for semi-formal events.",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Cocktail_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
    },
  ]);
}
async function getOccasions() {
  await connectDB();
  const Occasions = await Occasion.find();
  console.log("Occasions:", Occasions);
}

getOccasions()
  .then(() => {
    console.log("Occasions added successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error adding Occasions:", err);
    process.exit(1);
  });
