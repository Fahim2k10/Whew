// app/layout.js  (SERVER COMPONENT, no "use client")
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConvexProviderWrapper from "./components/ConvexProviderWrapper";

export const metadata = {
  title: "Whew",
  description: "Radio, Reimagined",
  openGraph: {
    title: "Whew",
    description: "Radio, Reimagined",
    url: "https://whew-music.vercel.app",
    siteName: "Whew",
    images: [
      {
        url: "/opengraph.png",
        width: 1440,
        height: 1024,
        alt: "Whew Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background" suppressHydrationWarning>
        <ConvexProviderWrapper>
          <Navbar />
          {children}
          <Footer />
        </ConvexProviderWrapper>
      </body>
    </html>
  );
}
