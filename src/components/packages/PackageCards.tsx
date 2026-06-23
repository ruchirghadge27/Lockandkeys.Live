import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Zap, Crown, Gem } from "lucide-react";
import { PackageSidebar } from "./PackageSidebar";

export interface PackageData {
  id: string;
  name: string;
  priceRange: string;
  tagline: string;
  overview: string;
  inclusions: string[];
  upgrades: string[];
  recommended?: boolean;
  detailedSpecs: {
    materials: { label: string; value: string }[];
    scopeOfWork: string[];
    exclusions: string[];
    upgradeOptions: string[];
    timeline: { phase: string; duration: string }[];
    warranty: string[];
  };
}

const packageMeta = [
  // {
  //   id: "basic",
  //   icon: Star,
  //   accentColor: "border-slate-300",
  //   badgeColor: "bg-slate-100 text-slate-700",
  //   iconColor: "text-slate-500",
  //   headerBg: "bg-slate-50",
  // },
  {
    id: "standard",
    icon: Zap,
    accentColor: "border-primary ring-2 ring-primary/20",
    badgeColor: "bg-primary text-primary-foreground",
    iconColor: "text-primary",
    headerBg: "bg-primary/5",
  },
  {
    id: "premium",
    icon: Crown,
    accentColor: "border-amber-400",
    badgeColor: "bg-amber-100 text-amber-800",
    iconColor: "text-amber-500",
    headerBg: "bg-amber-50/50",
  },
  {
    id: "luxury",
    icon: Gem,
    accentColor: "border-purple-400",
    badgeColor: "bg-purple-100 text-purple-800",
    iconColor: "text-purple-500",
    headerBg: "bg-purple-50/50",
  },
];

const packages: PackageData[] = [
  // {
  //   id: "basic",
  //   name: "Basic",
  //   priceRange: "₹1,300 - ₹1,500",
  //   tagline: "Perfect for Budget-Conscious Builders",
  //   overview: "",
  //   inclusions: [
  //     "Steel: Kalika / Puspa",
  //     "Bathroom: Moonware / Basic Cera",
  //     "Switches: Anchor Penta",
  //     "Paint",
  //     "Timeline",
  //   ],
  //   upgrades: [],
  //   detailedSpecs: {
  //     materials: [
  //       { label: "Steel", value: "Kalika / Puspa" },
  //       { label: "Bathroom", value: "Moonware / Basic Cera" },
  //       { label: "Switches", value: "Anchor Penta" },
  //     ],
  //     scopeOfWork: [],
  //     exclusions: [],
  //     upgradeOptions: [],
  //     timeline: [],
  //     warranty: [],
  //   },
  // },
  {
    id: "standard",
    name: "Standard",
    priceRange: "₹1,700 - ₹2,000",
    tagline: "Best Value for Money",
    overview: "",
    inclusions: [
      "Steel: Kalika",
      "Bathroom: Jaquar / Cera",
      "Polycab",
      "Doors",
      "Termite Proofing",
      "Chicken Mesh at Joints",
    ],
    upgrades: ["Italian Marble (rate applicable)"],
    recommended: true,
    detailedSpecs: {
      materials: [
        { label: "Steel", value: "Kalika" },
        { label: "Bathroom", value: "Jaquar / Cera" },
        { label: "Electrical", value: "Polycab" },
        { label: "Waterproofing", value: "Termite Proofing" },
        { label: "Masonry", value: "Chicken Mesh at Joints" },
      ],
      scopeOfWork: [],
      exclusions: [],
      upgradeOptions: ["Italian Marble (rate applicable)"],
      timeline: [],
      warranty: [],
    },
  },
  {
    id: "premium",
    name: "Premium",
    priceRange: "₹2,000 - ₹2,400",
    tagline: "Superior Quality & Aesthetics",
    overview: "",
    inclusions: [
      "Steel: JSW",
      "Switches: Legrand Myrius",
      "UPS",
      "Marble",
      "UPVC Windows",
      "Termite Proofing",
      "Pooja Room Door",
      "Chicken Mesh",
      "Ceiling Height: 11 or 12 ft",
    ],
    upgrades: [],
    detailedSpecs: {
      materials: [
        { label: "Steel", value: "JSW" },
        { label: "Switches", value: "Legrand Myrius" },
        { label: "UPS", value: "Included" },
        { label: "Flooring", value: "Marble" },
        { label: "Windows", value: "UPVC" },
        { label: "Waterproofing", value: "Termite Proofing" },
        { label: "Doors", value: "Pooja Room Door" },
        { label: "Masonry", value: "Chicken Mesh" },
        { label: "Ceiling Height", value: "11 or 12 ft" },
      ],
      scopeOfWork: [],
      exclusions: [],
      upgradeOptions: [],
      timeline: [],
      warranty: [],
    },
  },
  {
    id: "luxury",
    name: "Luxury",
    priceRange: "₹2,400+",
    tagline: "Ultimate Premium Experience",
    overview: "",
    inclusions: [
      "Cement: Ultratech",
      "Steel: Tata / JSW",
      "Marble",
      "Bathroom: Kohler / Grohe",
      "Pooja Room Door",
      "Electrical: L&T / Legrand",
      "Chicken Mesh",
      "Ceiling Height: 11 / 12 ft",
    ],
    upgrades: [],
    detailedSpecs: {
      materials: [
        { label: "Cement", value: "Ultratech" },
        { label: "Steel", value: "Tata / JSW" },
        { label: "Flooring", value: "Marble" },
        { label: "Bathroom", value: "Kohler / Grohe" },
        { label: "Doors", value: "Pooja Room Door" },
        { label: "Electrical", value: "L&T / Legrand" },
        { label: "Masonry", value: "Chicken Mesh" },
        { label: "Ceiling Height", value: "11 / 12 ft" },
      ],
      scopeOfWork: [],
      exclusions: [],
      upgradeOptions: [],
      timeline: [],
      warranty: [],
    },
  },
];

