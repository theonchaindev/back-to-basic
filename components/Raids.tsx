"use client";

import { useEffect, useRef } from "react";

const chatMessages = [
  { user: "OG_Degen", msg: "CA just dropped. Buying now.", time: "02:14", tg: true },
  { user: "WhaleSzn", msg: "Bot's live. Already 3 buys in.", time: "02:14", tg: false },
  { user: "MoonBagger", msg: "Rose showing 60k mcap. Still early fr", time: "02:15", tg: false },
  { user: "ApeStrong", msg: "Raid target dropping at 3am. Everyone ready.", time: "02:15", tg: false },
  { user: "GemHunter", msg: "Chart is clean. Good liquidity. I'm in.", time: "02:16", tg: false },
  { user: "DegenKing", msg: "🤖🤖🤖 bot going crazy already", time: "02:16", tg: false },
  { user: "OG_Degen", msg: "⚡ RAID UP — t.me/target_post", time: "02:17", tg: true },
  { user: "WhaleSzn", msg: "Done. Liked, RTed, commented.", time: "02:17", tg: false },
  { user: "MoonBagger", msg: "Same. LFG.", time: "02:17", tg: false },
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tg/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — the chat */}
          <div className="reveal order-2 lg:order-1">
            <div className="bg-bg-2 border border-white/8 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-bg-3">
                <div className="w-9 h-9 rounded-full bg-tg/15 border border-tg/25 flex items-center justify-center font-mono text-xs font-bold text-tg">
                  B2B
                </div>
                <div>
                  <div className="font-mono text-sm font-bold text-white">Back to Basic</div>
                  <div className="font-mono text-[10px] text-tg">4,200 members · 212 online</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                  <span className="font-mono text-[10px] text-green">live</span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3 min-h-[360px]">
                {chatMessages.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      opacity: 0,
                      animation: `fadeUp 0.35s ease ${i * 0.08}s forwards`,
                    }}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className={`font-mono text-xs font-bold ${m.tg ? "text-tg" : "text-white/50"}`}>
                        {m.user}
                      </span>
                      <span className="font-mono text-[10px] text-white/20">{m.time}</span>
                    </div>
                    <p className={`text-sm mt-0.5 font-sans ${m.tg ? "text-white/80" : "text-white/45"}`}>
                      {m.msg}
                    </p>
                  </div>
                ))}

                {/* Typing */}
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex gap-0.5">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-white/20">6 members typing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="reveal order-1 lg:order-2">
            <h2 className="font-mono font-bold text-white text-4xl lg:text-5xl tracking-tight mb-6">
              The group
              <br />
              <span className="text-tg">never sleeps.</span>
            </h2>
            <p className="text-white/45 text-base leading-loose mb-8 font-sans">
              Calls drop at 2am. Raids go live at midnight.
              The buy bot runs 24/7. Rose bot answers every question.
              It was always the people inside the group that made it work —
              not the tools.
            </p>
            <p className="text-white/30 text-sm leading-loose mb-10 font-sans">
              We&apos;re not selling anything. There&apos;s no subscription.
              No premium tier. Just a Telegram group with the same energy
              it always had.
            </p>

            <a
              href="https://t.me/backtobasic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-tg hover:bg-tg-dark text-white font-mono font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded transition-all duration-200 hover:shadow-xl hover:shadow-tg/25 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.277-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Come Back
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
