import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://endazhao.github.io"),
  title: {
    default: "Enda Zhao — Computer Science Researcher",
    template: "%s — Enda Zhao",
  },
  description:
    "Enda Zhao is a PhD student in Computer Science at Purdue University working on reliable language model reasoning and inference-time search.",
  authors: [{ name: "Enda Zhao", url: "https://endazhao.github.io" }],
  openGraph: {
    title: "Enda Zhao — Computer Science Researcher",
    description: "Research, publications, academic notes, and CV.",
    url: "https://endazhao.github.io",
    siteName: "Enda Zhao",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Enda Zhao — Research, Publications, Notes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enda Zhao — Computer Science Researcher",
    description: "Research, publications, academic notes, and CV.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
