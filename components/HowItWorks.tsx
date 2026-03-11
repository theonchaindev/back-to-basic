"use client";

import { useEffect, useRef } from "react";

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal mb-16">
            <h2 className="font-mono font-bold text-white text-4xl lg:text-5xl tracking-tight mb-6">
              There were no tutorials.
              <br />
              <span className="text-white/40">You just knew.</span>
            </h2>
            <p className="text-white/40 text-base leading-loose font-sans">
              Someone dropped a CA in the chat. You didn&apos;t overthink it.
              You checked Rose, bought a bag, dropped a rocket emoji, and got back
              to watching the buy bot. That was the whole process. It worked because
              the group worked. The people in it understood the assignment.
            </p>
          </div>

          {/* Pull quotes */}
          <div className="reveal space-y-px">
            {[
              { quote: "The buy bot going off every 30 seconds.", sub: "That was the signal." },
              { quote: "Rose bot at $80k market cap.", sub: "Still early." },
              { quote: "Raid hits. 400 comments in an hour.", sub: "Now it's trending." },
              { quote: "Chart goes vertical.", sub: "You were there from the start." },
            ].map((item, i) => (
              <div
                key={i}
                className="group border border-white/5 hover:border-white/10 bg-bg-2/50 hover:bg-bg-2 rounded-lg px-6 py-5 text-left transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-white/60 group-hover:text-white/80 text-sm transition-colors">
                    {item.quote}
                  </p>
                  <p className="font-mono text-tg text-xs flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom line */}
          <div className="reveal mt-16 pt-16 border-t border-white/5">
            <p className="font-mono text-white/25 text-sm uppercase tracking-widest">
              That group still exists.
            </p>
            <p className="font-mono text-white font-bold text-2xl mt-2 mb-8">
              It&apos;s called Back to Basic.
            </p>
            <a
              href="https://t.me/backtobasic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-tg hover:bg-tg-dark text-white font-mono font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded transition-all duration-200 hover:shadow-xl hover:shadow-tg/25 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Join the Group
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
