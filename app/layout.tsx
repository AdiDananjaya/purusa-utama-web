import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Purusa Utama | Sewa Tenda & Dekorasi Bali",
  description: "Sewa tenda VIP, kursi, meja, dan dekorasi elegan di Bali. Menciptakan suasana premium tak terlupakan untuk pernikahan, corporate event, dan acara sejak tahun 2000.",
  keywords: ["sewa tenda bali", "dekorasi pernikahan bali", "bali wedding tent rental", "bali event decoration", "sewa kursi bali", "tenda VIP bali", "Purusa Utama", "rental tenda pernikahan"],
  authors: [{ name: "Purusa Utama" }],
  creator: "Purusa Utama",
  publisher: "Purusa Utama",
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: "https://purusa-utama-web.vercel.app/",
    title: "Purusa Utama | Sewa Tenda & Dekorasi Bali",
    description: "Sewa tenda VIP, kursi, meja, dan dekorasi elegan di Bali. Menciptakan suasana premium tak terlupakan untuk acara Anda.",
    siteName: "Purusa Utama",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Purusa Utama Event Decoration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Purusa Utama | Sewa Tenda & Dekorasi Bali",
    description: "Sewa tenda VIP, kursi, meja, dan dekorasi elegan di Bali. Menciptakan suasana premium tak terlupakan untuk acara Anda.",
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} font-sans relative`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
