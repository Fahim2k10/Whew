"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background" suppressHydrationWarning>
        <ConvexProvider client={convex}>
          <Navbar />
          {children}
          <Footer />
        </ConvexProvider>
      </body>
    </html>
  );
}
