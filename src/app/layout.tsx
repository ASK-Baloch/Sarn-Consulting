import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarn Consulting",
  description: "A consulting firm",
  icons: {
    icon: "/fotorsarn.png",           // For browsers (favicon)
    apple: "/fotorsarn.png",          // For Apple devices
  },
  openGraph: {
    title: "Sarn Consulting",
    description: "A consulting firm",
    url: "https://sarnconsulting.com",
    siteName: "Sarn Consulting",
    images: [
      {
        url: "https://sarnconsulting.com/sarn.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarn Consulting",
    description: "A consulting firm",
    images: ["https://sarnconsulting.com/sarn.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <SpeedInsights />
      </body>
    </html>
  );
}
