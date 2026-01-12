import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl lg:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            Nancy<span className="text-primary">Space</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="nav"
                size="sm"
                onClick={() => scrollToSection(link.href)}
                className="text-sm lg:text-base"
              >
                {link.name}
              </Button>
            ))}
            <Link to="https://drive.google.com/file/d/1SjeftmW949nwCL7kBQfiuyk1pAhzkHlD/view?usp=sharing">
              <Button variant="nav" size="sm" className="text-sm lg:text-base gap-1">
                <FileText size={16} />
                Resume
              </Button>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="default"
              onClick={() => scrollToSection("#contact")}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border animate-fade-in">
            <div className="flex flex-col py-4 px-4 gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  className="justify-start text-base"
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.name}
                </Button>
              ))}
              <Link to="/resume">
                <Button variant="ghost" className="justify-start text-base gap-2 w-full">
                  <FileText size={16} />
                  Resume
                </Button>
              </Link>
              <Button
                variant="hero"
                className="mt-2"
                onClick={() => scrollToSection("#contact")}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
