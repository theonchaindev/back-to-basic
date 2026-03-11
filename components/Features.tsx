"use client";

import { useEffect, useRef } from "react";

const memories = [
  {
    icon: "🤖",
    title: "The Buy Bot",
    time: "2am",
    desc: "You're half asleep. The bot fires in the chat. Someone just aped in. Then another. Then a whale. You're wide awake now. That feeling never gets old.",
    accent: "border-green/20 hover:border-green/35",
    iconBg: "bg-green/8",
    glow: "group-hover:shadow-green/10",
  },
  {
    icon: "🌹",
    title: "Rose Bot",
    time: "One command",
    desc: "You typed /price and got everything you needed. Market cap. Holders. Volume. No dashboard. No app. Just Rose in the chat telling you what's happening.",
    accent: "border-tg/20 hover:border-tg/35",
    iconBg: "bg-tg/8",
    glow: "group-hover:shadow-tg/10",
  },
  {
    icon: "⚡",
    title: "The Raid",
    time: "Midnight",
    desc: "Someone drops the tweet link. Everyone piles in at the same time. Likes. Retweets. Comments. The algorithm notices. New people find the ticker. The chart reacts.",
    accent: "border-gold/20 hover:border-gold/35",
    iconBg: "bg-gold/8",
    glow: "group-hover:shadow-gold/10",
  },
  {
    icon: "📣",
    title: "The Call",
    time: "No warning",
    desc: "It just drops. A contract address and a few words. No elaborate thesis. No Twitter thread. Just trust built over time and a group that knows how to move.",
    accent: "border-white/8 hover:border-white/20",
    iconBg: "bg-white/5",
    glow: "group-hover:shadow-white/5",
  },
];

export default function Features() {
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
    <section id="features" ref={sectionRef} className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-tg/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <h2 className="font-mono font-bold text-white text-4xl lg:text-5xl tracking-tight mb-5">
            You remember
            <br />
            <span className="text-tg">how it felt.</span>
          </h2>
          <p className="text-white/35 text-base max-w-sm mx-auto font-sans leading-relaxed">
            Before KOLs. Before paid calls. Before everything became a product.
            Back when it was just the group and the chart.
          </p>
        </div>

        {/* Memory cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {memories.map((m, i) => (
            <div
              key={m.title}
              className={`reveal group bg-bg-2 border ${m.accent} rounded-xl p-7 transition-all duration-300 hover:bg-bg-3 hover:shadow-xl ${m.glow}`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`${m.iconBg} w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0`}>
                  {m.icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-0.5">
                    {m.time}
                  </div>
                  <h3 className="font-mono font-bold text-white text-lg">
                    {m.title}
                  </h3>
                </div>
              </div>
              <p className="text-white/45 text-sm leading-relaxed font-sans">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
