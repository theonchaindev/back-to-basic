"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: "🤖",
    title: "Buy Bot",
    tag: "REAL-TIME ALERTS",
    desc: "Every on-chain buy, broadcast to your Telegram instantly. Wallet size, token amount, market cap — all formatted clean. Watch the calls stack up and the chart move.",
    detail: [
      "Auto-detects every buy tx",
      "Whale size classification",
      "DEX links + chart links",
      "Fully customizable messages",
    ],
    accent: "border-green/20 hover:border-green/40",
    tagColor: "text-green bg-green/10 border-green/20",
    iconBg: "bg-green/10",
  },
  {
    icon: "🌹",
    title: "Rose Bot",
    tag: "PRICE & CHARTS",
    desc: "One command. Everything you need. Price, chart, holders, volume, market cap, liquidity. The original data bot that ran every Telegram group in the golden era.",
    detail: [
      "/price — instant price check",
      "/chart — TradingView link",
      "/holders — top wallet list",
      "/lp — liquidity snapshot",
    ],
    accent: "border-tg/20 hover:border-tg/40",
    tagColor: "text-tg bg-tg/10 border-tg/20",
    iconBg: "bg-tg/10",
  },
  {
    icon: "⚡",
    title: "X Raids",
    tag: "COORDINATED RAIDS",
    desc: "Organize your community to raid X posts. Like, retweet, comment — coordinate the wave. The original social pump mechanism. Make it trend. Make it loud.",
    detail: [
      "Scheduled raid drops",
      "One-click raid targets",
      "Engagement tracking",
      "Leader board for raiders",
    ],
    accent: "border-gold/20 hover:border-gold/40",
    tagColor: "text-gold bg-gold/10 border-gold/20",
    iconBg: "bg-gold/10",
  },
  {
    icon: "📣",
    title: "Telegram Calls",
    tag: "ALPHA CALLS",
    desc: "The original alpha channel. Direct. Loud. No middleman. Post your calls, pin your charts, run your group like the OGs did. Clean format, maximum signal.",
    detail: [
      "Pinned call format",
      "Entry / target / stop",
      "Community discussion",
      "Bot-integrated updates",
    ],
    accent: "border-white/10 hover:border-white/20",
    tagColor: "text-white/50 bg-white/5 border-white/10",
    iconBg: "bg-white/5",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-32 relative">
      {/* Divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-tg/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-3 py-1 mb-6">
            <span className="font-mono text-white/40 text-xs tracking-widest uppercase">
              The Arsenal
            </span>
          </div>
          <h2 className="font-mono font-bold text-white text-4xl lg:text-5xl tracking-tight mb-4">
            Four Tools.
            <br />
            <span className="text-tg">One Mission.</span>
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto font-sans">
            The exact same toolkit that ran every successful Telegram gem group
            from 2017 to 2021. Rebuilt clean.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal group bg-bg-2 border ${f.accent} rounded-xl p-6 transition-all duration-300 hover:bg-bg-3`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className={`${f.iconBg} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
                  {f.icon}
                </div>
                <span
                  className={`font-mono text-[10px] tracking-widest uppercase border rounded-full px-2.5 py-1 ${f.tagColor}`}
                >
                  {f.tag}
                </span>
              </div>

              {/* Title + desc */}
              <h3 className="font-mono font-bold text-white text-xl mb-2">
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5 font-sans">
                {f.desc}
              </p>

              {/* Detail list */}
              <ul className="space-y-2">
                {f.detail.map((d) => (
                  <li key={d} className="flex items-center gap-2 font-mono text-xs text-white/35">
                    <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
