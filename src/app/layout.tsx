import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans-app",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orbital AI Sentinel",
  description:
    "AI-powered global early warning and crisis intelligence system for crisis forecasting, orbital monitoring, and response planning.",
  keywords: [
    "crisis intelligence",
    "orbital monitoring",
    "risk dashboard",
    "satellite AI",
    "early warning system",
  ],
  openGraph: {
    title: "Orbital AI Sentinel",
    description: "Predicting crises before they happen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
