"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Whew",
  description: "Radio, Reimagined",
  openGraph: {
    title: "Whew",
    description: "Radio, Reimagined",
    url: "https://whew-music.vercel.app", // swap with your real domain
    siteName: "Whew",
    images: [
      {
        url: "./opengraph.png", // place hero.png inside /public
        width: 1200,
        height: 630,
        alt: "Whew Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


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
