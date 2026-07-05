import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Home,
  ChefHat,
  Layers,
  Warehouse,
  Fence,
  Droplet,
  Sun,
  Lightbulb,
  Compass,
  TreePine,
} from "lucide-react";

export const AddOnServices = () => {
  const addOns = [
    {
      icon: Home,
      name: "Interior Design",
      description: "Complete interior design services with 3D visualization",
      price: "Starting ₹50,000",
    },
    {
      icon: ChefHat,
      name: "Modular Kitchen",
      description: "Customized modular kitchen with premium finishes",
      price: "Starting ₹80,000",
    },
    {
      icon: Layers,
      name: "False Ceiling",
      description: "POP/Gypsum false ceiling with designer lighting",
      price: "₹100-150/sq.ft",
    },
    // {
    //   icon: Warehouse,
    //   name: "Wardrobes",
    //   description: "Built-in wardrobes with modern fittings",
    //   price: "Starting ₹60,000",
    // },
    // {
    //   icon: Fence,
    //   name: "Compound Wall",
    //   description: "Perimeter wall with gate and security features",
    //   price: "₹500-800/sq.ft",
    // },

    {
      icon: Sun,
      name: "Solar Installation",
      description: "Solar power system with net metering",
      price: "₹50,000-5,00,000",
    },
    // {
    //   icon: Lightbulb,
    //   name: "Smart Home",
    //   description: "Home automation with app-based controls",
    //   price: "Starting ₹40,000",
    // },
    {
      icon: TreePine,
      name: "Landscaping",
      description: "Garden design with plants and outdoor features",
      price: "Starting ₹1,00,000",
    },
    {
      icon: Compass,
      name: "Vastu Consultation",
      description: "Expert Vastu consultation for residential and commercial projects",
      price: "Starting ₹5,000",
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Add-On Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Enhance your construction project with these additional services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {addOns.map((addon, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                  <addon.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{addon.name}</CardTitle>
                <CardDescription>{addon.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-primary font-semibold">{addon.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-background rounded-lg border text-center">
          <p className="text-muted-foreground">
            All add-on services can be customized based on your requirements.
            Contact us for detailed quotations and package deals.
          </p>
        </div>
      </div>
    </section>
  );
};
