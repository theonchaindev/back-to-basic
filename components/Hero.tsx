"use client";

import BuyBotFeed from "./BuyBotFeed";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#2AABEE 1px, transparent 1px), linear-gradient(90deg, #2AABEE 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-tg/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="animate-fade-up stagger-1 inline-flex items-center gap-2 border border-tg/20 bg-tg/5 rounded-full px-3 py-1 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-tg animate-pulse" />
              <span className="font-mono text-tg text-xs tracking-widest uppercase">
                Est. 2017
              </span>
            </div>

            <h1 className="animate-fade-up stagger-2 font-mono font-bold leading-[0.9] mb-8">
              <span className="block text-white text-6xl lg:text-7xl xl:text-8xl tracking-tight">
                WE
              </span>
              <span className="block text-tg text-6xl lg:text-7xl xl:text-8xl tracking-tight glow-tg">
                NEVER
              </span>
              <span className="block text-white text-6xl lg:text-7xl xl:text-8xl tracking-tight">
                LEFT.
              </span>
            </h1>

            <p className="animate-fade-up stagger-3 text-white/50 text-base lg:text-lg leading-loose mb-10 max-w-md font-sans">
              Back when a Telegram call could move a chart in an hour.
              When the buy bot fired at 2am and nobody slept.
              When the raid hit X and by morning everyone knew the ticker.
              <br /><br />
              <span className="text-white/70">That's still happening. Just not everywhere.</span>
            </p>

            <div className="animate-fade-up stagger-4 flex flex-wrap gap-3">
              <a
                href="https://t.me/backtobasic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-tg hover:bg-tg-dark text-white font-mono font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded transition-all duration-200 hover:shadow-xl hover:shadow-tg/25 hover:-translate-y-0.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Find Us on Telegram
              </a>
            </div>

            <p className="animate-fade-up stagger-5 font-mono text-xs text-white/20 mt-6 uppercase tracking-widest">
              No charts. No indicators. Just the group.
            </p>
          </div>

          {/* Right — live buy bot feed */}
          <div className="animate-fade-up stagger-6 hidden lg:block">
            <p className="font-mono text-xs text-white/25 uppercase tracking-widest mb-3 text-center">
              Live from the group
            </p>
            <BuyBotFeed />
          </div>
        </div>
      </div>
    </section>
  );
}
