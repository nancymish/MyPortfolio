import { 
  Code2, 
  Database, 
  Globe, 
  GitBranch, 
  Server, 
  Layers 
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    color: "primary",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    color: "primary",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "NoSQL"],
    color: "primary",
  },
  {
    title: "Tools & Others",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Axios", "npm", "VS Code"],
    color: "primary",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
            My Skills
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technologies I{" "}
            <span className="text-primary">Work With</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit for building modern, full-stack web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 rounded-2xl bg-background shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-background shadow-soft">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium">MERN Stack</span>
            </div>
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium">Full Stack</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium">Responsive Design</span>
            </div>
            <div className="flex items-center gap-3">
              <GitBranch className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium">Version Control</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
