import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/myPhoto.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen gradient-hero flex items-center pt-16 lg:pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="opacity-0 animate-fade-up">
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
                MERN Stack Developer
              </span>
            </div>

            <h1 className="opacity-0 animate-fade-up delay-100 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-primary">Nancy Mishra</span>
            </h1>

            <p className="opacity-0 animate-fade-up delay-200 font-body text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
              I'm a passionate MERN Stack Developer specializing in building
              scalable, user-friendly web applications using modern technologies.
            </p>

            <div className="opacity-0 animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button variant="hero" size="lg" onClick={scrollToProjects}>
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-up delay-400 flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/nancymish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary hover:bg-accent transition-all duration-300 shadow-soft hover:shadow-hover"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nancy-mishra-255910237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary hover:bg-accent transition-all duration-300 shadow-soft hover:shadow-hover"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="nancymishra2003@gmail.com"
                  className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary hover:bg-accent transition-all duration-300 shadow-soft hover:shadow-hover"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="opacity-0 animate-fade-up delay-200 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl transform rotate-6 scale-95" />
              <img
                src={heroImage}
                alt="Nancy Mishra - MERN Stack Developer"
                className="relative w-2/3 max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl shadow-card animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
