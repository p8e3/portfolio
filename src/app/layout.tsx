import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Preloader } from "@/components/preloader";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Web Developer Portfolio",
  description: "Professional portfolio of an experienced web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Preloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
