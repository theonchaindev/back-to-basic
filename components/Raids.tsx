"use client";

import { useEffect, useRef } from "react";

const raidStats = [
  { num: "10,000+", label: "Raids Coordinated" },
  { num: "50M+", label: "Engagements Driven" },
  { num: "100+", label: "Tokens Pumped" },
  { num: "#1", label: "Telegram Alpha Group" },
];

const raidMessages = [
  { user: "OG_Degen", msg: "RAID UP! Everyone on the tweet NOW 🚀", time: "14:32" },
  { user: "WhaleSzn", msg: "Liked, RTed, commented. Let's go!", time: "14:32" },
  { user: "MoonBagger", msg: "WAGMI frens. This one is different.", time: "14:33" },
  { user: "ApeStrong", msg: "Bought another bag. Raiding from two accounts 💪", time: "14:33" },
  { user: "GemHunter", msg: "Chart looking clean. Rose bot showing accumulation", time: "14:34" },
  { user: "DegenKing", msg: "Buy bot is going crazy 🤖🤖🤖", time: "14:34" },
  { user: "OG_Degen", msg: "Next raid target dropping in 5 mins ⚡", time: "14:35" },
];

export default function Raids() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="raids" ref={sectionRef} className="py-32 relative">
      {/* BG accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tg/3 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-tg/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Stats bar */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {raidStats.map((s) => (
            <div
              key={s.label}
              className="bg-bg-2 border border-white/8 rounded-xl p-5 text-center"
            >
              <div className="font-mono font-bold text-2xl text-tg mb-1">
                {s.num}
              </div>
              <div className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Telegram chat mockup */}
          <div className="reveal">
            <div className="bg-bg-2 border border-white/8 rounded-2xl overflow-hidden">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-bg-3">
                <div className="w-8 h-8 rounded-full bg-tg/20 border border-tg/30 flex items-center justify-center">
                  <span className="text-sm">⚡</span>
                </div>
                <div>
                  <div className="font-mono text-sm font-bold text-white">
                    Back to Basic Alpha
                  </div>
                  <div className="font-mono text-[10px] text-tg">
                    3,841 members · 124 online
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
                </div>
              </div>

              {/* Pinned message */}
              <div className="mx-3 mt-3 bg-tg/8 border border-tg/15 rounded-lg px-3 py-2.5">
                <div className="font-mono text-[10px] text-tg uppercase tracking-widest mb-1.5">
                  📌 Pinned Message
                </div>
                <div className="font-mono text-xs text-white/70">
                  ⚡ RAID ACTIVE — t.me/raid_target
                  <br />
                  Like + RT + Comment: &quot;BASIC is back&quot;
                  <br />
                  <span className="text-gold">⏱ 45 minutes remaining</span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-3 space-y-2.5 min-h-[280px]">
                {raidMessages.map((m, i) => (
                  <div
                    key={i}
                    className="animate-fade-up font-sans"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      opacity: 0,
                      animation: `fadeUp 0.4s ease ${i * 0.1}s forwards`,
                    }}
                  >
                    <span className="font-mono text-[10px] text-tg font-bold">
                      {m.user}
                    </span>
                    <span className="font-mono text-[10px] text-white/20 ml-1.5">
                      {m.time}
                    </span>
                    <div className="text-xs text-white/60 mt-0.5">{m.msg}</div>
                  </div>
                ))}
                {/* Typing indicator */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-mono text-[10px] text-white/30">
                    4 members typing...
                  </span>
                  <div className="flex gap-0.5">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-1 h-1 rounded-full bg-white/30 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 border border-gold/20 bg-gold/5 rounded-full px-3 py-1 mb-6">
              <span className="font-mono text-gold text-xs tracking-widest uppercase">
                ⚡ X Raids
              </span>
            </div>
            <h2 className="font-mono font-bold text-white text-4xl lg:text-5xl tracking-tight mb-6">
              Coordinate.
              <br />
              <span className="text-gold">Dominate.</span>
              <br />
              Repeat.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8 font-sans">
              The X Raid is the oldest trick in the Telegram playbook. Get the
              community moving on a single post at the same time — likes,
              retweets, comments all hit at once. Algorithms notice. People
              notice. Charts notice.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: "📋",
                  title: "Drop the Target",
                  desc: "Post the X link in the group. Everyone knows what to do.",
                },
                {
                  icon: "⚡",
                  title: "Coordinated Strike",
                  desc: "Mass engagement in a short window for maximum algorithmic impact.",
                },
                {
                  icon: "📈",
                  title: "Track Results",
                  desc: "Watch impressions climb. Watch new wallets enter. Watch the chart react.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 text-sm">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-mono font-bold text-white text-sm mb-0.5">
                      {item.title}
                    </div>
                    <div className="text-white/40 text-sm font-sans">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://t.me/backtobasic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-tg hover:bg-tg-dark text-white font-mono font-bold text-sm tracking-wider uppercase px-6 py-3 rounded transition-all duration-200 hover:shadow-xl hover:shadow-tg/25 hover:-translate-y-0.5"
            >
              Join the Raids
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
