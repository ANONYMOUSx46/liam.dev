import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const Services = () => {
  const packages = [
    {
      name: "Basic Presence",
      price: "R1,500 - R2,500",
      icon: <Zap className="w-6 h-6" />,
      badge: "Most Popular",
      badgeVariant: "secondary" as const,
      features: [
        "One page with multiple sections",
        "Home, About, Contact sections",
        "Mobile-friendly design", 
        "Clean, modern layout",
        "Fast loading times",
        "Basic SEO setup"
      ],
      buttonVariant: "default" as const
    },
    {
      name: "Starter Brand",
      price: "R3,000 - R4,000",
      icon: <Star className="w-6 h-6" />,
      badge: "Great Value",
      badgeVariant: "default" as const,
      features: [
        "3-5 professional pages",
        "Custom styling & animations",
        "Contact form integration",
        "Basic SEO optimization",
        "Social media integration",
        "Image galleries",
        "Google Analytics setup"
      ],
      buttonVariant: "hero" as const
    },
    {
      name: "Pro Business",
      price: "R5,000 - R7,000", 
      icon: <Crown className="w-6 h-6" />,
      badge: "Premium",
      badgeVariant: "destructive" as const,
      features: [
        "5-8 pages with advanced features",
        "Advanced Tailwind CSS styling",
        "Complete SEO setup",
        "Google Maps integration",
        "Booking forms & calendars",
        "E-commerce capabilities",
        "Performance optimization",
        "Advanced animations"
      ],
      buttonVariant: "accent" as const
    }
  ];

  const addOns = [
    {
      name: "Monthly Maintenance",
      price: "R80 - R100",
      description: "Updates, backups, minor edits"
    },
    {
      name: "SEO Boost",
      price: "R200",
      description: "Keyword research, meta tags, Google indexing"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Website Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional websites designed to help your business grow, 
            offered at rates that won't break the bank
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name} 
              className={`relative shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-slide-up ${
                index === 1 ? 'md:scale-105 border-primary' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {pkg.badge && (
                <Badge 
                  variant={pkg.badgeVariant}
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                >
                  {pkg.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {pkg.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary mt-2">
                  {pkg.price}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  variant={pkg.buttonVariant} 
                  className="w-full"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Choose {pkg.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Add-on Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <Card key={addon.name} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <Badge variant="outline" className="ml-2">
                      {addon.price}
                    </Badge>
                  </div>
                  <CardDescription>{addon.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Win-Win Statement */}
        <div className="text-center mt-16 p-8 bg-primary/10 rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            A Win-Win Partnership
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm offering professional websites at youth-friendly rates to help small businesses 
            grow online while building my portfolio and experience. Quality work, fair pricing, mutual success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;