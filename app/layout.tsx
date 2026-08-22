import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { getCategories } from "@/lib/placeholder-data/landing";
import QueryProvider from "@/lib/react-query/provider";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

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
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
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
