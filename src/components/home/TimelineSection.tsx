import {
  MessageCircle,
  MapPin,
  PenTool,
  Hammer,
  Handshake,
  FileText,
} from "lucide-react";

const timelineSteps = [
  {
    icon: MessageCircle,
    title: "Consultation",
    description:
      "Free initial consultation to understand your vision and requirements",
    step: "01",
  },
  {
    icon: MapPin,
    title: "Site Visit",
    description:
      "Detailed site analysis and feasibility assessment by our experts",
    step: "02",
  },
  {
    icon: PenTool,
    title: "Planning & Design",
    description:
      "Custom architectural plans and 3D designs tailored to your needs",
    step: "03",
  },
  {
    icon: FileText,
    title: "Estimate & Contract",
    description:
      "Receive a detailed project estimate, transparent pricing, and a clear contract before work begins",
    step: "04",
  },
  {
    icon: Hammer,
    title: "Construction",
    description:
      "Professional construction with regular updates and quality checks",
    step: "05",
  },
  {
    icon: Handshake,
    title: "Handover",
    description:
      "Final inspection, documentation, and keys handover to you",
    step: "06",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Construction Process
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach that ensures transparency, quality, and
            timely delivery at every step.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Background Line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-border" />
            {/* Progress Line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-primary to-primary/40" />

            <div className="flex justify-between items-start relative z-10 px-[5%]">
              {timelineSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center max-w-[170px] group"
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-primary/30 transition-all duration-300 ring-4 ring-background">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-bold text-primary mb-1 tracking-wider">
                    STEP {step.step}
                  </div>
                  <div className="text-center">
                    <h3 className="text-base font-bold text-foreground mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-0">
          {timelineSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 relative">
              {/* Vertical connector line */}
              {index < timelineSteps.length - 1 && (
                <div
                  className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary to-border"
                  style={{ height: "calc(100% - 3rem)" }}
                />
              )}
              <div className="flex-shrink-0 relative z-10">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md ring-4 ring-background">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1 pb-8">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs font-bold text-primary tracking-widest">
                    STEP {step.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
