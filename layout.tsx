import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/context/CartContext";
import { SHOP } from "@/lib/shop-config";

export const metadata: Metadata = {
  title: `${SHOP.name} - Mobile Accessories Online`,
  description:
    "Genuine mobile accessories - cases, chargers, cables, power banks and more. Delivery all over India, Cash on Delivery available."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background font-body-md text-on-surface antialiased">
        <CartProvider>
          <Header />
          <main className="w-full pt-36 bg-background min-h-screen">{children}</main>
          <WhatsAppButton />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
