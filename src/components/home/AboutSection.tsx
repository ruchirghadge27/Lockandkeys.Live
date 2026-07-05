// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// const stats = [
//   { value: 12, suffix: "+", label: "Years Experience" },
//   { value: 300, suffix: "+", label: "Projects Completed" },
//   { value: 150, suffix: "+", label: "Happy Clients" },
//   { value: 80, suffix: "+", label: "Skilled Workers" },
// ];

// function useCountUp(target: number, duration = 1800, started = false) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!started) return;
//     let startTime: number | null = null;
//     const step = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       setCount(Math.floor(eased * target));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [started, target, duration]);
//   return count;
// }

// function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
//   const [started, setStarted] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);
//   const count = useCountUp(value, 1600, started);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setStarted(true); },
//       { threshold: 0.4 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={ref} className="text-center p-6 bg-secondary rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1">
//       <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
//         {count}{suffix}
//       </div>
//       <div className="text-sm text-muted-foreground font-medium">{label}</div>
//     </div>
//   );
// }

// const AboutSection = () => {
//   return (
//     <section className="py-16 md:py-20 bg-background">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
//               Building Excellence<br />Since 2014
//             </h2>
//             <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
//               At LockandKey, we transform visions into lasting structures. With over a decade of experience in the construction industry, we've built our reputation on delivering exceptional quality, innovative solutions, and unmatched customer service.
//             </p>
//             <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
//               From residential homes to commercial complexes, our team of skilled professionals brings expertise, dedication, and attention to detail to every project we undertake.
//             </p>
//             <Button asChild size="lg" className="text-base px-6 py-3 shadow-sm hover:shadow-md transition-shadow">
//               <Link to="/about-us" className="flex items-center space-x-2">
//                 <span>Learn More About Us</span>
//                 <ArrowRight className="h-5 w-5" />
//               </Link>
//             </Button>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             {stats.map((s) => (
//               <StatCard key={s.label} {...s} />
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 300, suffix: "+", label: "Projects Completed" },
  { value: 150, suffix: "+", label: "Happy Clients" },
  { value: 80, suffix: "+", label: "Skilled Workers" },
];

function useCountUp(target: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 1600, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="
      text-center
      p-6
      bg-red-50
      border border-red-100
      rounded-xl
      hover:shadow-lg
      transition-all
      duration-300
      hover:-translate-y-1
      "
    >
      <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
        {count}
        {suffix}
      </div>

      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </div>
  );
}

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Building Excellence
              <br />
              Since 2014
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
              At LockandKey, we transform visions into lasting structures. With
              over a decade of experience in the construction industry, we've
              built our reputation on delivering exceptional quality, innovative
              solutions, and unmatched customer service.
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              From residential homes to commercial complexes, our team of
              skilled professionals brings expertise, dedication, and attention
              to detail to every project we undertake.
            </p>

            <Button
              asChild
              size="lg"
              className="text-base px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <Link to="/about-us" className="flex items-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
