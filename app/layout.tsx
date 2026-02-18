import type { Metadata } from "next";
import { Poppins, Cantarell } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const cantarell = Cantarell({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-cantarell',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vi",
  description: "A welcoming, non-intimidating gym in Kelowna. Limited memberships for a comfortable fitness experience. Free no-pressure intro sessions available.",
  keywords: "gym Kelowna, fitness Kelowna, beginner-friendly gym, neighbourhood gym, Vi Fit",
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
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
        className={`${poppins.variable} ${cantarell.variable} font-cantarell antialiased bg-background-light text-text-dark`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