export const PackageCards = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(
    null,
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("standard");

  const handleLearnMore = (pkg: PackageData) => {
    setSelectedPackage(pkg);
    setSidebarOpen(true);
  };

  const activePackage = packages.find((p) => p.id === activeTab)!;
  const activeMeta = packageMeta.find((m) => m.id === activeTab)!;
  const ActiveIcon = activeMeta.icon;

  return (
    <>
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Our Packages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Each package is carefully crafted to deliver quality construction
              at different budget levels
            </p>
          </div>

          {/* Tab selectors */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {packages.map((pkg) => {
              const meta = packageMeta.find((m) => m.id === pkg.id)!;
              const Icon = meta.icon;
              return (
                <button
                  key={pkg.id}
                  onClick={() => setActiveTab(pkg.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${activeTab === pkg.id
                      ? `${meta.accentColor} bg-primary text-primary-foreground shadow-md scale-105`
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-background"
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  {pkg.name}
                  {pkg.recommended && (
                    <span className="text-xs bg-white/20 rounded-full px-1.5 py-0.5">
                      Popular
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Package Detail Card */}
          <div
            className={`rounded-2xl border-2 ${activeMeta.accentColor} overflow-hidden shadow-lg transition-all duration-300`}
          >
            {/* Header */}
            <div
              className={`${activeMeta.headerBg} px-6 py-6 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center shadow-sm">
                  <ActiveIcon className={`h-7 w-7 ${activeMeta.iconColor}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-2xl font-bold text-foreground">
                      {activePackage.name} Package
                    </h3>
                    {activePackage.recommended && (
                      <Badge className={`${activeMeta.badgeColor} text-xs`}>
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    {activePackage.tagline}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">
                  {activePackage.priceRange}
                </div>
                <div className="text-sm text-muted-foreground">per sq.ft</div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 bg-background">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inclusions */}
                <div>
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                    </span>
                    Key Inclusions
                  </h4>
                  <ul className="space-y-2">
                    {activePackage.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Upgrades + CTA */}
                <div className="flex flex-col gap-6">
                  {activePackage.upgrades.length > 0 && (
                    <div>
                      <h4 className="font-bold text-foreground mb-3">
                        Available Upgrades
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activePackage.upgrades.map((upgrade, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs py-1"
                          >
                            + {upgrade}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => handleLearnMore(activePackage)}
                      className="flex-1"
                      size="lg"
                    >
                      View Full Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="flex-1"
                    >
                      <a href="tel:+919876543210">Get a Quote</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mini cards for other packages */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {packages
              .filter((p) => p.id !== activeTab)
              .map((pkg) => {
                const meta = packageMeta.find((m) => m.id === pkg.id)!;
                const Icon = meta.icon;
                return (
                  <button
                    key={pkg.id}
                    onClick={() => setActiveTab(pkg.id)}
                    className="p-4 rounded-xl border border-border hover:border-primary hover:shadow-md transition-all duration-200 text-left group bg-background"
                  >
                    <Icon
                      className={`h-5 w-5 ${meta.iconColor} mb-2 group-hover:scale-110 transition-transform`}
                    />
                    <div className="text-sm font-semibold text-foreground">
                      {pkg.name}
                    </div>
                    <div className="text-xs text-primary font-medium mt-1">
                      {pkg.priceRange}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      {pkg.tagline}
                    </div>
                  </button>
                );
              })}
          </div>
        </div>
      </section>

      <PackageSidebar
        packageData={selectedPackage}
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
      />
    </>
  );
};
