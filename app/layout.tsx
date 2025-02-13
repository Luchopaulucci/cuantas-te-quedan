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
      <body className="w-full min-w-[360px]">
        <div className="flex min-h-screen items-center w-[80%] mx-auto  flex-col justify-between">
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
