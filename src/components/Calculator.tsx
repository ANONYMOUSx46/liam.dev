import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator as CalculatorIcon, Zap } from "lucide-react";

const Calculator = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const packages = {
    "basic": { name: "Basic Presence", min: 1500, max: 2500 },
    "starter": { name: "Starter Brand", min: 3000, max: 4000 },
    "pro": { name: "Pro Business", min: 5000, max: 7000 }
  };

  const addons = {
    "maintenance": { name: "Monthly Maintenance", min: 80, max: 100 },
    "seo": { name: "SEO Boost", price: 200 }
  };

  const calculateTotal = () => {
    if (!selectedPackage) return { min: 0, max: 0 };
    
    const pkg = packages[selectedPackage as keyof typeof packages];
    let totalMin = pkg.min;
    let totalMax = pkg.max;

    selectedAddons.forEach(addon => {
      const addonData = addons[addon as keyof typeof addons];
      if ('price' in addonData) {
        totalMin += addonData.price;
        totalMax += addonData.price;
      } else {
        totalMin += addonData.min;
        totalMax += addonData.max;
      }
    });

    return { min: totalMin, max: totalMax };
  };

  const total = calculateTotal();
  const hasSelection = selectedPackage || selectedAddons.length > 0;

  return (
    <section id="calculator" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            <CalculatorIcon className="w-4 h-4 mr-2" />
            Price Calculator
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Calculate Your Investment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get an instant estimate for your website project. 
            Transparent pricing with no hidden costs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant overflow-hidden">
            <CardHeader className="bg-gradient-hero text-white text-center">
              <CardTitle className="text-2xl">Website Package Calculator</CardTitle>
              <CardDescription className="text-white/90">
                Select your package and add-ons to see your total investment
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8">
              {/* Package Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  Choose Your Package
                </h3>
                <div className="grid gap-4">
                  {Object.entries(packages).map(([key, pkg]) => (
                    <div key={key} className="relative">
                      <label 
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-muted/50 ${
                          selectedPackage === key 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border'
                        }`}
                      >
                        <input
                          type="radio"
                          name="package"
                          value={key}
                          checked={selectedPackage === key}
                          onChange={(e) => setSelectedPackage(e.target.value)}
                          className="sr-only"
                        />
                        <div className="flex-1">
                          <div className="font-semibold">{pkg.name}</div>
                          <div className="text-sm text-muted-foreground">
                            R{pkg.min.toLocaleString()} - R{pkg.max.toLocaleString()}
                          </div>
                        </div>
                        {selectedPackage === key && (
                          <Badge variant="default">Selected</Badge>
                        )}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-ons Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Add-on Services</h3>
                <div className="grid gap-4">
                  {Object.entries(addons).map(([key, addon]) => (
                    <div key={key} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                      <Checkbox
                        id={key}
                        checked={selectedAddons.includes(key)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedAddons([...selectedAddons, key]);
                          } else {
                            setSelectedAddons(selectedAddons.filter(id => id !== key));
                          }
                        }}
                      />
                      <label htmlFor={key} className="flex-1 cursor-pointer">
                        <div className="font-medium">{addon.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {'price' in addon 
                            ? `R${addon.price}`
                            : `R${addon.min} - R${addon.max}`
                          }
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Display */}
              {hasSelection && (
                <div className="border-t pt-6">
                  <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg text-center">
                    <div className="text-sm text-muted-foreground mb-2">
                      Estimated Total Investment
                    </div>
                    <div className="text-4xl font-bold text-primary mb-4">
                      {total.min === total.max 
                        ? `R${total.min.toLocaleString()}`
                        : `R${total.min.toLocaleString()} - R${total.max.toLocaleString()}`
                      }
                    </div>
                    <Button 
                      variant="accent" 
                      size="lg" 
                      className="mt-4"
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Contact Me for Quote
                    </Button>
                  </div>
                </div>
              )}

              {!hasSelection && (
                <div className="text-center py-8 text-muted-foreground">
                  <CalculatorIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Select a package to see your estimated investment</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-primary">What's Included</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Free consultation and planning</li>
                  <li>• Professional design and development</li>
                  <li>• Mobile-responsive layout</li>
                  <li>• Free hosting via Netlify</li>
                  <li>• Basic SEO optimization</li>
                  <li>• 30-day support after launch</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-primary">Payment Options</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  
                  <li>• Flexible payment plans available</li>
                  
                  <li>• No hidden fees or surprises</li>
                  <li>• Money-back satisfaction guarantee</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;