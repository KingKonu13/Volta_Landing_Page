import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  style: "normal",
  axes: ["opsz", "SOFT", "WONK"],
});

const siteUrl = "https://voltafile.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Volta — You do the science. Volta handles the filing work.",
  description:
    "Volta turns source documents into an expert-reviewed Pre-IND briefing package with milestone-based pricing.",
  keywords: [
    "Pre-IND",
    "IND",
    "regulatory",
    "biotech",
    "FDA",
    "briefing book",
    "expert review",
  ],
  openGraph: {
    title: "Volta — You do the science. Volta handles the filing work.",
    description:
      "AI drafts from your documents. Experts review. Claims stay linked to supporting material.",
    url: siteUrl,
    siteName: "Volta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volta — You do the science. Volta handles the filing work.",
    description:
      "AI drafts from your documents. Experts review. Claims stay linked to supporting material.",
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
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f8f6f2] font-sans text-[#1c1612]">
        {children}
      </body>
    </html>
  );
}
