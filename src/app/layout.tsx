import Footer from "@/app/_components/footer";
import CtaBanner from "@/app/_components/cta-banner";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Partenar - Actualités et analyses du marketing d'influence",
  description: "Découvrez les dernières tendances, analyses et conseils sur l'écosystème des partenariats entre créateurs de contenu et marques.",
  keywords: "partenariats, créateurs, influenceurs, marques, marketing d'influence, sponsoring, collaboration",
  authors: [{ name: "Partenar" }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    title: "Partenar Blog",
    description: "Découvrez les dernières tendances sur les partenariats créateurs-marques",
    url: "https://blog.partenar.com",
    siteName: "Partenar Blog",
    images: [HOME_OG_IMAGE_URL],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partenar Blog",
    description: "Découvrez les dernières tendances sur les partenariats créateurs-marques",
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#279BFF" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">{children}</div>
        <CtaBanner />
        <Footer />
      </body>
    </html>
  );
}
