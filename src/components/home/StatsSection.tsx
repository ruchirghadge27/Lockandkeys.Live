import { Clock, Building, Users, HardHat } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Clock,
      number: "12+",
      label: "Years of Experience",
      description: "Over a decade of excellence"
    },
    {
      icon: Building,
      number: "300+",
      label: "Projects Completed",
      description: "Successfully delivered"
    },
    {
      icon: Users,
      number: "150+",
      label: "Happy Clients",
      description: "Satisfied customers"
    },
    {
      icon: HardHat,
      number: "80+",
      label: "Skilled Workers",
      description: "Expert team members"
    }
  ];

  return (
    <section className="py-16 bg-construction-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Building Trust Through Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Here's what we've achieved together with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-background rounded-lg shadow-card-custom hover:shadow-construction transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;