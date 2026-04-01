import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist_Mono, Manrope, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julien Glin | Software Engineer in Training",
  description:
    "Portfolio of Julien Glin, final-year EPITA engineering student focused on full-stack development, high-reliability systems, and motorsport-inspired products.",
  metadataBase: new URL("https://julien-glin.dev"),
  openGraph: {
    title: "Julien Glin | EPITA Portfolio",
    description:
      "Explore the projects, experience, and services of Julien Glin, a future software engineer driven by motorsport performance.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julien Glin | EPITA Software Engineer",
    description:
      "Projects, experience, and services delivered by Julien Glin, a motorsport-inspired software engineer in training.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${sora.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
