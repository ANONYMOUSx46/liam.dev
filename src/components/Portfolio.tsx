import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "HMZ Visuals",
      description: "Modern 360 photo booth businesss website, with booking etc",
      category: "Photography",
      image: "/hmz.png",
      tech: ["React", "Tailwind", "Netlify"],
      status: "Live",
	  link: "https://hmzvisuals.netlify.app"
    },
    {
      id: 2,  
      title: "Blue-Star Clippers",
      description: "local home barber website displaying a gallary of work and quick whatsapp messaging",
      category: "Barber",
      image: "/bluestar.png",
      tech: ["React", "TypeScript", "Supabase"],
      status: "Live",
	  link: "https://blue-star-clippers.netlify.app"
    },
    {
      id: 3,
      title: "Robotics club",
      description: "Interactive School robotics club website for learners to browse and complete a quiz on",
      category: "Club",
      image: "/rbc.png",
      tech: ["React", "Framer Motion", "Netlify"],
      status: "Live",
	  link: "https://bestclub.netlify.app"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            <Eye className="w-4 h-4 mr-2" />
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into some of the websites I've built for local clients. 
            Each project is crafted with care and attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-elegant transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex gap-1">
                    {project.tech.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Live Project
                  </div>
                  <Button 
  variant="ghost" 
  size="sm" 
  className="p-2 hover:bg-primary/10 hover:text-primary transition-colors"
  onClick={() => window.open(project.link, "_blank")}
  title="View Project"
>
  <Eye className="w-4 h-4" />
</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-hero text-white shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-white/90 mb-6 max-w-md">
                Join my growing list of satisfied clients and get a website that truly represents your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="accent" 
                  size="lg"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Start Your Project
                </Button>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;