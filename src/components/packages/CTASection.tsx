import { Button } from "@/components/ui/button";
import { Download, Phone, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Dream Project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our construction experts and take the first step
            towards your dream home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <Button asChild size="lg" className="w-full">
            <Link to="/contact-us">
              <MessageCircle className="mr-2 h-5 w-5" />
              Request Free Quote
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="w-full">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("PDF download feature coming soon!");
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </a>
          </Button>

          <Button asChild size="lg" variant="outline" className="w-full">
            <Link to="/contact-us">
              <Calendar className="mr-2 h-5 w-5" />
              Book Site Visit
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="w-full">
            <a href="tel:+91 9156679165">
              <Phone className="mr-2 h-5 w-5" />
              Call Expert
            </a>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Have questions? Our construction experts are available Mon-Sat, 9 AM
            - 6 PM
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a
              href="tel:+91 9156679165"
              className="text-primary hover:underline font-medium"
            >
              📞 +91 9156679165
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a
              href="mailto:tirupateebalajispaces@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              ✉️ tirupateebalajispaces@gmail.com
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a
              href="https://wa.me/9156679165"
              className="text-primary hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
