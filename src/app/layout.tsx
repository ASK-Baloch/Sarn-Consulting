import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

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
    icon: "/SARNLOGO.jpg",           // For browsers (favicon)
    apple: "/SARNLOGO.jpg",          // For Apple devices
  },
  openGraph: {
    title: "Sarn Consulting",
    description: "A consulting firm",
    url: "https://yourdomain.com",
    siteName: "Sarn Consulting",
    images: [
      {
        url: "https://yourdomain.com/SARNLOGO.jpg",
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
    images: ["https://yourdomain.com/SARNLOGO.jpg"],
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
      </body>
    </html>
  );
}
