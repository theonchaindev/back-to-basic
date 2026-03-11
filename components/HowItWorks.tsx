"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Launch Your Token",
    desc: "Deploy your contract. Add liquidity. Get your CA ready. The first move is always the same.",
    cmd: "// Deploy contract → verify → lock LP",
    color: "text-tg",
    line: "bg-tg/20",
  },
  {
    num: "02",
    title: "Add Bots to Your Group",
    desc: "Drop the Buy Bot and Rose Bot into your Telegram group. Configure alerts. Set your ticker. Test a buy.",
    cmd: "/start @BuyAlertBot | /start @RoseBot",
    color: "text-green",
    line: "bg-green/20",
  },
  {
    num: "03",
    title: "Post the Call",
    desc: "Format your call. Pin it. Share the contract address. Give targets. Let the community know it's time.",
    cmd: "🚀 $BASIC | CA: 0x... | Target: 10x",
    color: "text-gold",
    line: "bg-gold/20",
  },
  {
    num: "04",
    title: "Raid X",
    desc: "Drop the raid target in the group. Every member hits like, retweet, comment. Make noise. Make it trend.",
    cmd: "⚡ RAID TARGET: @username/post_id",
    color: "text-white",
    line: "bg-white/10",
  },
  {
    num: "05",
    title: "Watch Rose. Track Everything.",
    desc: "Monitor price, holders, liquidity in real-time. Every buy broadcasts. The chart tells the story.",
    cmd: "/price $BASIC → $0.00000205 ↑ 42%",
    color: "text-tg",
    line: "bg-tg/20",
  },
];

export default function HowItWorks() {
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
    <section id="how-it-works" ref={sectionRef} className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-32 reveal">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-3 py-1 mb-6">
              <span className="font-mono text-white/40 text-xs tracking-widest uppercase">
                The Playbook
              </span>
            </div>
            <h2 className="font-mono font-bold text-white text-4xl lg:text-5xl tracking-tight mb-6">
              How It
              <br />
              <span className="text-tg">Always Worked.</span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed font-sans max-w-sm">
              Five steps. Same as it ever was. The process hasn&apos;t changed
              because it works. Simple. Direct. Effective.
            </p>

            {/* Terminal mockup */}
            <div className="mt-10 bg-bg-2 border border-white/8 rounded-xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-2 font-mono text-[10px] text-white/20">
                  telegram — group_alpha
                </span>
              </div>
              <div className="p-4 space-y-2 font-mono text-xs">
                <div className="text-green">📣 CALL POSTED: $BASIC</div>
                <div className="text-white/40">Entry: $0.00000165</div>
                <div className="text-white/40">Target 1: 2x</div>
                <div className="text-white/40">Target 2: 5x</div>
                <div className="text-white/40">Target 3: 10x</div>
                <div className="text-tg mt-2">🤖 BUY BOT ACTIVE</div>
                <div className="text-tg">🌹 ROSE BOT ACTIVE</div>
                <div className="text-gold mt-2">⚡ RAID SCHEDULED: 8PM UTC</div>
                <div className="text-white/20 mt-3 cursor">
                  waiting for buys_
                </div>
              </div>
            </div>
          </div>

          {/* Right — steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="reveal bg-bg-2 border border-white/8 hover:border-white/15 rounded-xl p-5 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <div
                    className={`font-mono font-bold text-2xl ${step.color} opacity-40 group-hover:opacity-70 transition-opacity flex-shrink-0 w-8`}
                  >
                    {step.num}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono font-bold text-white text-base mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-sm font-sans leading-relaxed mb-3">
                      {step.desc}
                    </p>
                    <div className="bg-bg border border-white/5 rounded-lg px-3 py-2">
                      <code className={`font-mono text-xs ${step.color}`}>
                        {step.cmd}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
