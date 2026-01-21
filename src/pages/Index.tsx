import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Calculator from "@/components/Calculator";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <Services />
        <About />
        <Calculator />
        <Portfolio />
        <Testimonials />
        <TechStack />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              Liam <span className="text-accent">De Wet</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Passionate teenage web developer from Cape Town, creating professional websites 
              at youth-friendly rates to help businesses thrive online.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm mb-6">
              <span>Cape Town, South Africa</span>
              <span className="text-accent hidden sm:inline">•</span>
              <button 
                onClick={() => window.open('https://liam-prtfolio.netlify.app', '_blank')}
                className="hover:text-accent transition-colors"
              >
                Portfolio
              </button>
              <span className="text-accent hidden sm:inline">•</span>
              <button 
                onClick={() => window.open('https://github.com/ANONYMOUSx46/', '_blank')}
                className="hover:text-accent transition-colors"
              >
                GitHub
              </button>
              <span className="text-accent hidden sm:inline">•</span>
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/liam-de-wet-42b80a355/', '_blank')}
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </button>
            </div>
            <div className="text-center text-sm text-primary-foreground/70">
              <span>© 2026 Liam De Wet</span>
              <span className="text-accent mx-2">•</span>
              <span>Contact for payments & project details - No online transactions</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
