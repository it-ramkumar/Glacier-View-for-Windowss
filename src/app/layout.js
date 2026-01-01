import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Glacier View | Premium Van Windows",
  description: "Transform your campervan with Glacier View's premium insulated awning windows. Automotive-grade windows for Sprinter, Transit, and ProMaster vans.",
  keywords: "van windows, campervan windows, RV windows, Sprinter windows, Transit windows, ProMaster windows, insulated windows, awning windows",
  authors: [{ name: "Glacier View" }],
  openGraph: {
    title: "Glacier View | Premium Van Windows",
    description: "Premium insulated awning windows for van conversions",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/fav-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a]`}
      >
        {children}
      </body>
    </html>
  );
}