import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const ComparisonTable = () => {
  const features = [
    {
      feature: "Price Range (per sq.ft)",
      standard: "₹1500",
      premium: "₹1900",
      luxury: "₹2400+",
      royalLuxury: "₹2800+",
    },
    {
      feature: "Steel",
      standard: "Kalika / Kamdhenu",
      premium: "Kalika / equivalent",
      luxury: "JSW",
      royalLuxury: "TATA Steel / JSW",
    },
    {
      feature: "Cement",
      standard: "Dalmia / ACC",
      premium: "Birla / Ambuja",
      luxury: "Utra Tech",
      royalLuxury: "Utra Tech",
    },
    {
      feature: "Brick/Block Type",
      standard: "AAC/Red Brick",
      premium: "Red Brick",
      luxury: "Premium Red Brick",
      royalLuxury: "Premium Red Brick",
    },
    {
      feature: "Flooring Type",
      standard: "Vitrified Tiles",
      premium: "Digital Vitrified",
      luxury: "Italian Marble/Granite",
      royalLuxury: "Italian Marble/Granite",
    },
    {
      feature: "Bathroom Fittings",
      standard: "Acer / Moonwave",
      premium: "Cera / Hindware [Basic]",
      luxury: "Jaquar or equivalent",
      royalLuxury: "Kohler or equivalent",
    },
    {
      feature: "Doors",
      standard: "Flush door & salwood frame",
      premium: "Teak door & frame",
      luxury: "Teak door & frame",
      royalLuxury: "Solid Teak / Custom Design",
    },
    {
      feature: "Windows",
      standard: "Aluminium",
      premium: "Premium Aluminium / UPVC",
      luxury: "UPVC",
      royalLuxury: "UPVC Premium",
    },
    {
      feature: "Electrical Wiring",
      standard: "Finolex / Polycab",
      premium: "Polycab",
      luxury: "Premium Polycab / Equivalent",
      royalLuxury: "Premium + Smart Ready",
    },
    {
      feature: "Electrical Switches",
      standard: "Anchor Penta",
      premium: "Anchor Roma / Gold Medal",
      luxury: "Legrand",
      royalLuxury: "Schneider Electric",
    },
    {
      feature: "Plumbing Materials",
      standard: "Prince pipes",
      premium: "Prince pipes",
      luxury: "Prince pipes",
      royalLuxury: "Premium Astral pipes",
    },
    {
      feature: "Waterproofing",
      standard: false,
      premium: "Standard",
      luxury: "Brick Bat",
      royalLuxury: "Advanced waterproofing",
    },
    {
      feature: "Anti-Termite Treatment",
      standard: false,
      premium: true,
      luxury: true,
      royalLuxury: true,
    },
    {
      feature: "Interior Painting",
      standard: "Tractor Emulsion (Asian Paints)",
      premium: "Tractor Shyne Emulsion",
      luxury: "Apcolite Premium Emulsion",
      royalLuxury: "Royale Luxury Emulsion",
    },
    {
      feature: "Exterior Painting",
      standard: "Ace Exterior Emulsion",
      premium: "Ace Exterior Emulsion",
      luxury: "Apex Exterior Emulsion",
      royalLuxury: "Apex Ultima Exterior Emulsion",
    },
    {
      feature: "Kitchen Platform",
      standard: "Granite",
      premium: "Granite Premium",
      luxury: "Quartz/Granite",
      royalLuxury: "Italian Marble/Quartz",
    },
    {
      feature: "Ceiling Height",
      standard: "10 ft",
      premium: "11 ft",
      luxury: "12 ft",
      royalLuxury: "12 ft",
    },
    {
      feature: "Structural Warranty",
      standard: "7 Years",
      premium: "10 Years",
      luxury: "12 Years",
      royalLuxury: "15 Years",
    },
  ];

  const renderCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-destructive mx-auto" />
      );
    }
    return value;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compare Packages
          </h2>
          <p className="text-lg text-muted-foreground">
            Side-by-side comparison to help you choose the right package
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border bg-card shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-bold text-foreground">
                  Feature
                </TableHead>
                {/* <TableHead className="text-center font-bold text-foreground">
                  <Badge variant="outline">Basic</Badge>
                </TableHead> */}
                <TableHead className="text-center font-bold text-foreground">
                  <Badge variant="outline">Standard</Badge>
                </TableHead>
                <TableHead className="text-center font-bold text-foreground">
                  <Badge className="bg-primary">Premium</Badge>
                </TableHead>
                <TableHead className="text-center font-bold text-foreground">
                  <Badge variant="outline">Luxury</Badge>
                </TableHead>
                <TableHead className="text-center font-bold text-foreground">
                  <Badge variant="outline">Royal Luxury</Badge>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.feature}</TableCell>
                  {/* <TableCell className="text-center">
                    {renderCell(row.basic)}
                  </TableCell> */}
                  <TableCell className="text-center">
                    {renderCell(row.standard)}
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    {renderCell(row.premium)}
                  </TableCell>
                  <TableCell className="text-center">
                    {renderCell(row.luxury)}
                  </TableCell>
                  <TableCell className="text-center bg-amber-500/5">
                    {renderCell(row.royalLuxury)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};
