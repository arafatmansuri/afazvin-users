import QueryProvider from "@/lib/react-query/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { getCategories } from "@/lib/placeholder-data/landing";
import { connectDB } from "@/lib/mongoose";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afazvin | Premium Wholesale Menswear",
  description:
    "Wholesale manufacturer of blazers, sherwanis, Indo-western, Jodhpuri, ethnic wear and more for retailers across India.",
  // icons: {
  //   icon: "/logo-nav.png",
  // },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  await connectDB();
  const categoriesWithGeneral = await getCategories();
    const categories = categoriesWithGeneral.filter(
      (cat) => cat.slug !== "general",
    );
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <QueryProvider>
          <Navbar
            categories={categories.map((cat) => ({
              name: cat.name,
              slug: cat.slug,
              _id: cat._id,
            }))}
          />
          {children}
          <Footer categories={categories} />
          <FloatingActions />
        </QueryProvider>
      </body>
    </html>
  );
}
