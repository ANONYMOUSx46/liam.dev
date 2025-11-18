import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    business: "",
    package: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage = `Hi Liam! I'm interested in your web development services.

*Contact Details:*
Name: ${formData.name}
Email: ${formData.email}
Business: ${formData.business}
Package Interest: ${formData.package}

*Message:*
${formData.message}

Looking forward to discussing my project with you!`;

    // Encode for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "27794137016"; 
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Open WhatsApp
      window.open(whatsappURL, '_blank');
      
      // Show success message
      toast({
        title: "Message sent!",
        description: "Your inquiry has been sent via WhatsApp. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        business: "",
        package: "",
        message: ""
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      value: "+27 79 413 7016", 
      action: () => window.open("https://wa.me/27794137016", '_blank')
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "dwliamdw@gmail.com", 
      action: () => window.open("mailto:dwliamdw@gmail.com", '_blank')
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Cape Town, South Africa",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take your business online? Let's discuss your project and 
            create a website that exceeds your expectations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Send Me a Message
                </CardTitle>
                <CardDescription>
                  Fill out this form and I'll get back to you via WhatsApp within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="business">Business/Organization</Label>
                    <Input
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Your Business Name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="package">Package Interest</Label>
                    <select
                      id="package"
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a package...</option>
                      <option value="Basic Presence">Basic Presence (R1,500 - R2,500)</option>
                      <option value="Starter Brand">Starter Brand (R3,000 - R4,000)</option>
                      <option value="Pro Business">Pro Business (R5,000 - R7,000)</option>
                      <option value="Custom">Custom Requirements</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending via WhatsApp...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Send via WhatsApp
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & CTA */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Get In Touch Directly</CardTitle>
                  <CardDescription>
                    Prefer to reach out directly? Here are all the ways to connect with me.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div 
                      key={method.label}
                      className={`flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/30 transition-colors ${
                        method.action ? 'cursor-pointer' : ''
                      }`}
                      onClick={method.action || undefined}
                    >
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{method.label}</div>
                        <div className="text-sm text-muted-foreground">{method.value}</div>
                      </div>
                      {method.action && (
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Portfolio CTA */}
              <Card className="bg-gradient-hero text-white shadow-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">View My Work</h3>
                  <p className="text-white/90 mb-4">
                    Check out my portfolio to see examples of websites I've built for other clients.
                  </p>
                  <Button 
                    variant="accent" 
                    onClick={() => window.open('https://liam-prtfolio.netlify.app', '_blank')}
                    className="w-full"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Portfolio
                  </Button>
                </CardContent>
              </Card>

              {/* Process Overview */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    How It Works
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      "Free consultation to discuss your needs",
                      "Custom proposal with timeline & pricing", 
                      "50% deposit to begin development",
                      "Regular updates and feedback rounds",
                      "Final review and launch",
                      "30-day support period included"
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;