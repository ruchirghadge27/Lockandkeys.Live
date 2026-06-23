import { Phone } from 'lucide-react';

const items = [
  { text: "Now booking for 2025 residential projects", emoji: "📢" },
  { text: "Call for a FREE consultation", icon: true },
  { text: "12+ Years of Excellence in Construction" },
  { text: "300+ Projects Completed Successfully" },
  { text: "Serving Pune & Maharashtra" },
  { text: "Quality Construction. Transparent Pricing." },
];

const MarqueeBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 30s linear infinite' }}>
        {/* Duplicate for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center space-x-2 text-sm font-medium mx-8 flex-shrink-0">
            {item.emoji && <span>{item.emoji}</span>}
            {item.icon && <Phone className="h-3.5 w-3.5" />}
            <span>{item.text}</span>
            <span className="ml-8 opacity-40">•</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default MarqueeBar;
