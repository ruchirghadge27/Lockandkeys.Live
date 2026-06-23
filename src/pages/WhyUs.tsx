import Layout from "@/components/Layout";
import {
  Clock,
  Shield,
  DollarSign,
  Users,
  Award,
  CheckCircle,
  Star,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyUs = () => {
  const valueProps = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "We respect your time and always deliver projects on schedule. Our track record shows 100% on-time completion.",
      stat: "100%",
    },
    // {
    //   icon: Shield,
    //   title: "Certified Engineers",
    //   description:
    //     "Our team consists of licensed engineers and certified professionals with years of experience.",
    //   stat: "80+",
    // },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description:
        "No hidden costs or surprise charges. We provide detailed estimates and stick to agreed budgets.",
      stat: "0%",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our skilled workforce brings expertise from various construction disciplines to your project.",
      stat: "12+",
    },
    {
      icon: ShieldCheck,
      title: "No Third-Party Contractors",
      description:
        "All construction work is handled by our in-house team under direct supervision, ensuring consistent quality and complete accountability.",
      stat: "100%",
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "We use only premium materials and follow strict quality control processes throughout construction.",
    },
    // {
    //   icon: CheckCircle,
    //   title: "Full Compliance",
    //   description:
    //     "All our projects meet or exceed local building codes and safety regulations.",
    // },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description:
        "Our 150+ happy clients are a testament to our commitment to excellence.",
    },
    {
      icon: Zap,
      title: "Modern Technology",
      description:
        "We leverage the latest construction technology and techniques for superior results.",
    },
    {
      icon: ShieldCheck,
      title: "No Third-Party Contractors",
      description:
        "All construction work is carried out under our direct supervision, ensuring complete quality control and accountability at every stage.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      project: "Custom Family Home",
      rating: 5,
      text: "LocknKey transformed our vision into reality. The quality of work and attention to detail exceeded our expectations.",
    },
    {
      name: "Rahul Mehta",
      project: "Office Building",
      rating: 5,
      text: "Professional, reliable, and delivered on time. Our office building project was completed exactly as promised.",
    },
    {
      name: "Ananya Patel",
      project: "Home Renovation",
      rating: 5,
      text: "The team was respectful, clean, and communicative throughout the entire renovation process.",
    },
  ];

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-construction-blue-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose LocknKey?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 12 years of excellence in construction, we've built our
              reputation on quality, reliability, and customer satisfaction.
            </p>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Commitment to Excellence
              </h2>
              <p className="text-lg text-muted-foreground">
                These core values guide every project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valueProps.map((prop, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-construction transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <prop.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {prop.stat}
                    </div>
                    <CardTitle className="text-xl">{prop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{prop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-construction-blue-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the LocknKey difference in every aspect of your
                project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-card-custom"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't just take our word for it - hear from our satisfied
                clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.project}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Highlights */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The LocknKey Advantage
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                From initial consultation to final handover, we ensure every
                step of your construction journey is smooth and stress-free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90">
                  Support During Construction
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Satisfaction Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2-Year</div>
                <div className="text-lg opacity-90">
                  Warranty on Commercial Projects
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact-us">Start Your Project Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WhyUs;
