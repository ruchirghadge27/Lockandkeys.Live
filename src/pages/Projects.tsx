import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ADVAIT01 from "@/assets/ADVAIT_01.jpg";
import ADVAIT02 from "@/assets/ADVAIT_02.jpg";
import ADVAIT03 from "@/assets/ADVAIT_03.jpg";
import Maitree from "@/assets/Maitree.jpg";
import BANKAR03 from "@/assets/BANKAR03.jpg";
import BANKAR02 from "@/assets/BANKAR02.jpg";
import BANKAR01 from "@/assets/BANKAR01.jpg";
import KENITHBRAGNAZA07 from "@/assets/KENITH BRAGNAZA07.jpg";
import KENITHBRAGNAZA06 from "@/assets/KENITH BRAGNAZA06.jpg";
import KENITHBRAGNAZA05 from "@/assets/KENITH BRAGNAZA05.jpg";
import KENITHBRAGNAZA04 from "@/assets/KENITH BRAGNAZA04.jpg";
import KENITHBRAGNAZA03 from "@/assets/KENITH BRAGNAZA03.jpg";
import KENITHBRAGNAZA02 from "@/assets/KENITH BRAGNAZA02.jpg";
import KENITHBRAGNAZA01 from "@/assets/KENITH BRAGNAZA01.jpg";
import KENITHBRAGNAZA09 from "@/assets/KENITH BRAGNAZA09.jpg";
import KENITHBRAGNAZA08 from "@/assets/KENITH BRAGNAZA08.jpg";
import REDDY03 from "@/assets/REDDY03.jpg";
import REDDY02 from "@/assets/REDDY02.jpg";
import REDDY01 from "@/assets/REDDY01.jpg";
import commercialImage from "@/assets/project-commercial.jpg";
import residentialImage from "@/assets/project-residential.jpg";

// ── Slideshow sub-component ──────────────────────────────────────────────────
const ImageSlideshow = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => setCurrent(0), [images]);

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div
      className="relative w-full overflow-hidden group"
      style={{ aspectRatio: "1090 / 1270" }}
    >
      {/* Slides */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} — image ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  idx === current ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Image counter badge */}
      {images.length > 1 && (
        <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full z-10">
          {current + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

// ── Main page ────────────────────────────────────────────────────────────────
const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "ADVAIT",
      category: "commercial",
      images: [ADVAIT02, ADVAIT03, ADVAIT01],
      description:
        "A 50,000 sq ft modern office building with sustainable design features.",
      location: "Downtown Business District",
      completedYear: "2024",
      features: [
        "LEED Certified",
        "Smart Building Technology",
        "Green Roof System",
      ],
    },
    {
      id: 2,
      title: "Maitree",
      category: "residential",
      images: [Maitree],
      description:
        "Custom 4-bedroom luxury home with modern amenities and landscaping.",
      location: "Riverside Estate",
      completedYear: "2023",
      features: ["Smart Home Integration", "Solar Panels", "Custom Kitchen"],
    },
    {
      id: 3,
      title: "BANKAR ",
      category: "commercial",
      images: [BANKAR02, BANKAR01, BANKAR03],
      description:
        "Multi-tenant retail complex with modern facade and parking facilities.",
      location: "Suburban Plaza",
      completedYear: "2023",
      features: ["Anchor Stores", "Food Court", "Underground Parking"],
    },
    {
      id: 4,
      title: "KENITH BRAGNAZA",
      category: "residential",
      images: [
        KENITHBRAGNAZA01,
        KENITHBRAGNAZA02,
        KENITHBRAGNAZA03,
        KENITHBRAGNAZA04,
        KENITHBRAGNAZA05,
        KENITHBRAGNAZA06,
        KENITHBRAGNAZA07,
        KENITHBRAGNAZA08,
        KENITHBRAGNAZA09,
      ],
      description:
        "Stunning contemporary villa with pool and outdoor entertainment area.",
      location: "Hillside View",
      completedYear: "2024",
      features: ["Infinity Pool", "Home Theater", "Wine Cellar"],
    },
    {
      id: 5,
      title: "REDDY ",
      category: "industrial",
      images: [REDDY01, REDDY02, REDDY03],
      description:
        "Large-scale warehouse facility with loading docks and office space.",
      location: "Industrial Park",
      completedYear: "2022",
      features: ["High Ceilings", "Loading Docks", "Climate Control"],
    },
    // {
    //   id: 6,
    //   title: "Townhouse Development",
    //   category: "residential",
    //   images: [residentialImage, residentialImage, residentialImage],
    //   description: "25-unit townhouse development with community amenities.",
    //   location: "Greenfield Community",
    //   completedYear: "2023",
    //   features: ["Community Pool", "Playground", "Green Spaces"],
    // },
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "residential", label: "Residential" },
    { key: "commercial", label: "Commercial" },
    { key: "industrial", label: "Industrial" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero */}
        <section className="py-16 bg-construction-blue-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Completed Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successfully completed construction
              projects across residential, commercial, and industrial sectors.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={filter === category.key ? "default" : "outline"}
                  onClick={() => setFilter(category.key)}
                  className="transition-all duration-300"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover:shadow-construction transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Slideshow */}
                  <div className="relative">
                    <ImageSlideshow
                      images={project.images}
                      title={project.title}
                    />
                    <div className="absolute top-2 right-2 z-10">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-primary"
                      >
                        {project.completedYear}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category.charAt(0).toUpperCase() +
                          project.category.slice(1)}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <div className="text-sm text-muted-foreground mb-4">
                      📍 {project.location}
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-foreground">
                        Key Features:
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
