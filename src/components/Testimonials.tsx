import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "H.Esau",
      business: "HMZ Visuals",
      location: "Cape Town",
      avatar: "HE",
      rating: 5,
      text: "Liam created an amazing website for my 360 photobooth that perfectly captures our exciting atmosphere. The online ordering system has increased our sales on major levels. His youth-friendly pricing made professional web design accessible for our small business.",
      highlight: "Sales increase"
    },
    {
      name: "S.Pass", 
      business: "Blue-Star Clippers",
      location: "Cape Town",
      avatar: "SP",
      rating: 5,
      text: "Working with Liam was fantastic. He understood exactly what I needed - a modern, mobile-friendly site that showcases my talent and allows easy booking. The attention to detail features gave me complete confidence.",
      highlight: "Modern & secure"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Happy Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it - here's what real businesses say about 
            working with me to transform their online presence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>
              
              <CardContent className="p-8 relative">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="border-2 border-primary/20">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.business} • {testimonial.location}
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <Badge variant="outline" className="hidden sm:block">
                    {testimonial.highlight}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Join Them?
              </h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Let's create a website that will have your customers talking. 
                Your success story could be next!
              </p>
              <Badge variant="secondary">
                Free consultation • No commitment required
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;