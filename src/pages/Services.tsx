import Layout from "@/components/Layout";
import {
  Building,
  Home,
  Wrench,
  PaintBucket,
  Zap,
  Droplets,
  Factory,
  Compass,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description:
        "Custom homes, renovations, extensions, and residential complexes built to perfection.",
      features: [
        "Custom Home Design",
        "Home Renovations",
        "Room Extensions",
        "Kitchen & Bath Remodeling",
      ],
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description:
        "Office buildings, retail spaces, warehouses, and commercial complexes.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Warehouses",
        "Shopping Centers",
      ],
    },
    {
      icon: Wrench,
      title: "General Contracting",
      description:
        "Complete project management from planning to completion with skilled oversight.",
      features: [
        "Project Management",
        "Site Supervision",
        "Quality Control",
        "Timeline Management",
      ],
    },
    {
      icon: PaintBucket,
      title: "Interior Design & Finishing",
      description:
        "Complete interior solutions including design, painting, and finishing work.",
      features: [
        "Interior Design",
        "Painting Services",
        "Flooring Installation",
        "Lighting Solutions",
      ],
    },
    // {
    //   icon: Zap,
    //   title: "Electrical Work",
    //   description: "Professional electrical installation, repair, and maintenance services.",
    //   features: ["Electrical Installation", "Wiring Services", "Panel Upgrades", "Safety Inspections"]
    // },
    // {
    //   icon: Droplets,
    //   title: "Plumbing Services",
    //   description: "Complete plumbing solutions for residential and commercial properties.",
    //   features: ["Pipe Installation", "Fixture Installation", "Drain Cleaning", "Emergency Repairs"]
    // }
    {
      icon: Factory,
      title: "Industrial Construction",
      description:
        "Construction of factories, industrial plants, warehouses, and large-scale infrastructure projects.",
      features: [
        "Factory Buildings",
        "Industrial Warehouses",
        "Manufacturing Units",
        "Heavy Structure Construction",
      ],
    },
    {
      icon: Compass,
      title: "Vastu Consultation",
      description:
        "Professional Vastu analysis and planning to ensure harmony, prosperity, and positive energy in your space.",
      features: [
        "Vastu Site Analysis",
        "Home Vastu Planning",
        "Commercial Vastu Guidance",
        "Construction Alignment Advice",
      ],
    },
  ];

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-construction-blue-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Construction Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to completion, we offer comprehensive construction
              services that bring your vision to life with quality and
              precision.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-construction transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today for a free consultation and let's discuss how we
              can bring your construction project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact-us">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
