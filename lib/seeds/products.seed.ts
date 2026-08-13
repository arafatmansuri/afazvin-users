import Product from "@/models/product.model";
import dotenv from "dotenv";
import { connectDB } from "./index";
dotenv.config();

async function addProducts() {
  await connectDB();
  await Product.insertMany([
    {
      name: "Royal Ivory Embroidered Sherwani",
      slug: "royal-ivory-embroidered-sherwani",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/CTSD1439V-306_25-06-2026-11-21:650x900?dpr=on,1.1799999475479126",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Royal Ivory Embroidered Sherwani",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/CTSD1439V-306_25-06-2026-11-21:650x900?dpr=on,1.1799999475479126",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Ivory"],
      price: 18999,
      isBestSeller: true,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f12",
      occasion: "6a76a4d3d7878e9e3c1edc24",
      description:
        "Elegant ivory sherwani with intricate embroidery, perfect for wedding ceremonies.",
      views: 1840,
    },
    {
      name: "Midnight Navy Structured Blazer",
      slug: "midnight-navy-structured-blazer",
      thumbnailImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Midnight Navy Structured Blazer",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Navy"],
      price: 8499,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f16",
      occasion: "6a76a4d3d7878e9e3c1edc29",
      description:
        "Sharp structured navy blazer ideal for cocktail and semi-formal occasions.",
      views: 720,
    },
    {
      name: "Champagne Open Indo Western",
      slug: "champagne-open-indo-western",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_IndoWestern_D_01-03-2026-08-19?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Champagne Open Indo Western",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_IndoWestern_D_01-03-2026-08-19?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Champagne"],
      price: 12999,
      isBestSeller: true,
      isHandPicked: false,
      category: "6a749127b0fed3b05f68c9cd",
      occasion: "6a76a4d3d7878e9e3c1edc25",
      description:
        "Elegant champagne open Indo Western for receptions and formal events.",
      views: 1560,
    },
    {
      name: "Maroon Velvet Jodhpuri Suit",
      slug: "maroon-velvet-jodhpuri-suit",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_Jodhpuri_D_02-03-2026-08-11?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Maroon Velvet Jodhpuri Suit",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_Jodhpuri_D_02-03-2026-08-11?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Maroon"],
      price: 11499,
      isBestSeller: false,
      isHandPicked: false,
      category: "6a749127b0fed3b05f68c9ce",
      occasion: "6a76a4d3d7878e9e3c1edc24",
      description:
        "Rich maroon velvet Jodhpuri with classic detailing for weddings.",
      views: 890,
    },
    {
      name: "Teal Blue Koti Indo",
      slug: "teal-blue-koti-indo",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_KurtaSet_D_28-02-2026-09-40?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Teal Blue Koti Indo",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_KurtaSet_D_28-02-2026-09-40?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Teal"],
      price: 9499,
      isBestSeller: true,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f14",
      occasion: "6a76a4d3d7878e9e3c1edc26",
      description:
        "Contemporary teal blue Koti Indo set for engagement ceremonies.",
      views: 1120,
    },
    {
      name: "Cream Embroidered Koti Kurta",
      slug: "cream-embroidered-koti-kurta",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_KurtaJacket_D_28-02-2026-09-39?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Cream Embroidered Koti Kurta",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_KurtaJacket_D_28-02-2026-09-39?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Cream"],
      price: 8799,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f13",
      occasion: "6a76a4d3d7878e9e3c1edc28",
      description:
        "Soft cream koti kurta with delicate embroidery, ideal for mehendi functions.",
      views: 680,
    },
    {
      name: "Olive Green Printed Ethnic Kurta",
      slug: "olive-green-printed-ethnic-kurta",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/HP_Whats_your_vibe_ShortKurta_D_02-03-2026-09-25?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Olive Green Printed Ethnic Kurta",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/HP_Whats_your_vibe_ShortKurta_D_02-03-2026-09-25?$WT_HP_Vibe%2FTrending_D$&dpr=on,1.1799999475479126",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Olive"],
      price: 6499,
      isBestSeller: false,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f15",
      occasion: "6a76a4d3d7878e9e3c1edc27",
      description:
        "Comfortable olive green printed ethnic kurta perfect for haldi ceremonies.",
      views: 430,
    },
    {
      name: "Navy Blue Classic Sherwani",
      slug: "navy-blue-classic-sherwani",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Wedding_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Navy Blue Classic Sherwani",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Wedding_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Navy"],
      price: 15999,
      isBestSeller: true,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f12",
      occasion: "6a76a4d3d7878e9e3c1edc25",
      description:
        "Timeless navy blue sherwani with self-textured fabric for reception celebrations.",
      views: 1920,
    },
    {
      name: "Beige Linen Indo Western Jacket",
      slug: "beige-linen-indo-western-jacket",
      thumbnailImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Beige Linen Indo Western Jacket",
      images: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Beige"],
      price: 8999,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a749127b0fed3b05f68c9cd",
      occasion: "6a76a4d3d7878e9e3c1edc29",
      description:
        "Breathable beige linen Indo Western jacket for cocktail and daytime events.",
      views: 540,
    },
    {
      name: "Wine Red Open Jodhpuri",
      slug: "wine-red-open-jodhpuri",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Reception_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Wine Red Open Jodhpuri",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Reception_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Wine"],
      price: 12499,
      isBestSeller: true,
      isHandPicked: false,
      category: "6a749127b0fed3b05f68c9ce",
      occasion: "6a76a4d3d7878e9e3c1edc26",
      description:
        "Striking wine red open Jodhpuri with modern cut for engagement parties.",
      views: 1340,
    },
    {
      name: "Mustard Yellow Haldi Kurta",
      slug: "mustard-yellow-haldi-kurta",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Haldi_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Mustard Yellow Haldi Kurta",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Haldi_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Mustard"],
      price: 5499,
      isBestSeller: false,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f15",
      occasion: "6a76a4d3d7878e9e3c1edc27",
      description: "Vibrant mustard yellow kurta designed for haldi rituals.",
      views: 390,
    },
    {
      name: "Charcoal Grey Slim Fit Blazer",
      slug: "charcoal-grey-slim-fit-blazer",
      thumbnailImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Charcoal Grey Slim Fit Blazer",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Charcoal"],
      price: 8499,
      isBestSeller: true,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f16",
      occasion: "6a76a4d3d7878e9e3c1edc29",
      description: "Modern charcoal grey slim-fit blazer with notched lapels.",
      views: 1480,
    },
    {
      name: "Pastel Pink Embroidered Sherwani",
      slug: "pastel-pink-embroidered-sherwani",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Engagement_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Pastel Pink Embroidered Sherwani",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Engagement_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Pink"],
      price: 17499,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f12",
      occasion: "6a76a4d3d7878e9e3c1edc24",
      description: "Soft pastel pink sherwani with delicate resham embroidery.",
      views: 760,
    },
    {
      name: "Black Mirror Work Koti Indo",
      slug: "black-mirror-work-koti-indo",
      thumbnailImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Black Mirror Work Koti Indo",
      images: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Black"],
      price: 9999,
      isBestSeller: true,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f14",
      occasion: "6a76a4d3d7878e9e3c1edc25",
      description:
        "Statement black koti Indo with mirror work accents for evening receptions.",
      views: 1650,
    },
    {
      name: "Sky Blue Printed Koti Kurta",
      slug: "sky-blue-printed-koti-kurta",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Mehendi_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Sky Blue Printed Koti Kurta",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Mehendi_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Sky Blue"],
      price: 7999,
      isBestSeller: false,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f13",
      occasion: "6a76a4d3d7878e9e3c1edc28",
      description:
        "Light sky blue printed koti kurta set for mehendi and pre-wedding events.",
      views: 510,
    },
    {
      name: "Emerald Green Velvet Sherwani",
      slug: "emerald-green-velvet-sherwani",
      thumbnailImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Emerald Green Velvet Sherwani",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Emerald"],
      price: 19999,
      isBestSeller: true,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f12",
      occasion: "6a76a4d3d7878e9e3c1edc24",
      description:
        "Luxurious emerald green velvet sherwani with gold accents for the wedding day.",
      views: 2180,
    },
    {
      name: "Taupe Structured Blazer",
      slug: "taupe-structured-blazer",
      thumbnailImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Taupe Structured Blazer",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Taupe"],
      price: 7799,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f16",
      occasion: "6a76a4d3d7878e9e3c1edc26",
      description: "Neutral taupe structured blazer with refined silhouette.",
      views: 620,
    },
    {
      name: "Rust Orange Indo Western Set",
      slug: "rust-orange-indo-western-set",
      thumbnailImage:
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Cocktail_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Rust Orange Indo Western Set",
      images: [
        "https://manyavar.scene7.com/is/image/manyavar/Shop_the_occasion_Cocktail_D_28-02-2026-12-06?wid=310&hei=360&dpr=on,1.1799999475479126",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Rust"],
      price: 10999,
      isBestSeller: true,
      isHandPicked: false,
      category: "6a749127b0fed3b05f68c9cd",
      occasion: "6a76a4d3d7878e9e3c1edc28",
      description:
        "Warm rust orange Indo Western set with geometric embroidery.",
      views: 970,
    },
    {
      name: "Ivory Classic Jodhpuri",
      slug: "ivory-classic-jodhpuri",
      thumbnailImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Ivory Classic Jodhpuri",
      images: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Ivory"],
      price: 11999,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a749127b0fed3b05f68c9ce",
      occasion: "6a76a4d3d7878e9e3c1edc25",
      description: "Clean ivory classic Jodhpuri with minimal detailing.",
      views: 830,
    },
    {
      name: "Lavender Embroidered Koti Kurta",
      slug: "lavender-embroidered-koti-kurta",
      thumbnailImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Lavender Embroidered Koti Kurta",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Lavender"],
      price: 8499,
      isBestSeller: false,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f13",
      occasion: "6a76a4d3d7878e9e3c1edc26",
      description:
        "Soft lavender koti kurta with light embroidery for engagement ceremonies.",
      views: 470,
    },
    {
      name: "Deep Purple Velvet Blazer",
      slug: "deep-purple-velvet-blazer",
      thumbnailImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Deep Purple Velvet Blazer",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Purple"],
      price: 9499,
      isBestSeller: true,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f16",
      occasion: "6a76a4d3d7878e9e3c1edc29",
      description: "Rich deep purple velvet blazer with satin peak lapels.",
      views: 1710,
    },
    {
      name: "Gold Brocade Sherwani",
      slug: "gold-brocade-sherwani",
      thumbnailImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Gold Brocade Sherwani",
      images: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Gold"],
      price: 22999,
      isBestSeller: true,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f12",
      occasion: "6a76a4d3d7878e9e3c1edc24",
      description:
        "Opulent gold brocade sherwani crafted for the most special wedding moments.",
      views: 2450,
    },
    {
      name: "Sea Green Printed Ethnic Set",
      slug: "sea-green-printed-ethnic-set",
      thumbnailImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Sea Green Printed Ethnic Set",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Sea Green"],
      price: 5999,
      isBestSeller: false,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f15",
      occasion: "6a76a4d3d7878e9e3c1edc27",
      description:
        "Fresh sea green printed ethnic set in soft cotton for haldi functions.",
      views: 350,
    },
    {
      name: "Copper Tone Open Indo Western",
      slug: "copper-tone-open-indo-western",
      thumbnailImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Copper Tone Open Indo Western",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Copper"],
      price: 13499,
      isBestSeller: true,
      isHandPicked: false,
      category: "6a749127b0fed3b05f68c9cd",
      occasion: "6a76a4d3d7878e9e3c1edc25",
      description: "Warm copper tone open Indo Western with fine thread work.",
      views: 1230,
    },
    {
      name: "Slate Grey Jodhpuri Suit",
      slug: "slate-grey-jodhpuri-suit",
      thumbnailImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Slate Grey Jodhpuri Suit",
      images: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Slate Grey"],
      price: 10499,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a749127b0fed3b05f68c9ce",
      occasion: "6a76a4d3d7878e9e3c1edc29",
      description:
        "Sophisticated slate grey Jodhpuri with structured shoulders.",
      views: 640,
    },
    {
      name: "Peach Embroidered Koti Indo",
      slug: "peach-embroidered-koti-indo",
      thumbnailImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Peach Embroidered Koti Indo",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Peach"],
      price: 8999,
      isBestSeller: false,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f14",
      occasion: "6a76a4d3d7878e9e3c1edc28",
      description: "Soft peach koti Indo with delicate floral embroidery.",
      views: 580,
    },
    {
      name: "Burgundy Classic Sherwani",
      slug: "burgundy-classic-sherwani",
      thumbnailImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Burgundy Classic Sherwani",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Burgundy"],
      price: 16999,
      isBestSeller: true,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f12",
      occasion: "6a76a4d3d7878e9e3c1edc24",
      description: "Deep burgundy classic sherwani with self-design fabric.",
      views: 1570,
    },
    {
      name: "Off-White Linen Blazer",
      slug: "off-white-linen-blazer",
      thumbnailImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Off-White Linen Blazer",
      images: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Off-White"],
      price: 7299,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f16",
      occasion: "6a76a4d3d7878e9e3c1edc26",
      description:
        "Lightweight off-white linen blazer with relaxed yet polished fit.",
      views: 490,
    },
    {
      name: "Turquoise Printed Koti Kurta",
      slug: "turquoise-printed-koti-kurta",
      thumbnailImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Turquoise Printed Koti Kurta",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Turquoise"],
      price: 7699,
      isBestSeller: true,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f13",
      occasion: "6a76a4d3d7878e9e3c1edc27",
      description:
        "Vibrant turquoise printed koti kurta for haldi and daytime functions.",
      views: 910,
    },
    {
      name: "Silver Grey Open Jodhpuri",
      slug: "silver-grey-open-jodhpuri",
      thumbnailImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Silver Grey Open Jodhpuri",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Silver Grey"],
      price: 12999,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a749127b0fed3b05f68c9ce",
      occasion: "6a76a4d3d7878e9e3c1edc25",
      description: "Elegant silver grey open Jodhpuri with subtle sheen.",
      views: 950,
    },
    {
      name: "Coral Pink Ethnic Kurta",
      slug: "coral-pink-ethnic-kurta",
      thumbnailImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Coral Pink Ethnic Kurta",
      images: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Coral"],
      price: 5799,
      isBestSeller: false,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f15",
      occasion: "6a76a4d3d7878e9e3c1edc28",
      description: "Bright coral pink ethnic kurta with minimal prints.",
      views: 410,
    },
    {
      name: "Navy Embroidered Indo Western",
      slug: "navy-embroidered-indo-western",
      thumbnailImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Navy Embroidered Indo Western",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Navy"],
      price: 13999,
      isBestSeller: true,
      isHandPicked: true,
      category: "6a749127b0fed3b05f68c9cd",
      occasion: "6a76a4d3d7878e9e3c1edc24",
      description: "Deep navy Indo Western with refined embroidery.",
      views: 1820,
    },
    {
      name: "Chocolate Brown Koti Indo",
      slug: "chocolate-brown-koti-indo",
      thumbnailImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Chocolate Brown Koti Indo",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Brown"],
      price: 9299,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f14",
      occasion: "6a76a4d3d7878e9e3c1edc29",
      description: "Rich chocolate brown koti Indo with clean tailoring.",
      views: 720,
    },
    {
      name: "Ivory Embroidered Koti Kurta",
      slug: "ivory-embroidered-koti-kurta",
      thumbnailImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Ivory Embroidered Koti Kurta",
      images: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Ivory"],
      price: 8199,
      isBestSeller: true,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f13",
      occasion: "6a76a4d3d7878e9e3c1edc26",
      description: "Classic ivory embroidered koti kurta with soft fabric.",
      views: 1080,
    },
    {
      name: "Black Classic Blazer",
      slug: "black-classic-blazer",
      thumbnailImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Black Classic Blazer",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Black"],
      price: 7499,
      isBestSeller: false,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f16",
      occasion: "6a76a4d3d7878e9e3c1edc25",
      description: "Timeless black classic blazer with sharp tailoring.",
      views: 560,
    },
    {
      name: "Saffron Yellow Haldi Set",
      slug: "saffron-yellow-haldi-set",
      thumbnailImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Saffron Yellow Haldi Set",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Saffron"],
      price: 6299,
      isBestSeller: true,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f15",
      occasion: "6a76a4d3d7878e9e3c1edc27",
      description:
        "Bright saffron yellow ethnic set for vibrant haldi ceremonies.",
      views: 990,
    },
    {
      name: "Rose Gold Open Sherwani",
      slug: "rose-gold-open-sherwani",
      thumbnailImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Rose Gold Open Sherwani",
      images: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Rose Gold"],
      price: 18499,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f12",
      occasion: "6a76a4d3d7878e9e3c1edc24",
      description:
        "Contemporary rose gold open sherwani with metallic accents.",
      views: 1310,
    },
    {
      name: "Forest Green Indo Western Jacket",
      slug: "forest-green-indo-western-jacket",
      thumbnailImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Forest Green Indo Western Jacket",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Forest Green"],
      price: 9799,
      isBestSeller: true,
      isHandPicked: false,
      category: "6a749127b0fed3b05f68c9cd",
      occasion: "6a76a4d3d7878e9e3c1edc29",
      description: "Deep forest green Indo Western jacket with structured fit.",
      views: 1140,
    },
    {
      name: "Cream Velvet Jodhpuri",
      slug: "cream-velvet-jodhpuri",
      thumbnailImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Cream Velvet Jodhpuri",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Cream"],
      price: 13999,
      isBestSeller: false,
      isHandPicked: false,
      category: "6a749127b0fed3b05f68c9ce",
      occasion: "6a76a4d3d7878e9e3c1edc26",
      description: "Soft cream velvet Jodhpuri with elegant button detailing.",
      views: 780,
    },
    {
      name: "Mint Green Printed Koti Indo",
      slug: "mint-green-printed-koti-indo",
      thumbnailImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Mint Green Printed Koti Indo",
      images: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Mint"],
      price: 8599,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f14",
      occasion: "6a76a4d3d7878e9e3c1edc28",
      description:
        "Fresh mint green printed koti Indo for mehendi celebrations.",
      views: 530,
    },
    {
      name: "Steel Blue Slim Blazer",
      slug: "steel-blue-slim-blazer",
      thumbnailImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Steel Blue Slim Blazer",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Steel Blue"],
      price: 8199,
      isBestSeller: true,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f16",
      occasion: "6a76a4d3d7878e9e3c1edc29",
      description: "Modern steel blue slim-fit blazer for cocktail evenings.",
      views: 1420,
    },
    {
      name: "Marigold Ethnic Kurta Set",
      slug: "marigold-ethnic-kurta-set",
      thumbnailImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Marigold Ethnic Kurta Set",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Marigold"],
      price: 5699,
      isBestSeller: false,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f15",
      occasion: "6a76a4d3d7878e9e3c1edc27",
      description:
        "Bright marigold ethnic kurta set for traditional haldi rituals.",
      views: 380,
    },
    {
      name: "Platinum Grey Sherwani",
      slug: "platinum-grey-sherwani",
      thumbnailImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Platinum Grey Sherwani",
      images: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Platinum"],
      price: 17999,
      isBestSeller: true,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f12",
      occasion: "6a76a4d3d7878e9e3c1edc25",
      description: "Sophisticated platinum grey sherwani with subtle texture.",
      views: 1630,
    },
    {
      name: "Sand Beige Koti Kurta",
      slug: "sand-beige-koti-kurta",
      thumbnailImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Sand Beige Koti Kurta",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Beige"],
      price: 7899,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f13",
      occasion: "6a76a4d3d7878e9e3c1edc26",
      description: "Neutral sand beige koti kurta with understated embroidery.",
      views: 610,
    },
    {
      name: "Indigo Open Indo Western",
      slug: "indigo-open-indo-western",
      thumbnailImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Indigo Open Indo Western",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Indigo"],
      price: 11999,
      isBestSeller: true,
      isHandPicked: true,
      category: "6a749127b0fed3b05f68c9cd",
      occasion: "6a76a4d3d7878e9e3c1edc24",
      description: "Deep indigo open Indo Western with fine detailing.",
      views: 1480,
    },
    {
      name: "Copper Brown Jodhpuri Suit",
      slug: "copper-brown-jodhpuri-suit",
      thumbnailImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Copper Brown Jodhpuri Suit",
      images: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Copper Brown"],
      price: 12499,
      isBestSeller: false,
      isHandPicked: false,
      category: "6a749127b0fed3b05f68c9ce",
      occasion: "6a76a4d3d7878e9e3c1edc25",
      description: "Warm copper brown Jodhpuri suit with classic silhouette.",
      views: 690,
    },
    {
      name: "Aqua Blue Koti Indo Set",
      slug: "aqua-blue-koti-indo-set",
      thumbnailImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Aqua Blue Koti Indo Set",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      ],
      colors: ["Aqua"],
      price: 9199,
      isBestSeller: true,
      isHandPicked: false,
      category: "6a76a3e1550e33721ddc7f14",
      occasion: "6a76a4d3d7878e9e3c1edc28",
      description:
        "Refreshing aqua blue koti Indo set for mehendi celebrations.",
      views: 1010,
    },
    {
      name: "Charcoal Embroidered Sherwani",
      slug: "charcoal-embroidered-sherwani",
      thumbnailImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Charcoal Embroidered Sherwani",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      ],
      colors: ["Charcoal"],
      price: 19499,
      isBestSeller: true,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f12",
      occasion: "6a76a4d3d7878e9e3c1edc24",
      description: "Elegant charcoal embroidered sherwani with rich detailing.",
      views: 1980,
    },
    {
      name: "Pearl White Classic Blazer",
      slug: "pearl-white-classic-blazer",
      thumbnailImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
      hoverImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
      thumbnailImageAlt: "Pearl White Classic Blazer",
      images: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=650&h=900&fit=crop",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=650&h=900&fit=crop",
      ],
      colors: ["Pearl White"],
      price: 8699,
      isBestSeller: false,
      isHandPicked: true,
      category: "6a76a3e1550e33721ddc7f16",
      occasion: "6a76a4d3d7878e9e3c1edc26",
      description: "Crisp pearl white classic blazer with clean lines.",
      views: 740,
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
