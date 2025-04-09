import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "Cuántas te quedan?",
  description: "",
};

import { Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";

const montserrat = Montserrat();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-center w-full min-w-[360px] bg-gray-50">
        {/* <Navbar /> */}
        <main
          className={`${montserrat.className} container mx-auto max-w-5xl px-4`}
        >
          <Header />
          {children}
          <Analytics />
          <Footer />
        </main>
      </body>
    </html>
  );
}
