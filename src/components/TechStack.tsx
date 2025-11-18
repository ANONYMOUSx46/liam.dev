import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Palette, 
  Shield, 
  Rocket, 
  Smartphone,
  Search,
  Globe,
  Lock
} from "lucide-react";

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "text-blue-500",
      tools: ["React", "TypeScript", "Next.js", "HTML5", "CSS3", "JavaScript ES6+"]
    },
    {
      category: "Styling & Design",
      icon: <Palette className="w-6 h-6" />,
      color: "text-purple-500",
      tools: ["Tailwind CSS", "Shadcn UI", "Framer Motion", "CSS Grid", "Flexbox", "Responsive Design"]
    },
    {
      category: "Security & Performance",
      icon: <Shield className="w-6 h-6" />,
      color: "text-green-500",
      tools: ["Web Security Best Practices", "HTTPS/SSL", "Performance Optimization", "Core Web Vitals"]
    },
    {
      category: "Deployment & Hosting",
      icon: <Rocket className="w-6 h-6" />,
      color: "text-orange-500",
      tools: ["Netlify", "Vercel", "Git/GitHub", "CI/CD Pipelines", "Domain Management"]
    }
  ];

  const capabilities = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Every website is built to look and work perfectly on all devices, from phones to desktops."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Built-in search engine optimization to help your business get found online."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Fast Loading",
      description: "Optimized for speed with modern techniques that keep visitors engaged."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure & Safe",
      description: "Cybersecurity awareness built into every project for protection and peace of mind."
    }
  ];

  return (
    <section id="tech" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Tech Stack</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Modern Tools, Professional Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I use cutting-edge technologies and industry best practices to create 
            fast, secure, and beautiful websites that perform exceptionally.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Technologies Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <Card 
                key={tech.category}
                className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-muted ${tech.color}`}>
                      {tech.icon}
                    </div>
                    {tech.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Capabilities */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
              What This Means For Your Business
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <Card 
                  key={capability.title}
                  className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {capability.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold mb-3">{capability.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Process Highlight */}
          <Card className="bg-gradient-hero text-white shadow-glow overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    The Perfect Balance
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    I combine the latest web technologies with proven cybersecurity principles 
                    to create websites that are not just beautiful, but also fast, secure, 
                    and built to last.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Modern frameworks for lightning-fast performance",
                      "Security-first approach in every line of code", 
                      "Mobile-responsive design that works everywhere",
                      "SEO optimization for maximum online visibility"
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-white/90">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h4 className="font-semibold mb-4">Development Philosophy</h4>
                    <blockquote className="text-lg italic text-accent/90">
                      "Every line of code should serve a purpose: 
                      to create value, ensure security, and deliver excellence."
                    </blockquote>
                    <div className="mt-4 text-sm text-white/70">
                      - Liam De Wet, Developer
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStack;