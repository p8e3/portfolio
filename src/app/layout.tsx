import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Preloader } from "@/components/preloader";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/ui/theme-toggle";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "p8e3 Portfolio",
  title: {
    default: "p8e3 — Web Developer",
    template: "%s | p8e3 — Web Developer",
  },
  description:
    "Full‑stack web developer with 12+ years of experience. React, Vue.js, Node.js, Angular, Python, PHP, Docker, MySQL, MongoDB.",
  keywords: [
    "Web Developer",
    "Full‑stack",
    "React",
    "Next.js",
    "Vue",
    "Node.js",
    "Angular",
    "TypeScript",
    "Docker",
    "MySQL",
    "MongoDB",
    "Telegram bots",
    "Aiogram",
    "Portfolio",
  ],
  authors: [{ name: "p8e3" }],
  creator: "p8e3",
  publisher: "p8e3",
  openGraph: {
    title: "p8e3 — Web Developer",
    description:
      "Full‑stack web developer with 12+ years of experience. React, Vue.js, Node.js, Angular, Python, PHP, Docker, MySQL, MongoDB.",
    url: "/",
    siteName: "p8e3 Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "p8e3 — Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "p8e3 — Web Developer",
    description:
      "Full‑stack web developer with 12+ years of experience. React, Vue.js, Node.js, Angular, Python, PHP, Docker, MySQL, MongoDB.",
    images: ["/images/profile.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "p8e3",
              url: siteUrl,
              jobTitle: "Web Developer",
              description:
                "Full‑stack web developer with 12+ years of experience. React, Vue.js, Node.js, Angular, Python, PHP, Docker, MySQL, MongoDB.",
              image: `${siteUrl}/images/profile.jpg`,
              sameAs: [
                "https://github.com/p8e3",
                "https://t.me/+79781643792"
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "p8e3 Portfolio",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Preloader />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
