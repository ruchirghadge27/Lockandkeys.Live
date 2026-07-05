import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Packages", path: "/construction-packages" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Brand + Quick Links */}
          <div>
            <div className="flex items-center space-x-2 mb-5">
              <span className="text-2xl">🏗️</span>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-primary">LockandKey</span>
                <span className="text-xs text-muted-foreground">Tirupatee Balaji Spaces LLP</span>
              </div>
            </div>
            <p className="text-sm opacity-70 mb-6 leading-relaxed">
              Building dreams into reality with 12+ years of excellence across
              Pune, Maharashtra.
            </p>
            <h3 className="text-base font-bold mb-3 text-primary">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-1.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors duration-200 flex items-center group opacity-80 hover:opacity-100"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200 mr-0 group-hover:mr-1.5 flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="flex flex-col">
            <h3 className="text-base font-bold mb-4 text-primary">
              Contact Us
            </h3>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+91 9156679165"
                className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                +91 9156679165
              </a>
              <a
                href="mailto:tirupateebalajispaces@gmail.com"
                className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                tirupateebalajispaces@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm opacity-80">
                <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                Flat no 201 Gulmohar Galaxy, <br /> Vimannagar Pune-411014
              </div>
            </div>

            <h3 className="text-base font-bold mb-3 text-primary">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-base font-bold mb-4 text-primary flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Our Location
            </h3>
            <div className="w-full h-52 rounded-xl overflow-hidden shadow-lg border border-background/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.38249542333074!2d73.91452129122904!3d18.568631236996676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f6c787e803%3A0x58785d0cc4a2cc33!2sTirupatee%20Balaji%20Spaces%20LLP!5e0!3m2!1sen!2sin!4v1783237171166!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LockandKey Office Location"
              />
            </div>
            <p className="text-xs mt-2 opacity-60">Vimannagar Pune-411014</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm opacity-70">
            © 2022 Tirupatee Balaji Spaces LLP. All rights reserved.
          </p>
          <p className="text-xs opacity-50 italic">
            "Your Vision, Our Foundation."
          </p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
