"use client";

const buys = [
  {
    amount: "0.5 ETH",
    usd: "$1,240",
    tokens: "51,200,000",
    ticker: "$BASIC",
    mcap: "$84,320",
    price: "$0.00000165",
    type: "🐳 Whale Alert",
    wallet: "0xd4e7...3a9f",
    bg: "border-green/30",
  },
  {
    amount: "0.12 ETH",
    usd: "$298",
    tokens: "12,100,000",
    ticker: "$BASIC",
    mcap: "$86,140",
    price: "$0.00000168",
    type: "🐟 New Buy",
    wallet: "0xa1b2...7c3d",
    bg: "border-white/10",
  },
  {
    amount: "1.2 ETH",
    usd: "$2,980",
    tokens: "121,000,000",
    ticker: "$BASIC",
    mcap: "$91,200",
    price: "$0.00000182",
    type: "🦈 Big Buy",
    wallet: "0x99fa...0011",
    bg: "border-tg/30",
  },
  {
    amount: "0.04 ETH",
    usd: "$99",
    tokens: "4,030,000",
    ticker: "$BASIC",
    mcap: "$91,860",
    price: "$0.00000184",
    type: "🐟 New Buy",
    wallet: "0x5512...aabc",
    bg: "border-white/10",
  },
  {
    amount: "3.0 ETH",
    usd: "$7,440",
    tokens: "302,500,000",
    ticker: "$BASIC",
    mcap: "$102,300",
    price: "$0.00000205",
    type: "🐋 MEGA BUY",
    wallet: "0xf00d...dead",
    bg: "border-gold/40",
  },
  {
    amount: "0.25 ETH",
    usd: "$620",
    tokens: "25,200,000",
    ticker: "$BASIC",
    mcap: "$103,900",
    price: "$0.00000208",
    type: "🐟 New Buy",
    wallet: "0x2244...8899",
    bg: "border-white/10",
  },
  {
    amount: "0.8 ETH",
    usd: "$1,984",
    tokens: "80,700,000",
    ticker: "$BASIC",
    mcap: "$109,600",
    price: "$0.00000219",
    type: "🐳 Whale Alert",
    wallet: "0xc3d4...e5f6",
    bg: "border-green/30",
  },
  {
    amount: "0.07 ETH",
    usd: "$174",
    tokens: "7,080,000",
    ticker: "$BASIC",
    mcap: "$110,100",
    price: "$0.00000220",
    type: "🐟 New Buy",
    wallet: "0xb1a0...9980",
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
            Buy on DEX
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
