import Layout from '@/components/Layout';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import beforeAfterImage from '@/assets/before-after-1.jpg';
import commercialImage from '@/assets/project-commercial.jpg';
import residentialImage from '@/assets/project-residential.jpg';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Before & After Projects
  const beforeAfterProjects = [
    {
      id: 1,
      title: "Kitchen Renovation",
      before: beforeAfterImage,
      after: residentialImage,
      description: "Complete kitchen transformation with modern appliances and custom cabinetry."
    },
    {
      id: 2,
      title: "Office Space Redesign",
      before: beforeAfterImage,
      after: commercialImage,
      description: "Modern office space redesign with open floor plan and natural lighting."
    },
    {
      id: 3,
      title: "Home Extension",
      before: beforeAfterImage,
      after: residentialImage,
      description: "Added second floor extension with master bedroom and bathroom."
    }
  ];

  // Gallery Images
  const galleryImages = [
    {
      id: 1,
      src: commercialImage,
      title: "Modern Office Building",
      category: "Commercial"
    },
    {
      id: 2,
      src: residentialImage,
      title: "Luxury Family Home",
      category: "Residential"
    },
    {
      id: 3,
      src: commercialImage,
      title: "Retail Complex",
      category: "Commercial"
    },
    {
      id: 4,
      src: residentialImage,
      title: "Contemporary Villa",
      category: "Residential"
    },
    {
      id: 5,
      src: commercialImage,
      title: "Industrial Warehouse",
      category: "Industrial"
    },
    {
      id: 6,
      src: residentialImage,
      title: "Townhouse Development",
      category: "Residential"
    },
    {
      id: 7,
      src: commercialImage,
      title: "Shopping Center",
      category: "Commercial"
    },
    {
      id: 8,
      src: residentialImage,
      title: "Custom Home",
      category: "Residential"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length);
  };

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-construction-blue-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Project Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the transformation and quality of our work through our comprehensive project gallery 
              featuring before & after comparisons and completed projects.
            </p>
          </div>
        </section>

        {/* Before & After Slider */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Before & After Transformations
              </h2>
              <p className="text-lg text-muted-foreground">
                Witness the incredible transformations we've achieved for our clients.
              </p>
            </div>

            <div className="relative">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    <img 
                      src={beforeAfterProjects[currentSlide].before} 
                      alt="Before"
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">
                      BEFORE
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="relative">
                    <img 
                      src={beforeAfterProjects[currentSlide].after} 
                      alt="After"
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded text-sm font-medium">
                      AFTER
                    </div>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {beforeAfterProjects[currentSlide].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {beforeAfterProjects[currentSlide].description}
                  </p>
                </div>
              </Card>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {beforeAfterProjects.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-primary' : 'bg-border'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 bg-construction-blue-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Completed Projects Gallery
              </h2>
              <p className="text-lg text-muted-foreground">
                Browse through our extensive portfolio of successfully completed construction projects.
              </p>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {galleryImages.map((image) => (
                <Card key={image.id} className="break-inside-avoid overflow-hidden hover:shadow-construction transition-all duration-300">
                  <div className="relative group">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="text-white p-4">
                        <h3 className="font-semibold">{image.title}</h3>
                        <p className="text-sm text-white/80">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;