export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="text-center lg:text-left">
            <div className="font-mono font-bold text-white tracking-widest uppercase text-sm mb-2 flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-tg">BACK TO BASIC</span>
              <span className="w-1.5 h-1.5 rounded-full bg-tg animate-pulse-slow" />
            </div>
            <p className="font-mono text-xs text-white/25 uppercase tracking-widest">
              Built for degens, by degens.
            </p>
          </div>

          {/* Center — links */}
          <div className="flex items-center gap-6">
            {["Features", "How It Works", "Raids"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                className="font-mono text-xs text-white/30 hover:text-white/70 uppercase tracking-widest transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right — Telegram */}
          <a
            href="https://t.me/backtobasic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-tg/30 bg-tg/8 hover:bg-tg/15 text-tg font-mono text-xs font-bold tracking-wider uppercase px-4 py-2 rounded transition-all duration-200"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            t.me/backtobasic
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-white/20">
            © 2024 Back to Basic. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms"].map((item) => (
              <span
                key={item}
                className="font-mono text-[11px] text-white/15 uppercase tracking-widest cursor-pointer hover:text-white/30 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="font-mono text-[11px] text-white/15 uppercase tracking-widest">
            Not financial advice. DYOR.
          </p>
        </div>
      </div>
    </footer>
  );
}
