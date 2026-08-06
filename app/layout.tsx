import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/lib/react-query/provider";

export const metadata: Metadata = {
  title: "Afazvin",
  description:
    "Afazvin | Clothings | Men's | Blazers, Suit Shervani, Indo Western, Jodhpuri, Fabrics and Readymade Garments, Ethnic wear, Koti Indo, Koti Kurta",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
