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
      // basic: "₹1500–₹1700",
      standard: "₹1700–₹2000",
      premium: "₹2000–₹2400",
      luxury: "₹2400+",
    },
    {
      feature: "Cement & Steel Grade",
      // basic: "ISI Standard",
      standard: "Premium ISI",
      premium: "High Grade",
      luxury: "Ultra High Grade",
    },
    {
      feature: "Brick/Block Type",
      // basic: "Red Brick",
      standard: "AAC/Red Brick",
      premium: "AAC Blocks",
      luxury: "Premium AAC",
    },
    {
      feature: "Flooring Type",
      // basic: "Ceramic Tiles",
      standard: "Vitrified Tiles",
      premium: "Premium Vitrified",
      luxury: "Italian Marble/Granite",
    },
    {
      feature: "Bathroom Fittings",
      // basic: "Standard",
      standard: "Mid-Range Brand",
      premium: "Premium Brand",
      luxury: "Luxury Brand",
    },
    {
      feature: "Doors & Windows",
      // basic: "Flush Doors/Aluminum",
      standard: "Teak Wood Frame",
      premium: "Premium Wood/UPVC",
      luxury: "Designer Wood/UPVC",
    },
    {
      feature: "Electrical Wiring",
      // basic: "ISI Standard",
      standard: "Branded (Finolex)",
      premium: "Premium (Polycab)",
      luxury: "Premium + Smart Ready",
    },
    {
      feature: "Plumbing Materials",
      // basic: "CPVC Standard",
      standard: "CPVC/PVC Branded",
      premium: "Premium CPVC",
      luxury: "Premium + Fixtures",
    },
    {
      feature: "Waterproofing",
      // basic: true,
      standard: true,
      premium: true,
      luxury: true,
    },
    {
      feature: "Paint & Wall Finish",
      // basic: "Acrylic Emulsion",
      standard: "Premium Emulsion",
      premium: "Luxury Emulsion",
      luxury: "Designer Finish",
    },
    {
      feature: "Kitchen Platform",
      // basic: "Granite Basic",
      standard: "Granite Premium",
      premium: "Quartz/Granite",
      luxury: "Italian Marble/Quartz",
    },
    {
      feature: "Ceiling Height",
      // basic: "10 ft",
      standard: "10 ft",
      premium: "11 ft",
      luxury: "12 ft",
    },
    {
      feature: "Structural Warranty",
      // basic: "5 Years",
      standard: "7 Years",
      premium: "10 Years",
      luxury: "15 Years",
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};
