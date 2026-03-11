"use client";

const buys = [
  {
    amount: "12.5 SOL",
    usd: "$1,812",
    tokens: "4,200,000",
    ticker: "$PEPE",
    mcap: "$92,400",
    price: "$0.0000220",
    type: "🐳 Whale Alert",
    wallet: "7xKp...3Fna",
    bg: "border-green/30",
  },
  {
    amount: "2.1 SOL",
    usd: "$304",
    tokens: "812,000",
    ticker: "$PENGU",
    mcap: "$48,600",
    price: "$0.0000599",
    type: "🐟 New Buy",
    wallet: "BqRt...9Wm2",
    bg: "border-white/10",
  },
  {
    amount: "55 SOL",
    usd: "$7,975",
    tokens: "28,500,000",
    ticker: "$FARTCOIN",
    mcap: "$118,200",
    price: "$0.00000415",
    type: "🐋 MEGA BUY",
    wallet: "DeAd...B33f",
    bg: "border-gold/40",
  },
  {
    amount: "0.8 SOL",
    usd: "$116",
    tokens: "9,650,000",
    ticker: "$BONK",
    mcap: "$54,100",
    price: "$0.0000120",
    type: "🐟 New Buy",
    wallet: "Hn4s...Vc71",
    bg: "border-white/10",
  },
  {
    amount: "18 SOL",
    usd: "$2,610",
    tokens: "3,100,000",
    ticker: "$WIF",
    mcap: "$203,500",
    price: "$0.0000841",
    type: "🦈 Big Buy",
    wallet: "4mPq...aA09",
    bg: "border-tg/30",
  },
  {
    amount: "1.4 SOL",
    usd: "$203",
    tokens: "6,720,000",
    ticker: "$PEPE",
    mcap: "$96,300",
    price: "$0.0000232",
    type: "🐟 New Buy",
    wallet: "Rz2L...8Kkx",
    bg: "border-white/10",
  },
  {
    amount: "9 SOL",
    usd: "$1,305",
    tokens: "2,190,000",
    ticker: "$POPCAT",
    mcap: "$87,800",
    price: "$0.0000401",
    type: "🐳 Whale Alert",
    wallet: "5Fgt...C4nE",
    bg: "border-green/30",
  },
  {
    amount: "0.5 SOL",
    usd: "$72",
    tokens: "4,480,000",
    ticker: "$FARTCOIN",
    mcap: "$119,600",
    price: "$0.00000267",
    type: "🐟 New Buy",
    wallet: "YuMo...0011",
    bg: "border-white/10",
  },
];

function BuyCard({ buy }: { buy: (typeof buys)[0] }) {
  return (
    <div
      className={`bg-bg-2 border ${buy.bg} rounded-lg p-3.5 font-mono text-xs flex-shrink-0`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-white/80 font-bold">{buy.type}</span>
        <span className="text-white/30 text-[10px]">{buy.wallet}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5 mb-2.5" />

      {/* Buy info */}
      <div className="space-y-1.5">
        <div className="flex justify-between">
          <span className="text-white/40">Spent</span>
          <span className="text-white">
            {buy.amount}{" "}
            <span className="text-white/40 text-[10px]">({buy.usd})</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/40">Got</span>
          <span className="text-green font-bold">
            {buy.tokens} {buy.ticker}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/40">Price</span>
          <span className="text-white/70">{buy.price}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/40">MCap</span>
          <span className="text-tg">{buy.mcap}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5 mt-2.5 pt-2.5">
        <div className="flex gap-2">
          <button className="flex-1 text-[10px] bg-tg/10 hover:bg-tg/20 text-tg border border-tg/20 rounded py-1 transition-colors">
            Raydium
          </button>
          <button className="flex-1 text-[10px] bg-white/5 hover:bg-white/10 text-white/50 border border-white/10 rounded py-1 transition-colors">
            Chart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BuyBotFeed() {
  const doubled = [...buys, ...buys];

  return (
    <div className="relative h-[520px] overflow-hidden rounded-xl border border-white/8 bg-bg-2">
      {/* Header bar */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-bg-2/95 backdrop-blur-sm border-b border-white/8 px-4 py-2.5 flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-green animate-pulse" />
        <span className="font-mono text-xs text-white/60 uppercase tracking-widest">
          Buy Bot
        </span>
        <span className="ml-auto font-mono text-[10px] text-tg">LIVE</span>
      </div>

      {/* Fade overlays */}
      <div className="absolute top-10 left-0 right-0 h-8 bg-gradient-to-b from-bg-2 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-2 to-transparent z-10 pointer-events-none" />

      {/* Scrolling feed */}
      <div className="absolute top-10 left-0 right-0 bottom-0 overflow-hidden px-3 pt-3">
        <div className="animate-bot-scroll flex flex-col gap-2.5">
          {doubled.map((buy, i) => (
            <BuyCard key={i} buy={buy} />
          ))}
        </div>
      </div>
    </div>
  );
}
