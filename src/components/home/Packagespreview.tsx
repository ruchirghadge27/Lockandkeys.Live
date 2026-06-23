import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Zap, Crown, Gem } from "lucide-react";
import { useNavigate } from "react-router-dom";

const packages = [
  // {
  //   id: "basic",
  //   icon: Star,
  //   name: "Basic",
  //   priceRange: "₹1,500 - ₹1,700",
  //   tagline: "Budget-Conscious Builders",
  //   accentColor: "border-slate-300",
  //   iconColor: "text-slate-500",
  //   badgeColor: "bg-slate-100 text-slate-700",
  //   headerBg: "bg-slate-50",
  //   inclusions: [
  //     "ISI Standard Cement & Steel",
  //     "Red Brick Masonry",
  //     "Ceramic Tile Flooring",
  //     "Standard Bathroom Fittings",
  //   ],
  //   warranty: "5-Year Structural",
  // },
  {
    id: "standard",
    icon: Zap,
    name: "Standard",
    priceRange: "₹1,500",
    tagline: "Best Value for Money",
    accentColor: "border-primary ring-2 ring-primary/20",
    iconColor: "text-primary",
    badgeColor: "bg-primary text-primary-foreground",
    headerBg: "bg-primary/5",
    recommended: true,
    inclusions: [
      "Premium ISI Cement & Steel",
      "AAC/Red Brick Masonry",
      "Vitrified Tile Flooring",
      "Branded Bathroom Fittings",
    ],
    warranty: "7-Year Structural",
  },
  {
    id: "premium",
    icon: Crown,
    name: "Premium",
    priceRange: "₹2,000",
    tagline: "Superior Quality & Aesthetics",
    accentColor: "border-amber-400",
    iconColor: "text-amber-500",
    badgeColor: "bg-amber-100 text-amber-800",
    headerBg: "bg-amber-50/50",
    inclusions: [
      "High-Grade Cement & Steel",
      "Premium AAC Block Masonry",
      "Premium Vitrified Tiles",
      "Premium Branded Fittings",
    ],
    warranty: "10-Year Structural",
  },
  {
    id: "luxury",
    icon: Gem,
    name: "Luxury",
    priceRange: "₹2,600+",
    tagline: "Ultimate Premium Experience",
    accentColor: "border-purple-400",
    iconColor: "text-purple-500",
    badgeColor: "bg-purple-100 text-purple-800",
    headerBg: "bg-purple-50/50",
    inclusions: [
      "Ultra High-Grade Cement & Steel",
      "Premium AAC Block System",
      "Italian Marble/Granite Flooring",
      "Luxury Designer Fittings",
    ],
    warranty: "15-Year Structural",
  },
];

export const PackagesPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From budget-friendly to ultra-luxury — every home deserves quality
            construction
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl border-2 ${pkg.accentColor} overflow-hidden bg-background flex flex-col transition-shadow hover:shadow-lg`}
              >
                {pkg.recommended && (
                  <div className="absolute top-3 right-3">
                    <Badge className={`${pkg.badgeColor} text-xs`}>
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Card Header */}
                <div className={`${pkg.headerBg} px-5 pt-5 pb-4`}>
                  <div
                    className={`w-11 h-11 rounded-xl bg-background flex items-center justify-center shadow-sm mb-3`}
                  >
                    <Icon className={`h-5 w-5 ${pkg.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {pkg.tagline}
                  </p>
                  <div className="text-xl font-bold text-primary mt-3">
                    {pkg.priceRange}
                  </div>
                  <div className="text-xs text-muted-foreground">per sq.ft</div>
                </div>

                {/* Inclusions */}
                <div className="px-5 py-4 flex-1">
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-xs text-muted-foreground border-t pt-3">
                    🛡️ {pkg.warranty}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-5 pb-5">
                  <Button
                    variant={pkg.recommended ? "default" : "outline"}
                    size="sm"
                    className="w-full"
                    onClick={() => navigate("/construction-packages")}
                  >
                    View Details <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-8">
          <Button size="lg" onClick={() => navigate("/packages")}>
            Compare All Packages <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};
