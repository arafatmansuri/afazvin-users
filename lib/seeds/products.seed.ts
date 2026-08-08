import Product from "@/models/product.model";
import dotenv from "dotenv";
import { connectDB } from "../mongoose";
dotenv.config();

async function addProducts() {
  await connectDB();
  await Product.insertMany([
    {
      name: "Cream Elegance Chanderi Kurta Churidar",
      slug: "cream-elegance-chanderi-kurta-churidar",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/CPSKS532-302-Cream-4-101_02-12-2025-13-12:650x900?dpr=on,1.1799999475479126",
      hoverImage:
        "https://manyavar.scene7.com/is/image/manyavar/CPSKS532-302-Cream-1-301_02-12-2025-13-12:650x900?dpr=on,1.1799999475479126",
      thumbnailImageAlt: "Cream Elegance Chanderi Kurta Churidar",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/CPSKS532-302-Cream-1-301_02-12-2025-13-12:650x900?dpr=on,1.1799999475479126",
        "https://manyavar.scene7.com/is/image/manyavar/CPSKS532-302-Cream-4-101_02-12-2025-13-12:650x900?dpr=on,1.1799999475479126",
        "https://manyavar.scene7.com/is/image/manyavar/CPSKS532-302-Cream-5-501_02-12-2025-13-12:650x900?dpr=on,1.1799999475479126",
      ],
      video:
        "https://manyavar.scene7.com/is/content/manyavar/CPSKS532-302-Cream_18-12-2025-13-45-0x900-1500k",
      colors: ["Cream"],
      price: 4999,
      isBestSeller: true,
      category: "6a76a3e1550e33721ddc7f13", // Replace with the actual category ID
      occasion: "6a76a4d3d7878e9e3c1edc24", // Replace with the actual occasion ID
      description:
        "This cream elegance chanderi kurta churidar is a perfect blend of traditional and contemporary style. Crafted from premium chanderi fabric, it features intricate embroidery and a comfortable fit, making it ideal for weddings, receptions, and festive occasions. Pair it with matching accessories to complete your look.",
    },
    {
      name: "Velvety Charm Dark Blue Open Jodhpuri Suit",
      slug: "velvety-charm-dark-blue-open-jodhpuri-suit",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/CTSD1439V-306_25-06-2026-11-21:650x900?dpr=on,1.1799999475479126",
      hoverImage:
        "https://manyavar.scene7.com/is/image/manyavar/close_up_v3_22-05-2026-13-33:650x900?dpr=on,1.1799999475479126",
      thumbnailImageAlt: "Velvety Charm Dark Blue Open Jodhpuri Suit",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/CTSD1439V-306_25-06-2026-11-21:650x900?dpr=on,1.1799999475479126",
        "https://manyavar.scene7.com/is/image/manyavar/close_up_v3_22-05-2026-13-33:650x900?dpr=on,1.1799999475479126",
        "https://manyavar.scene7.com/is/image/manyavar/3_4_v2th_22-05-2026-13-33:650x900?dpr=on,1.1799999475479126",
      ],
      colors: ["Blue"],
      price: 10999,
      isBestSeller: true,
      category: "6a749127b0fed3b05f68c9ce", // Replace with the actual category ID
      occasion: "6a76a4d3d7878e9e3c1edc25", // Replace with the actual occasion ID
      description:
        "This velvety charm dark blue open jodhpuri suit is a perfect blend of traditional and contemporary style. Crafted from premium fabric, it features intricate embroidery and a comfortable fit, making it ideal for weddings, receptions, and festive occasions. Pair it with matching accessories to complete your look.",
    },
    {
      name: "Light Grey & White Net Indo Western Set with Floral Embroidery",
      slug: "light-grey-white-net-indo-western-set-floral-embroidery",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/IWD0817-312_301_01-03-2026-04-32:650x900?dpr=on,1.1799999475479126",
      hoverImage:
        "https://manyavar.scene7.com/is/image/manyavar/IWD0817_312-301-Light+Grey-White.6324_27-02-2026-12-10:650x900?dpr=on,1.1799999475479126",
      thumbnailImageAlt:
        "Light Grey & White Net Indo Western Set with Floral Embroidery",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/IWD0817-312_301_01-03-2026-04-32:650x900?dpr=on,1.1799999475479126",
        "https://manyavar.scene7.com/is/image/manyavar/IWD0817_312-301-Light+Grey-White.6324_27-02-2026-12-10:650x900?dpr=on,1.1799999475479126",
        "https://manyavar.scene7.com/is/image/manyavar/IWD0817_312-301-Light+Grey-White.6311_27-02-2026-12-09:650x900?dpr=on,1.1799999475479126",
      ],
      video:
        "https://manyavar.scene7.com/is/content/manyavar/IWD0817_312-301-Light%20Grey-White_201_21-02-2026-10-18-0x900-1500k",
      colors: ["Grey"],
      price: 4999,
      isBestSeller: true,
      category: "6a749127b0fed3b05f68c9cd", // Replace with the actual category ID
      occasion: "6a76a4d3d7878e9e3c1edc24", // Replace with the actual occasion ID
      description:
        "This light grey and white net indo western set with floral embroidery is a perfect blend of traditional and contemporary style. Crafted from premium fabric, it features intricate embroidery and a comfortable fit, making it ideal for weddings, receptions, and festive occasions. Pair it with matching accessories to complete your look.",
    },
    {
      name: "Elegant Teal Blue Kurta Jacket Set",
      slug: "elegant-teal-blue-kurta-jacket-set",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/SJOS002_326-Teal+Blue_101.3176_04-05-2025-22-42:650x900?dpr=on,1.1799999475479126",
      hoverImage:
        "https://manyavar.scene7.com/is/image/manyavar/SJOS002_326-Teal+Blue_301.3181_04-05-2025-22-42:650x900?dpr=on,1.1799999475479126",
      thumbnailImageAlt: "Teal Blue Elegance Chanderi Kurta Jacket Set",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/SJOS002_326-Teal+Blue_101.3176_04-05-2025-22-42:650x900?dpr=on,1.1799999475479126",
        "https://manyavar.scene7.com/is/image/manyavar/SJOS002_326-Teal+Blue_301.3181_04-05-2025-22-42:650x900?dpr=on,1.1799999475479126",
        "https://manyavar.scene7.com/is/image/manyavar/SJOS002_326-Teal+Blue_401.3168_04-05-2025-22-42:650x900?dpr=on,1.1799999475479126",
      ],
      video:
        "https://manyavar.scene7.com/is/content/manyavar/SJOS002_326-Teal%20Blue_201_16-05-2025-10-33-0x900-1500k",
      colors: ["Blue"],
      price: 15000,
      isBestSeller: true,
      category: "6a76a3e1550e33721ddc7f13", // Replace with the actual category ID
      occasion: "6a76a4d3d7878e9e3c1edc28", // Replace with the actual occasion ID
      description:
        "This elegant teal blue kurta jacket set is a perfect blend of traditional and contemporary style. Crafted from premium fabric, it features intricate embroidery and a comfortable fit, making it ideal for weddings, receptions, and festive occasions. Pair it with matching accessories to complete your look.",
    },
    {
      name: "Enchanting Purple Kurta Pajama",
      slug: "enchanting-purple-kurta-pajama",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/SDES1371-313-PURPLE-101_23-08-2025-15-09:650x900?dpr=on,1.1799999475479126",
      hoverImage:
        "https://manyavar.scene7.com/is/image/manyavar/SDES1371-313-PURPLE-301_23-08-2025-14-43:650x900?dpr=on,1.1799999475479126",
      thumbnailImageAlt: "Enchanting Purple Kurta Pajama",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/SDES1371-313-PURPLE-101_23-08-2025-15-09:650x900?dpr=on,1.1799999475479126",
        "https://manyavar.scene7.com/is/image/manyavar/SDES1371-313-PURPLE-301_23-08-2025-14-43:650x900?dpr=on,1.1799999475479126",
        "https://manyavar.scene7.com/is/image/manyavar/SDES1371-313-PURPLE-701_23-08-2025-14-44:650x900?dpr=on,1.1799999475479126",
      ],
      video:
        "https://manyavar.scene7.com/is/content/manyavar/SDES1371-313-PURPLE__07-09-2025-13-07-0x900-1500k",
      colors: ["Purple"],
      price: 6999,
      isBestSeller: true,
      category: "6a76a3e1550e33721ddc7f14", // Replace with the actual category ID
      occasion: "6a76a4d3d7878e9e3c1edc29", // Replace with the actual occasion ID
      description:
        "This enchanting purple kurta pajama is a perfect blend of traditional and contemporary style. Crafted from premium fabric, it features intricate embroidery and a comfortable fit, making it ideal for weddings, receptions, and festive occasions. Pair it with matching accessories to complete your look.",
    },
  ]);
}
async function getProducts() {
  await connectDB();
  const Products = await Product.find();
  console.log("Products:", Products);
}

addProducts()
  .then(() => {
    console.log("Products added successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error adding Products:", err);
    process.exit(1);
  });
