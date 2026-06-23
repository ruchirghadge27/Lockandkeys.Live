import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { GitCompare, ChevronDown, ChevronUp } from "lucide-react";
import Layout from "@/components/Layout";
import { IntroSection } from "@/components/packages/IntroSection";
import { ComparisonTable } from "@/components/packages/ComparisonTable";
import { PackageCards } from "@/components/packages/PackageCards";
import { AddOnServices } from "@/components/packages/AddOnServices";
import { WhyChooseUsPackages } from "@/components/packages/WhyChooseUsPackages";
import { CTASection } from "@/components/packages/CTASection";

const ConstructionPackages = () => {
  const [showComparison, setShowComparison] = useState(false);
  const comparisonRef = useRef<HTMLDivElement>(null);

  const toggleComparison = () => {
    if (!showComparison) {
      setShowComparison(true);
      setTimeout(() => {
        comparisonRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      setShowComparison(false);
    }
  };

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Construction Packages
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing, quality materials, and professional
              execution. Choose the package that fits your vision and budget.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <IntroSection />

        {/* Package Cards */}
        <PackageCards />

        {/* Toggle Button for Comparison Table */}
        <div className="text-center pb-12 bg-background">
          <Button
            size="lg"
            variant="outline"
            onClick={toggleComparison}
            className="group gap-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm rounded-full px-8"
          >
            <GitCompare className="h-4 w-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
            {showComparison ? "Hide Comparison Table" : "Compare Packages Side-by-Side"}
            {showComparison ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground group-hover:-translate-y-0.5 transition-transform duration-300" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:translate-y-0.5 transition-transform duration-300" />
            )}
          </Button>
        </div>

        {/* Package Comparison Table */}
        {showComparison && (
          <div ref={comparisonRef} className="animate-fade-in">
            <ComparisonTable />
          </div>
        )}

        {/* Add-on Services */}
        <AddOnServices />

        {/* Why Choose Us */}
        <WhyChooseUsPackages />

        {/* Call to Action */}
        <CTASection />
      </div>
    </Layout>
  );
};

export default ConstructionPackages;
