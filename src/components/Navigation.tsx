import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink, Terminal, Github, Linkedin } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Calculator", href: "#calculator" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Tech", href: "#tech" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with Terminal Icon */}
          <div className="flex items-center">
            <button 
              className="flex items-center gap-2 text-xl md:text-2xl font-bold group"
              onClick={() => scrollToSection("#hero")}
            >
              <Terminal className={`w-5 h-5 transition-colors ${isScrolled ? "text-primary" : "text-syntax-cyan"}`} />
              <span className={`font-code transition-colors ${isScrolled ? "text-primary" : "text-foreground"}`}>
                Liam
              </span>
              <span className="text-accent">.</span>
              <span className="text-accent">Dev</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                  isScrolled ? "text-foreground" : "text-foreground"
                }`}
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
            ))}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://github.com/ANONYMOUSx46/', '_blank')}
                className={`hover:bg-primary/10 hover:text-primary transition-all ${isScrolled ? "text-foreground" : "text-foreground"}`}
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://www.linkedin.com/in/liam-de-wet-42b80a355/', '_blank')}
                className={`hover:bg-primary/10 hover:text-primary transition-all ${isScrolled ? "text-foreground" : "text-foreground"}`}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="default"
                size="sm"
                className="shadow-neon"
                onClick={() => window.open('https://liam-prtfolio.netlify.app', '_blank')}
              >
                Portfolio
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-foreground"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md shadow-card">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all py-2 px-3 rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-border space-y-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  window.open('https://github.com/ANONYMOUSx46/', '_blank');
                  setIsOpen(false);
                }}
                className="w-full justify-start hover:bg-primary/5 hover:text-primary"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  window.open('https://www.linkedin.com/in/liam-de-wet-42b80a355/', '_blank');
                  setIsOpen(false);
                }}
                className="w-full justify-start hover:bg-primary/5 hover:text-primary"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="default"
                size="sm"
                className="w-full shadow-neon"
                onClick={() => {
                  window.open('https://liam-prtfolio.netlify.app', '_blank');
                  setIsOpen(false);
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Portfolio
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;