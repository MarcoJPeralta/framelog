import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "../styles/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrameLog",
  description: "Tracking de matchups e performance",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="main-header flex justify-between items-center p-4">
          <div className="logo">FrameLog</div>
          <nav className="flex gap-4">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/matchups">Matchups</Link>
            <Link href="/history">History</Link>
            <Link href="/settings">Profile</Link>
          </nav>
        </header>

        <main className="content-wrapper">{children}</main>
      </body>
    </html>
  );
}
