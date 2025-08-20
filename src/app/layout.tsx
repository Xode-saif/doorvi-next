import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";

import { Inter } from "next/font/google";
import Footer from "./components/footer/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional: use with Tailwind custom font
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QR Code Based Intercom | Access Control | Visitor Management",
  description: "Introducing DoorVi, A revolutionary smart video call solution. Securely connect with visitors via QR Code, no app required. Enjoy privacy and convenience with our weatherproof units and proprietary technology. Upgrade your doorbell experience today!",
  icons: {
    icon: '/assets/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-4DM73NVM1M"></Script>
        <Script id="gtag-init" strategy="lazyOnload">
         {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4DM73NVM1M');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
