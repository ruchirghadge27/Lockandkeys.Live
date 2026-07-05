import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Zap, Crown, Gem, Sparkles } from "lucide-react";
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
    totalDuration?: string;
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
  {
    id: "royalLuxury",
    icon: Sparkles,
    accentColor: "border-amber-500 ring-2 ring-amber-400/30",
    badgeColor: "bg-amber-100 text-amber-900",
    iconColor: "text-amber-600",
    headerBg: "bg-gradient-to-r from-amber-50/80 to-yellow-50/80",
  },
];

const packages: PackageData[] = [
  {
    id: "standard",
    name: "Standard",
    priceRange: "₹1,500",
    tagline: "Best Value for Money",
    overview: "",
    inclusions: [
      "Steel: Kalika",
      "Bathroom: Acer / Moonwave",
      "Polycab",
      "Doors",
      "Chicken Mesh at Joints",
    ],
    upgrades: ["Italian Marble (rate applicable)",
      "Waterproofing Package",
      "Anti-Termite Treatment",
      "UPVC Windows",],
    detailedSpecs: {
      materials: [
        { label: "Steel", value: "Kalika / Kamdhenu" },
        { label: "Cement", value: "Dalmia / ACC" },
        { label: "Brick/Block Type", value: "AAC / Red Brick" },
        { label: "Flooring Type", value: "Vitrified Tiles" },
        { label: "Bathroom Fittings", value: "Acer / Moonwave" },
        { label: "Doors", value: "Flush Door & Salwood Frame" },
        { label: "Windows", value: "Aluminium" },
        { label: "Electrical Wiring", value: "Finolex / Polycab" },
        { label: "Electrical Switches", value: "Anchor Penta" },
        { label: "Plumbing Materials", value: "Prince Pipes" },
        { label: "Waterproofing", value: "X" },
        { label: "Anti-Termite Treatment", value: "X" },
        { label: "Interior Painting", value: "Tractor Emulsion (Asian Paints)" },
        { label: "Exterior Painting", value: "Ace Exterior Emulsion" },
        { label: "Kitchen Platform", value: "Granite" },
        { label: "Ceiling Height", value: "10 ft" },
        { label: "Structural Warranty", value: "7 Years" },
      ],
      scopeOfWork: [
        "Site clearing and plot excavation",
        "Complete structural construction from foundation to roof slab",
        "Masonry work with AAC/red brick and chicken mesh at joints",
        "Standard electrical wiring throughout",
        "Standard plumbing & sanitary line installation",
        "Interior and exterior painting (1 primer + 2 coats)",
        "Kitchen platform installation with sink and fittings",
        "Flooring installation across all rooms",
        "Doors and windows installation",
        "Site supervision by construction team",
        "Comprehensive quality checks at every stage of construction",
      ],
      exclusions: [
        "Government approvals, NOCs, and statutory fees",
        "Waterproofing and anti-termite treatment (available as upgrade)",
        "Interior furniture and loose furnishings",
        "False ceiling",
        "Pooja room door and designer woodwork",
        "Modular kitchen cabinetry",
        "Landscaping and outdoor work",
        "Any material upgrade beyond standard specification",
      ],
      upgradeOptions: [
        "Italian Marble (rate applicable)",
        "Waterproofing Package",
        "Anti-Termite Treatment",
        "UPVC Windows",
      ],
      timeline: [
        { phase: "Excavation", duration: "1–2 weeks" },
        { phase: "Foundation & Structural Work", duration: "10–12 weeks" },
        { phase: "Masonry & Plastering", duration: "8–10 weeks" },
        { phase: "Electrical & Plumbing", duration: "4–5 weeks" },
        { phase: "Flooring & Fittings", duration: "3–4 weeks" },
        { phase: "Painting & Finishing", duration: "2–3 weeks" },
        { phase: "Final Handover", duration: "1 week" },

      ],
      totalDuration: "approx. 8–12 months",
      warranty: [
        "7 Years Structural Warranty",
        "1 Year Comprehensive Snag/Defect Rectification",
        "Manufacturer warranty on all branded fittings (as per brand policy)",
      ],
    },
  },
  {
    id: "premium",
    name: "Premium",
    priceRange: "₹1,900",
    tagline: "Superior Quality & Aesthetics",
    overview: "",
    inclusions: [
      "Steel: Kalika / Equivalent",
      "Switches: Anchor Roma / Gold Medal",
      "Marble",
      "UPVC Windows",
      "Termite Proofing",
      "Chicken Mesh",
      "Ceiling Height: 10 or 11 ft",
    ],
    upgrades: ["Italian Marble Flooring",
      "Modular Kitchen",
      "False Ceiling",
      "Brick Bat Waterproofing",],
    recommended: true,
    detailedSpecs: {
      materials: [
        { label: "Steel", value: "Kalika / Equivalent" },
        { label: "Cement", value: "Birla / Ambuja" },
        { label: "Brick/Block Type", value: "Red Brick" },
        { label: "Flooring Type", value: "Digital Vitrified" },
        { label: "Bathroom Fittings", value: "Cera / Hindware (Basic)" },
        { label: "Doors", value: "Teak Door & Frame" },
        { label: "Windows", value: "Premium Aluminium / UPVC" },
        { label: "Electrical Wiring", value: "Polycab" },
        { label: "Electrical Switches", value: "Anchor Roma / Gold Medal" },
        { label: "Plumbing Materials", value: "Prince Pipes" },
        { label: "Waterproofing", value: "Standard" },
        { label: "Anti-Termite Treatment", value: "✓" },
        { label: "Interior Painting", value: "Tractor Shyne Emulsion" },
        { label: "Exterior Painting", value: "Ace Exterior Emulsion" },
        { label: "Kitchen Platform", value: "Granite Premium" },
        { label: "Ceiling Height", value: "11 ft" },
        { label: "Structural Warranty", value: "10 Years" },
      ],
      scopeOfWork: [
        "Complete structural construction from foundation to roof slab",
        "Architectural & structural design consultation",
        "Masonry work with red brick and chicken mesh reinforcement",
        "Complete electrical wiring with branded switches",
        "Complete plumbing & sanitary line installation with UPS backup point",
        "Interior and exterior painting (primer + 2 coats)",
        "Flooring installation across all rooms including balconies",
        "Pooja room door installation",
        "Kitchen platform installation with sink and fittings",
        "UPVC/premium aluminium doors and windows installation",
        "Standard waterproofing for roof and bathrooms",
        "Anti-termite treatment (pre-construction)",
        "Site supervision by dedicated site engineer",
      ],
      exclusions: [
        "Government approvals, NOCs, and statutory fees",
        "Interior furniture and loose furnishings",
        "False ceiling (available as an upgrade)",
        "Home automation / smart devices",
        "Modular kitchen cabinetry (available as an upgrade)",
        "Landscaping and outdoor decking",
        "Advanced/brick-bat waterproofing (Luxury tier and above)",
      ],
      upgradeOptions: [
        "Italian Marble Flooring",
        "Modular Kitchen",
        "False Ceiling",
        "Brick Bat Waterproofing",
      ],
      timeline: [
        { phase: "Excavation", duration: "1–2 weeks" },
        { phase: "Foundation & Structural Work", duration: "10–12 weeks" },
        { phase: "Masonry & Plastering", duration: "8–10 weeks" },
        { phase: "Electrical & Plumbing", duration: "4–5 weeks" },
        { phase: "Flooring & Fittings", duration: "3–4 weeks" },
        { phase: "Painting & Finishing", duration: "2–3 weeks" },
        { phase: "Final Handover", duration: "1 week" },

      ],
      totalDuration: "approx. 8–12 months",
      warranty: [
        "10 Years Structural Warranty",
        "2 Years Waterproofing Warranty",
        "1 Year Anti-Termite Warranty",
        "1 Year Comprehensive Snag/Defect Rectification",
        "Manufacturer warranty on all branded fittings (as per brand policy)",
      ],
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
      "Steel: JSW Neo",
      "Marble",
      "Bathroom: Jaquar or Equivalent",
      "Pooja Room Door",
      "Electrical: L&T / Legrand",
      "Chicken Mesh",
      "Ceiling Height: 11 / 12 ft",
    ],
    upgrades: ["Home Automation Integration",
      "Designer False Ceiling",
      "Modular Kitchen",
      "Solar Panel Setup",],
    detailedSpecs: {
      materials: [
        { label: "Steel", value: "JSW Neo" },
        { label: "Cement", value: "UltraTech" },
        { label: "Brick/Block Type", value: "Premium Red Brick" },
        { label: "Flooring Type", value: "Italian Marble / Granite" },
        { label: "Bathroom Fittings", value: "Jaquar or Equivalent" },
        { label: "Doors", value: "Teak Door & Frame" },
        { label: "Windows", value: "UPVC" },
        { label: "Electrical Wiring", value: "Premium Polycab / Equivalent" },
        { label: "Electrical Switches", value: "Legrand" },
        { label: "Plumbing Materials", value: "Prince Pipes" },
        { label: "Waterproofing", value: "Brick Bat" },
        { label: "Anti-Termite Treatment", value: "✓" },
        { label: "Interior Painting", value: "Apcolite Premium Emulsion" },
        { label: "Exterior Painting", value: "Apex Exterior Emulsion" },
        { label: "Kitchen Platform", value: "Quartz / Granite" },
        { label: "Ceiling Height", value: "12 ft" },
        { label: "Structural Warranty", value: "12 Years" },
      ],
      scopeOfWork: [
        "Complete structural construction from foundation to roof slab",
        "Full architectural & structural design consultation",
        "Masonry work with premium red brick and chicken mesh reinforcement at all joints",
        "Complete electrical wiring with premium branded switches (L&T / Legrand)",
        "Complete plumbing & sanitary line installation",
        "Interior and exterior painting (primer + 2 premium coats)",
        "Italian marble/granite flooring installation across all rooms including balconies",
        "Pooja room door installation",
        "Kitchen platform installation with quartz/granite and fittings",
        "UPVC doors and windows installation",
        "Brick bat waterproofing for roof, bathrooms, and basement (if applicable)",
        "Anti-termite treatment (pre- and post-construction)",
        "Site supervision by dedicated project manager",
      ],
      exclusions: [
        "Government approvals, NOCs, and statutory fees",
        "Interior furniture and loose furnishings",
        "False ceiling (available as an upgrade)",
        "Home automation / smart devices (available as an upgrade)",
        "Modular kitchen cabinetry (available as an upgrade)",
        "Landscaping and outdoor decking",
        "Solar power installation",
        "Advanced waterproofing (Royal Luxury tier)",
      ],
      upgradeOptions: [
        "Home Automation Integration",
        "Designer False Ceiling",
        "Modular Kitchen",
        "Solar Panel Setup",
      ],
      timeline: [
        { phase: "Excavation", duration: "1–2 weeks" },
        { phase: "Foundation & Structural Work", duration: "10–12 weeks" },
        { phase: "Masonry & Plastering", duration: "8–10 weeks" },
        { phase: "Electrical & Plumbing", duration: "4–5 weeks" },
        { phase: "Flooring & Fittings", duration: "5–6 weeks" },
        { phase: "Painting & Finishing", duration: "3–4 weeks" },
        { phase: "Final Handover", duration: "1 week" },

      ],
      totalDuration: "approx. 8–12 months",
      warranty: [
        "12 Years Structural Warranty",
        "3 Years Waterproofing Warranty",
        "1.5 Years Anti-Termite Warranty",
        "1 Year Comprehensive Snag/Defect Rectification",
        "Manufacturer warranty on all branded fittings (as per brand policy)",
      ],
    },
  },
  {
    id: "royalLuxury",
    name: "Royal Luxury",
    priceRange: "₹2,800+",
    tagline: "The Pinnacle of Opulence & Craftsmanship",
    overview: "",
    inclusions: [
      "Cement: Ultratech Premium",
      "Steel: Tata Tiscon / JSW Neo Steel",
      "Flooring: Italian Marble / Exotic Stone",
      "Bathroom: Kohler / Grohe / TOTO",
      "Switches: Legrand Arteor / Schneider",
      "Smart Home Ready Wiring",
      "Ceiling Height: 12 ft",
      "Pooja Room with Designer Door",
      "Chicken Mesh at all Joints",
      "Anti-Termite & Advanced Waterproofing",
    ],
    upgrades: ["Home Automation Integration",
      "Designer False Ceiling",
      "Modular Kitchen",
      "Solar Panel Setup",
      "Landscaped Garden / Outdoor Deck",
      "Home Theatre Room Setup",],
    detailedSpecs: {
      materials: [
        { label: "Steel", value: "TATA Steel / JSW Neo" },
        { label: "Cement", value: "UltraTech Premium" },
        { label: "Brick/Block Type", value: "Premium Red Brick" },
        { label: "Flooring Type", value: "Italian Marble / Granite" },
        { label: "Bathroom Fittings", value: "Kohler or Equivalent" },
        { label: "Doors", value: "Solid Teak / Custom Design" },
        { label: "Windows", value: "UPVC Premium" },
        { label: "Electrical Wiring", value: "Premium + Smart Ready" },
        { label: "Electrical Switches", value: "Schneider Electric" },
        { label: "Plumbing Materials", value: "Premium Astral Pipes" },
        { label: "Waterproofing", value: "Advanced Waterproofing" },
        { label: "Anti-Termite Treatment", value: "✓" },
        { label: "Interior Painting", value: "Royale Luxury Emulsion" },
        { label: "Exterior Painting", value: "Apex Ultima Exterior Emulsion" },
        { label: "Kitchen Platform", value: "Italian Marble / Quartz" },
        { label: "Ceiling Height", value: "12 ft" },
        { label: "Structural Warranty", value: "15 Years" },
      ],
      scopeOfWork: [
        "Complete structural construction from foundation to roof slab",
        "Full architectural & structural design consultation",
        "Masonry work with premium red brick and chicken mesh reinforcement at all joints",
        "Complete electrical wiring with smart-home-ready conduiting",
        "Complete plumbing & sanitary line installation",
        "Interior and exterior painting (2 coats + primer)",
        "Flooring installation across all rooms including balconies",
        "Modular pooja room construction with designer door",
        "Kitchen platform installation with sink and fittings",
        "Doors, windows, and grill installation",
        "Advanced waterproofing for roof, bathrooms, and basement (if applicable)",
        "Anti-termite treatment (pre- and post-construction)",
        "Site supervision by dedicated project manager",
      ],
      exclusions: [
        "Government approvals, NOCs, and statutory fees",
        "Interior furniture and loose furnishings",
        "False ceiling (available as an upgrade)",
        "Home automation / smart devices (available as an upgrade)",
        "Modular kitchen cabinetry (available as an upgrade)",
        "Landscaping and outdoor decking",
        "Solar power installation",
        "Lift/elevator installation",
        "Any vaastu-specific structural changes requested after design finalization",
      ],
      upgradeOptions: [
        "Home Automation Integration",
        "Designer False Ceiling",
        "Modular Kitchen",
        "Solar Panel Setup",
        "Landscaped Garden / Outdoor Deck",
        "Home Theatre Room Setup",
      ],
      timeline: [
        { phase: "Excavation", duration: "1–2 weeks" },
        { phase: "Foundation & Structural Work", duration: "10–12 weeks" },
        { phase: "Masonry & Plastering", duration: "8–10 weeks" },
        { phase: "Electrical & Plumbing", duration: "4–5 weeks" },
        { phase: "Flooring & Fittings", duration: "5–6 weeks" },
        { phase: "Painting & Finishing", duration: "3–4 weeks" },
        { phase: "Final Handover", duration: "1 week" },

      ],
      totalDuration: "approx. 8–12 months",
      warranty: [
        "15 Years Structural Warranty",
        "5 Years Waterproofing Warranty",
        "2 Years Anti-Termite Warranty",
        "1 Year Comprehensive Snag/Defect Rectification",
        "Manufacturer warranty on all branded fittings (as per brand policy)",
      ],
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
                      <a href="tel:+919156679165">Get a Free Quote</a>
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
