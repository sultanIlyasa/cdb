import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/whatsapp-btn";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cahaya Dua Berlian",
  description: "Website Cahaya Dua Berlian",
  icons: {
    icon: "./cdb.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <WhatsAppButton
          phoneNumber="6281234567890"
          prefilledText="Halo, saya ingin bertanya tentang produk Anda."
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
