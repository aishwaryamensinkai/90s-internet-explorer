import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Internet Explorer - 90s Style",
  description: "Experience the nostalgia of 90s web browsing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#008080]">
        <div className="container mx-auto min-h-screen flex flex-col bg-gray-200 shadow-lg">
          <div className="bg-gray-300 p-2">
            <Image
              src="/ie-logo.png"
              alt="Internet Explorer Logo"
              width={40}
              height={40}
            />
          </div>
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-4 bg-white border-2 border-gray-800 m-2">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
