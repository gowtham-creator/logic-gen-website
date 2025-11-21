import type { Metadata } from "next";
import { satoshi } from './fonts';
import "./globals.css";
import { ReactLenis } from "lenis/react";

export const metadata: Metadata = {
  title: "Logic Gen",
  description: "Policy to Rules Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} antialiased`}
      >
        <ReactLenis root />
        {children}
      </body>
    </html>
  );
}
