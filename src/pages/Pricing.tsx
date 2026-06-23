import Layout from '@/components/Layout';
import { useState } from 'react';
import { Check, Calculator } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [projectType, setProjectType] = useState('');
  const [area, setArea] = useState('');
  const [location, setLocation] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState('');

  const pricingTiers = [
    {
      title: "Residential",
      description: "Perfect for homes and residential projects",
      basePrice: "$150",
      unit: "per sq ft",
      features: [
        "Custom home design",
        "Quality materials",
        "Professional installation",
        "1-year warranty",
        "Project management",
        "Regular updates"
      ],
      popular: false
    },
    {
      title: "Commercial",
      description: "Ideal for business and commercial buildings",
      basePrice: "$200",
      unit: "per sq ft",
      features: [
        "Commercial-grade materials",
        "Code compliance",
        "Fast-track construction",
        "2-year warranty",
        "Dedicated project manager",
        "24/7 support during construction"
      ],
      popular: true
    },
    {
      title: "Interiors",
      description: "Complete interior design and finishing",
      basePrice: "$100",
      unit: "per sq ft",
      features: [
        "Interior design consultation",
        "Premium finishes",
        "Custom furniture",
        "6-month warranty",
        "3D visualization",
        "Turnkey solutions"
      ],
      popular: false
    }
  ];

  const calculateEstimate = () => {
    if (!projectType || !area) return;

    const baseRates = {
      residential: 150,
      commercial: 200,
      interiors: 100
    };

    const locationMultipliers = {
      urban: 1.2,
      suburban: 1.0,
      rural: 0.9
    };

    const baseRate = baseRates[projectType as keyof typeof baseRates] || 150;
    const multiplier = locationMultipliers[location as keyof typeof locationMultipliers] || 1.0;
    const areaNum = parseFloat(area);

    if (areaNum > 0) {
      const estimate = baseRate * areaNum * multiplier;
      const min = estimate * 0.8;
      const max = estimate * 1.2;
      setEstimatedPrice(`$${min.toLocaleString()} - $${max.toLocaleString()}`);
    }
  };

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-construction-blue-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Construction Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing for all your construction needs. Get an instant estimate 
              and choose the package that fits your project requirements.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Package
              </h2>
              <p className="text-lg text-muted-foreground">
                Select the pricing tier that best matches your construction project needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`relative overflow-hidden ${tier.popular ? 'border-primary shadow-construction' : ''}`}>
                  {tier.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className={tier.popular ? 'pt-12' : ''}>
                    <CardTitle className="text-2xl text-center">{tier.title}</CardTitle>
                    <CardDescription className="text-center">{tier.description}</CardDescription>
                    <div className="text-center py-4">
                      <div className="text-4xl font-bold text-primary">{tier.basePrice}</div>
                      <div className="text-muted-foreground">{tier.unit}</div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={tier.popular ? "default" : "outline"}>
                      <Link to="/contact-us">Get Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Estimator */}
        <section className="py-16 bg-construction-blue-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-3xl">Interactive Quote Estimator</CardTitle>
                <CardDescription className="text-lg">
                  Get an instant estimate for your construction project
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="project-type">Project Type</Label>
                    <Select value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="interiors">Interiors</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Area (sq ft)</Label>
                    <Input
                      id="area"
                      type="number"
                      placeholder="Enter area in sq ft"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urban">Urban Area</SelectItem>
                        <SelectItem value="suburban">Suburban Area</SelectItem>
                        <SelectItem value="rural">Rural Area</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="text-center">
                  <Button onClick={calculateEstimate} size="lg" className="px-8">
                    Calculate Estimate
                  </Button>
                </div>

                {estimatedPrice && (
                  <div className="text-center p-6 bg-primary/10 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">Estimated Price Range</div>
                    <div className="text-3xl font-bold text-primary">{estimatedPrice}</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      *This is a rough estimate. Contact us for an accurate quote.
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Need a more detailed quote? Our experts are here to help.
                  </p>
                  <Button asChild variant="outline">
                    <Link to="/contact-us">Contact for Detailed Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pricing;