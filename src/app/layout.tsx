import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "../pages/footer";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cahaya Dua Berlian",
  description: "Website Cahaya Dua Berlian",
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
        {children}
        <Footer />
        </body>
        
        
    </html>
  );
}
