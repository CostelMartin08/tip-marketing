import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "@/fontawesome";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "TIP Marketing",
  description: "Agentie de marketing",
  icons: {
    icon: '/favicon/favicon-32x32.png',
    shortcut: '/favicon/favicon-32x32.png',
    apple: '/favicon/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
