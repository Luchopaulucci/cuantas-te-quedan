import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "Cuántas te quedan?",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-center w-full min-w-[360px] bg-backgroundColor">
        <div className="flex flex-col justify-between min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
            <Analytics />
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
