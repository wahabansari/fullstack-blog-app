import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "./components/layout/AppLayout";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const geistHeading = Geist({ subsets: ["latin"], variable: "--font-heading" });

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Tech Blogs",
  description: "A collection of tech blogs and articles.",
  keywords: ["tech", "blogs", "articles", "programming", "development"],
  authors: [{ name: "Your Name" /*url: "https://yourwebsite.com"*/ }],
  openGraph: {
    title: "Tech Blogs",
    description: "A collection of tech blogs and articles.",
    // url: "https://yourwebsite.com",
    siteName: "Tech Blogs",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Blogs Open Graph Image",
      },
    ],
    locale: "en_US",
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
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        inter.variable,
        geistHeading.variable,
      )}
    >
      <body className="min-h-screen flex flex-col">
        <AppLayout>{children}</AppLayout>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
