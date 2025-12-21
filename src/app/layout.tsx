import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "WAAC | World Academy for Artificial Consciousness",
    template: "%s | WAAC"
  },
  description: "Promoting international scientific research, collaboration, and ethical governance in the field of artificial consciousness.",
  keywords: ["Artificial Consciousness", "WAAC", "AI Ethics", "Neuroscience", "Cognitive Science", "World Academy"],
  authors: [{ name: "WAAC Editorial" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.waac.ac/",
    siteName: "World Academy for Artificial Consciousness",
    title: "WAAC | World Academy for Artificial Consciousness",
    description: "Leading global institution for artificial consciousness research and governance.",
    images: [
      {
        url: "/images/waac_logo.png",
        width: 1200,
        height: 630,
        alt: "WAAC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAAC | World Academy for Artificial Consciousness",
    description: "Leading global institution for artificial consciousness research and governance.",
    images: ["/images/waac_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}
  ;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
