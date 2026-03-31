import type { Metadata } from "next"
import "./globals.css"
import { Footer } from "@/shared/components/layout/Footer"
import { Navbar } from "@/shared/components/layout/Navbar"
import { siteConfig } from "@/shared/config/site"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.fullName}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Artificial Consciousness",
    "WAAC",
    "AI Ethics",
    "Neuroscience",
    "Cognitive Science",
    "World Academy",
  ],
  authors: [{ name: "WAAC Editorial" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.name} | ${siteConfig.fullName}`,
    description: siteConfig.description,
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
    title: `${siteConfig.name} | ${siteConfig.fullName}`,
    description: siteConfig.description,
    images: ["/images/waac_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
