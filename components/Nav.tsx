"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-mono text-sm tracking-widest text-tg font-bold uppercase">
            Back to Basic
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-tg animate-pulse-slow" />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-white/50 hover:text-white transition-colors font-mono tracking-wide uppercase text-xs"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-white/50 hover:text-white transition-colors font-mono tracking-wide uppercase text-xs"
          >
            How It Works
          </a>
          <a
            href="#raids"
            className="text-sm text-white/50 hover:text-white transition-colors font-mono tracking-wide uppercase text-xs"
          >
            Raids
          </a>
        </div>

        {/* Telegram CTA */}
        <a
          href="https://t.me/backtobasic"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-tg hover:bg-tg-dark text-white text-xs font-mono font-bold tracking-wider uppercase px-4 py-2 rounded transition-all duration-200 hover:shadow-lg hover:shadow-tg/20"
        >
          <TelegramIcon />
          <span>Telegram</span>
        </a>
      </div>
    </nav>
  );
}

function TelegramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}
