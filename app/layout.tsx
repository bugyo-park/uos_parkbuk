import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "임재정 포트폴리오",
  description: "서울시립대학교 경영학부 임재정의 개인 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${geist.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
