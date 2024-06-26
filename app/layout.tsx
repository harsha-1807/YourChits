import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider, Protect } from "@clerk/nextjs";
import { ConvexClient } from "convex/browser";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Providers } from "./providers";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Chits",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#CBD6CC]">
      <body className={inter.className}>
        <Providers>
          <Navbar />

          {children}

          <br />
          <Toaster position="bottom-center" toastOptions={{ style: { background: 'black' } }} />
          <div className="">
            <Footer />
          </div>
          {/* <Footer />  */}
        </Providers>
      </body>
    </html>
  );
}
