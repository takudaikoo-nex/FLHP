import type { Metadata } from "next";
import { Noto_Sans_JP, Cormorant_Garamond, Shippori_Mincho } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SpFixedCta } from "@/components/ui/SpFixedCta";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ファーストリーフ株式会社 ─ 葬儀社を、決める前に。",
    template: "%s | ファーストリーフ",
  },
  description:
    "神奈川県の葬儀・終活の中立な相談窓口。安置の手配から葬儀施行、遺品整理・相続まで一気通貫でサポート。24時間365日対応。",
  metadataBase: new URL("https://firstleaf.jp"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ファーストリーフ株式会社",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${cormorant.variable} ${shipporiMincho.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <SpFixedCta />
      </body>
    </html>
  );
}
