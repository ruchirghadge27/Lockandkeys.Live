import { Shield, ClipboardCheck, Wallet, Users } from "lucide-react";

export const IntroSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Fixed & Transparent Pricing",
      description:
        "No hidden costs or surprise charges. What you see is what you pay.",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Checks at Every Stage",
      description:
        "450+ inspection points ensuring the highest construction standards.",
    },
    {
      icon: Wallet,
      title: "Milestone-Based Secure Payments",
      description:
        "Pay only after completion of each verified construction milestone.",
    },
    {
      icon: Users,
      title: "End-to-End Management",
      description:
        "Dedicated project manager handling everything from planning to handover.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Our Construction Packages?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer structured construction packages with quality materials,
            professional workmanship, and the flexibility to customize based on
            your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
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

        <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-center text-foreground">
            <strong>Flexibility to Customize:</strong> All packages can be
            upgraded with premium materials, additional services, or modified to
            suit your specific requirements. Our team works with you to create
            the perfect construction solution.
          </p>
        </div>
      </div>
    </section>
  );
};
