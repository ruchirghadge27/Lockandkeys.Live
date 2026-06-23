import {
  Shield,
  Users,
  TrendingUp,
  Clock,
  Award,
  CheckCircle,
  Smartphone,
  Home,
  BadgeCheck,
} from "lucide-react";

export const WhyChooseUsPackages = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "450+ Quality Checks",
      description: "Rigorous inspection at every construction stage",
    },
    {
      icon: Users,
      title: "Dedicated Project Manager",
      description: "Single point of contact for your entire project",
    },
    {
      icon: TrendingUp,
      title: "Daily Progress Updates",
      description: "Real-time updates via weekly reports",
    },
    {
      icon: Shield,
      title: "ESCROW Payment Protection",
      description: "Milestone-based payments held in secure escrow",
    },
    {
      icon: Award,
      title: "Verified Materials",
      description: "Only ISI/ISO certified materials from trusted brands",
    },
    {
      icon: BadgeCheck,
      title: "100% Transparent Pricing",
      description: "No hidden costs or surprise charges",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Guaranteed completion within agreed timeline",
    },
    {
      icon: Home,
      title: "10-Year Warranty",
      description: "Comprehensive structural warranty coverage",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose LocknKey?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to delivering quality construction with complete
            transparency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Our Commitment to Excellence
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            With over 12 years of experience and 300+ successfully completed
            projects, we've built a reputation for quality, transparency, and
            customer satisfaction. Every project is treated as our own home,
            ensuring the highest standards of construction and finish.
          </p>
        </div>
      </div>
    </section>
  );
};
