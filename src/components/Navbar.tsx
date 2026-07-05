import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  DollarSign,
  HelpCircle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    // { name: "Gallery", path: "/gallery" },
    { name: "Packages", path: "/construction-packages" },
  ];

  const moreItems = [
    // {
    //   name: "Pricing",
    //   path: "/pricing",
    //   icon: DollarSign,
    //   description: "View our rates",
    // },
    {
      name: "FAQs",
      path: "/faqs",
      icon: HelpCircle,
      description: "Common questions",
    },
    {
      name: "Why Us?",
      path: "/why-us",
      icon: Star,
      description: "Our advantages",
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-primary transition-transform duration-200 group-hover:scale-110">
              🏗️
            </div>
            <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
              LockandKey
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 ${isActive(item.path)
                  ? "text-primary after:w-full"
                  : "text-foreground after:w-0 hover:after:w-full"
                  }`}
              >
                {item.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-sm font-medium text-foreground hover:text-primary flex items-center space-x-1 transition-colors px-2"
                >
                  <span>More</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-background border border-border shadow-construction"
              >
                {moreItems.map((item) => (
                  <DropdownMenuItem
                    key={item.name}
                    asChild
                    className="group cursor-pointer"
                  >
                    <Link
                      to={item.path}
                      className="flex items-center p-3 hover:bg-secondary transition-colors"
                    >
                      <item.icon className="mr-3 h-4 w-4 text-primary group-hover:text-construction-orange transition-colors" />
                      <div>
                        <div
                          className={`font-medium ${isActive(item.path) ? "text-primary" : "text-foreground"}`}
                        >
                          {item.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <a
              href="tel:+91 9156679165"
              className="hidden sm:flex items-center space-x-2 text-primary hover:text-primary transition-colors group"
            >
              <Phone className="h-4 w-4 group-hover:animate-pulse" />
              <span className="text-sm font-medium hidden lg:inline">
                +91 9156679165
              </span>
            </a>
            <Button
              asChild
              className="hidden sm:inline-flex shadow-sm hover:shadow-md transition-shadow"
            >
              <Link to="/contact-us">Get Free Quote</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-4 border-t border-border">
            <div className="flex flex-col space-y-1">
              {[...navItems, ...moreItems].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive(item.path)
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-foreground hover:text-primary hover:bg-muted"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-border mt-2 space-y-2 px-1">
                <a
                  href="tel:+919156679165"
                  className="flex items-center space-x-2 text-primary px-3 py-2"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">+91 9156679165</span>
                </a>
                <Button asChild className="w-full">
                  <Link to="/contact-us">Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
