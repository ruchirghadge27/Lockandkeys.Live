import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Building, Palette, RefreshCw, ArrowRight, Factory } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes, renovations, and residential projects built to your specifications.",
    features: ["Custom Home Design", "Renovations", "Extensions"],
    color: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500/10",
  },
  {
    icon: Building,
    title: "Commercial Projects",
    description: "Professional commercial construction for offices, retail, and industrial spaces.",
    features: ["Office Buildings", "Retail Spaces", "Warehouses"],
    color: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: Factory,
    title: "Industrial Projects",
    description: "Specialized industrial construction for factories, manufacturing units, warehouses, and production facilities.",
    features: ["Factories", "Manufacturing Units", "Industrial Warehouses"],
    color: "from-orange-500/10 to-amber-500/10",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-500/10",
  },
  {
    icon: Palette,
    title: "Interior Fit-Out",
    description: "Complete interior solutions from design to execution for modern living spaces.",
    features: ["Interior Design", "Space Planning", "Custom Furniture"],
    color: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-500/10",
  },

];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Construction Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive construction services tailored to meet your unique needs and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${service.color} rounded-2xl p-6 border border-border/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-background cursor-default`}
              style={{ background: 'white' }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${service.iconBg} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-6 w-6 ${service.iconColor}`} />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>

              <ul className="space-y-1.5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center">
                    <div className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 ${service.iconBg.replace('/10', '')}`} style={{ backgroundColor: 'currentColor' }}>
                      <div className={`w-1.5 h-1.5 rounded-full ${service.iconColor.replace('text-', 'bg-')}`} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="text-base px-8 py-3 shadow-sm hover:shadow-md transition-shadow">
            <Link to="/services" className="flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
