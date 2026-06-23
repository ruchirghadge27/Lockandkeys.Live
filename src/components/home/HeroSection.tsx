import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Users,
  Calendar,
  Heart,
  Ban,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import heroImage from "@/assets/hero-construction.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectResidential from "@/assets/project-residential.jpg";

const slides = [
  {
    image: heroImage,
    heading: "Your Vision,",
    highlight: "Our Foundation",
    sub: "Building dreams into reality with 12+ years of excellence. From residential homes to commercial complexes, we deliver quality that lasts.",
  },
  {
    image: projectResidential,
    heading: "Dream Homes,",
    highlight: "Crafted for You",
    sub: "Every residential project is designed with care, precision, and the finest materials to create a home you'll cherish forever.",
  },
  {
    image: projectCommercial,
    heading: "Commercial Spaces,",
    highlight: "Built to Impress",
    sub: "From modern offices to expansive retail complexes, we build commercial spaces that inspire productivity and drive success.",
  },
];

const coreValues = [
  // { icon: Award, title: "Integrity", sub: "Honest & Transparent" },
  {
    icon: Users,
    title: "Quality Craftsmanship",
    sub: "Excellence in Every Detail",
  },
  { icon: Calendar, title: "Timely Delivery", sub: "On Schedule, Every Time" },
  { icon: Heart, title: "Client-Centered", sub: "Your Vision, Our Priority" },
  { icon: Ban, title: "No Third Party", sub: "Honest & Direct" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning],
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo],
  );
  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo],
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
      </div>

      <button
        onClick={prev}
        className="absolute left-4 md:left-8 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* <div className="absolute bottom-28 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div
          className={`transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {slide.heading}
            <br />
            <span className="text-primary">{slide.highlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed">
            {slide.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg px-8 py-6 w-full sm:w-auto shadow-lg"
            >
              <Link
                to="/projects"
                className="flex items-center justify-center space-x-2"
              >
                <span>View Our Projects</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base md:text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto"
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
            {coreValues.map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center text-white/90 bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200"
              >
                <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary mb-2" />
                <div className="text-sm md:text-base font-semibold">
                  {title}
                </div>
                <div className="text-xs opacity-75 mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-28 md:bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
