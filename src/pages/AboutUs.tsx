import Layout from '@/components/Layout';
import { Award, Users, Target, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-construction-blue-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About LocknKey Construction
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Building dreams into reality with over 12 years of excellence in construction. 
                We are committed to delivering quality, innovation, and trust in every project.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2012, LocknKey Construction began as a small family business with a vision 
                  to transform the construction industry through quality craftsmanship and customer-focused service.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Over the years, we've grown into a trusted name in the industry, completing over 300 projects 
                  ranging from residential homes to large commercial complexes. Our success is built on the 
                  foundation of trust, quality, and innovation.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we continue to push the boundaries of construction excellence, embracing new technologies 
                  and sustainable practices while maintaining our core values of integrity and craftsmanship.
                </p>
              </div>
              <div className="relative">
                <div className="bg-primary/10 rounded-lg p-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">12+</div>
                    <div className="text-lg text-foreground mb-4">Years of Excellence</div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">300+</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">150+</div>
                        <div className="text-sm text-muted-foreground">Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-construction-blue-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These values guide everything we do and define who we are as a company.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-background rounded-lg shadow-card-custom">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Quality</h3>
                <p className="text-muted-foreground">We never compromise on quality and ensure every project meets the highest standards.</p>
              </div>
              
              <div className="text-center p-6 bg-background rounded-lg shadow-card-custom">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Teamwork</h3>
                <p className="text-muted-foreground">Our skilled team works together to deliver exceptional results for every client.</p>
              </div>
              
              <div className="text-center p-6 bg-background rounded-lg shadow-card-custom">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Precision</h3>
                <p className="text-muted-foreground">Attention to detail and precision in execution is what sets us apart.</p>
              </div>
              
              <div className="text-center p-6 bg-background rounded-lg shadow-card-custom">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Passion</h3>
                <p className="text-muted-foreground">We're passionate about building and creating spaces that people love.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To provide exceptional construction services that exceed client expectations 
                  while maintaining the highest standards of quality, safety, and sustainability. 
                  We strive to build lasting relationships and create spaces that enhance lives.
                </p>
              </div>
              
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  To be the leading construction company recognized for innovation, quality, 
                  and customer satisfaction. We envision a future where every project we 
                  undertake contributes to building better communities and a sustainable world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;