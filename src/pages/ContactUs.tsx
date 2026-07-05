import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactUs = () => {

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9156679165",
      description: "Mon-Fri: 8AM-6PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "tirupateebalajispaces@gmail.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Flat no 201 Gulmohar Galaxy Vimannagar Pune-411014",
      description: "Our main office location",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Friday: 9AM - 7PM",
      description: "Saturday: 9AM - 7PM",
    },
  ];

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-construction-blue-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact LockandKey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your construction project? Get in touch with our
              expert team for a free consultation and detailed quote.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center p-4">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSelp3nTIbnvOymudtyZVk7Lt7arqhuk4oDy8HWFibRJTJUB_A/viewform?embedded=true"
                    width="640"
                    height="957"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    title="Contact Us Form"
                    style={{ maxWidth: "100%" }}
                  >
                    Loading…
                  </iframe>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    We're here to help with all your construction needs. Reach
                    out to us through any of the following methods, and our team
                    will respond promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-foreground mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Google Maps Embed */}
                <Card>
                  <CardHeader>
                    <CardTitle>Our Location</CardTitle>
                    <CardDescription>
                      Visit our office for in-person consultations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-video rounded-b-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83!2d73.9146223!3d18.5686053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c16ab168fb0b%3A0xd54c196d9ae49500!2sSaurebh%20Chitragar%20Architects!5e0!3m2!1sen!2sin!4v1234567890123"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="LockandKey Office Location"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              For urgent construction matters or emergencies, call us directly.
              We're available 24/7 for existing project support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call: (123) 456-7890</span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                <a
                  href="mailto:tirupateebalajispaces@gmail.com"
                  className="flex items-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email Us</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactUs;
