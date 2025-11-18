import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Terminal, Code2, Shield } from "lucide-react";

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const offset = window.scrollY * 0.3; // Adjust speed (0.3 = subtle)
        bgRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center py-28 overflow-hidden"
    >
      {/* Image Background with Gradient Overlay */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transition: "transform 0.1s ease-out" }}
      >
        <img
          src="/pic.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none" />
      </div>

      {/* Soft Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-primary/25 blur-3xl rounded-full opacity-50" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/25 blur-3xl rounded-full opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl">
        {/* Terminal Header */}
        <div className="inline-block mb-8">
          <div className="terminal-card bg-white/10 backdrop-blur-md border border-white/20 rounded-md overflow-hidden shadow-xl">
            <div className="editor-header flex items-center px-3 py-2 bg-black/40 backdrop-blur-md border-b border-white/10">
              <div className="editor-dot bg-destructive"></div>
              <div className="editor-dot bg-syntax-yellow ml-1"></div>
              <div className="editor-dot bg-syntax-green ml-1"></div>
              <span className="text-xs text-white/70 ml-3 font-code">
                ~/developer/liam-de-wet
              </span>
            </div>

            <div className="px-4 py-3 bg-black/30 backdrop-blur-sm border-t border-white/10">
              <div className="flex items-center gap-2 text-sm font-code">
                <Terminal className="w-4 h-4 text-syntax-cyan" />
                <span className="text-syntax-green">$</span>
                <span className="text-white">whoami</span>
                <span className="animate-pulse text-primary">▊</span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20 shadow-lg">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Cape Town, South Africa</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
          <span className="text-white">Modern </span>
          <span className="text-primary text-glow">Web Development</span>
          <br />
          <span className="text-white">Meets </span>
          <span className="text-accent text-glow-accent">Cybersecurity</span>
        </h1>

        {/* Subtext */}
        <div className="mb-10 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-white/80 font-code mb-1">
            <span className="text-syntax-green">//</span> Professional developer & cybersecurity enthusiast
          </p>

          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            Hi, I'm <strong className="text-primary">Liam De Wet</strong> — crafting
            <strong className="text-accent"> secure, performant websites</strong>{" "}
            with modern tech stacks at rates that empower small businesses.
          </p>
        </div>

        {/* Terminal Quote */}
        <div className="mb-14 max-w-xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 text-left shadow-xl">
            <div className="flex gap-3">
              <Code2 className="w-5 h-5 text-syntax-cyan mt-1 flex-shrink-0" />
              <blockquote>
                <p className="text-lg italic text-white/90 mb-2 font-code">
                  "Every line of code is a commitment to excellence, security,
                  and innovation."
                </p>
                <footer className="text-sm text-white/70">
                  <span className="text-syntax-green">--</span> Building digital
                  trust, one project at a time
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button
            size="xl"
            className="min-w-[220px] bg-primary text-black font-semibold hover:bg-primary/90 shadow-neon group"
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <Terminal className="mr-2 w-5 h-5" />
            Get Your Quote
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="xl"
            className="min-w-[220px] border-white/40 text-white hover:bg-white/10 backdrop-blur-md"
            onClick={() =>
              window.open("https://liam-prtfolio.netlify.app", "_blank")
            }
          >
            <Code2 className="mr-2 w-5 h-5" />
            View Portfolio
          </Button>
        </div>

        {/* Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            {
              icon: <Code2 className="w-6 h-6" />,
              title: "Modern Stack",
              desc: "React, TypeScript, Tailwind",
              color: "primary",
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Security First",
              desc: "Cybersecurity principles built-in",
              color: "accent",
            },
            {
              icon: <Terminal className="w-6 h-6" />,
              title: "Youth-Friendly",
              desc: "Professional quality, accessible rates",
              color: "syntax-green",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:border-primary/50 hover:shadow-card transition-all duration-300 group"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${item.color}/20 text-${item.color} mb-3 group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>
              <h3 className="font-semibold text-white mb-1 font-code text-sm">
                {item.title}
              </h3>
              <p className="text-xs text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
