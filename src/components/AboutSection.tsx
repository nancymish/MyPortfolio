import { Code, Palette, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating beautiful, intuitive user experiences",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in agile team environments",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Turning Ideas Into{" "}
              <span className="text-primary">Digital Reality</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I'm a dedicated Full Stack Developer with a passion for creating
                web applications that make a difference. With expertise in the
                MERN stack, I bring ideas to life through clean code and
                thoughtful design.
              </p>
              <p>
                My journey in web development started with curiosity and has
                evolved into a deep commitment to crafting exceptional digital
                experiences. I believe in writing code that's not just
                functional, but maintainable and elegant.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing
                to open-source projects, and sharing knowledge with the developer
                community.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl gradient-card shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
