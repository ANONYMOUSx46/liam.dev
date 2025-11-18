import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Shield, Code, Users, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "2025 Matric Student",
      description: "Balanced academics while pursuing my passion for web development"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Cape Town Based",
      description: "Proudly serving South African businesses and beyond"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity Skills", 
      description: "Bringing security awareness to every website I build"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Interactive Focus",
      description: "Creating engaging, fun experiences that users love"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Business Impact",
      description: "Helping small and large businesses establish their online presence"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Mindset", 
      description: "Always learning and implementing the latest web technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">About Me</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet Liam De Wet
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate teenage web developer from Cape Town, combining 
            technical expertise with fresh perspective to create exceptional digital experiences.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Story */}
          <Card className="mb-12 shadow-card overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                    My Journey
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      As a modern-day student in Cape Town, I've discovered that age is just a number 
                      when it comes to creating professional, impactful websites. My passion for 
                      web development started early, and I've been honing my skills while maintaining 
                      focus in my academic performance.
                    </p>
                    <p>
                      What sets me apart is my unique combination of <strong>technical expertise</strong>, 
                      <strong> cybersecurity awareness</strong>, and a <strong>fresh perspective</strong>    
                      on modern web design. I understand that every business needs a strong online 
                      presence, regardless of size.
                    </p>
                    <p>
                      My mission is simple: create professional, interactive websites that help 
                      businesses grow, while offering youth-friendly rates that make quality 
                      web development accessible to everyone.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-hero rounded-2xl p-8 text-white">
                    <h4 className="text-xl font-bold mb-4">Why Choose Me?</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Fresh, modern design perspective</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Affordable pricing</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Security-conscious development</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Personalized service & support</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Free hosting via Netlify</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Free Consultation CTA */}
          <Card className="mt-12 bg-gradient-accent text-white shadow-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Free Consultation Available
              </h3>
              <p className="text-lg mb-6 text-white/90">
                Let's discuss your project and see how we can build something amazing together. 
                No commitment required - just a friendly chat about your goals.
              </p>
              <Badge variant="secondary" className="text-primary">
                Builds Trust • Shows Seriousness • No Obligations
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;