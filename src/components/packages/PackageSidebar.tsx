import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PackageData } from "./PackageCards";
import { Check, Clock, Shield, TrendingUp } from "lucide-react";

interface PackageSidebarProps {
  packageData: PackageData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PackageSidebar = ({
  packageData,
  open,
  onOpenChange,
}: PackageSidebarProps) => {
  if (!packageData) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl">{packageData.name}</SheetTitle>
          <SheetDescription>
            <span className="text-xl font-bold text-primary">
              {packageData.priceRange}
            </span>
            <span className="text-muted-foreground"> per sq.ft</span>
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-120px)] mt-6">
          <Tabs defaultValue="materials" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="scope">Scope</TabsTrigger>
              <TabsTrigger value="upgrades">Upgrades</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="materials" className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  Complete Material Specifications
                </h3>
                <div className="space-y-3">
                  {packageData.detailedSpecs.materials.map((material, idx) => (
                    <div key={idx} className="p-3 rounded-lg border bg-card">
                      <div className="font-medium text-foreground text-sm">
                        {material.label}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {material.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="scope" className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Detailed Scope of Work
                </h3>
                <div className="space-y-2">
                  {packageData.detailedSpecs.scopeOfWork.map((item, idx) => (
                    <div key={idx} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Exclusions
                </h3>
                <div className="space-y-2">
                  {packageData.detailedSpecs.exclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start text-sm">
                      <span className="text-muted-foreground">• {item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3 italic">
                  These items can be added as upgrades or separate packages
                </p>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2 flex items-center">
                  <Shield className="mr-2 h-4 w-4 text-primary" />
                  Warranty & Guarantees
                </h4>
                <ul className="space-y-1">
                  {packageData.detailedSpecs.warranty.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="upgrades" className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                  Available Upgrade Options
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Enhance your package with these premium upgrades and add-on
                  services
                </p>
                <div className="space-y-3">
                  {packageData.detailedSpecs.upgradeOptions.map(
                    (upgrade, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border bg-card hover:border-primary transition-colors"
                      >
                        <div className="text-sm text-foreground">{upgrade}</div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> All upgrade prices are approximate and
                  may vary based on actual requirements, brands selected, and
                  market conditions. Contact our team for detailed quotations.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="timeline" className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-primary" />
                  Project Timeline Breakdown
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Typical construction timeline for this package (may vary based
                  on project size)
                </p>
                <div className="space-y-3">
                  {packageData.detailedSpecs.timeline.map((phase, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg border bg-card"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <span className="text-sm font-semibold text-primary">
                            {idx + 1}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {phase.phase}
                        </span>
                      </div>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong>Timeline Notes:</strong> The actual timeline may vary
                  depending on project complexity, site conditions, weather,
                  material availability, and customization requirements. We
                  provide regular updates and maintain transparent communication
                  throughout the construction process.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
