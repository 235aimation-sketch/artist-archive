import type { Metadata } from "next";
import { Noto_Sans_KR, Syne } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Archive — 현대미술 작가",
  description: "현대미술 작가 아카이브. 작가 프로필, 전시 이력, 대표작을 한곳에서.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${noto.variable} ${syne.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-stone-50 text-ink-900">
        <div className="bg-grid min-h-screen">
          <header className="sticky top-0 z-50 border-b border-ink-900/5 bg-stone-50/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
              <Link
                href="/"
                className="font-display text-lg font-semibold tracking-tight text-ink-900 transition-opacity hover:opacity-70"
              >
                Archive
              </Link>
              <nav className="text-sm text-ink-500">
                <span className="hidden sm:inline">Contemporary artists</span>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">{children}</main>
          <footer className="mx-auto max-w-6xl border-t border-ink-900/5 px-4 py-8 sm:px-6">
            <p className="text-center text-xs text-ink-400">
              Archive MVP · Mock data for demonstration
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
