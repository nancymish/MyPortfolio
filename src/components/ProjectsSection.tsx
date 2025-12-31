import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users, Briefcase, BookOpen, UtensilsCrossed } from "lucide-react";
import student from "@/assets/student.png"; 

const projects = [
  {
    title: "Student Management System",
    description:
      "A comprehensive platform for managing student data with CRUD operations, role-based authentication, and separate dashboards for admins and students.",
    icon: Users,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    features: ["CRUD Operations", "Role-based Auth", "Admin Dashboard", "Student Dashboard"],
    liveUrl: "https://student-management-system-topaz-chi.vercel.app/",
    githubUrl: "https://github.com/nancymish",
  },
  {
    title: "Career Bytes Sync",
    description:
      "A job-assistance platform with community space, code-collaboration room, and recruiter interaction tools. Built end-to-end MERN architecture with role-based authentication.",
    icon: Briefcase,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Role-based Auth", "Community Space", "Code Collaboration", "Recruiter Tools"],
    liveUrl: "https://github.com/nancymish",
    githubUrl: "https://github.com/nancymish",
  },
  {
    title: "Book Store Management",
    description:
      "E-commerce-style app enabling users to browse items, add to cart, and manage purchases with responsive UI and optimized MongoDB queries.",
    icon: BookOpen,
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    features: ["Cart Management", "Item Tracking", "Responsive UI", "REST APIs"],
    liveUrl: "https://github.com/nancymish",
    githubUrl: "https://github.com/nancymish",
  },
  {
    title: "Good Foods - Food Odering",
    description:
      "A modern food delivery platform with diverse menu categories, top dishes showcase, cart functionality, and mobile app download options.",
    icon: UtensilsCrossed,
    tech: ["React", "Tailwind CSS", "Context API", "Vite"],
    features: ["Menu Categories", "Cart System", "Responsive Design", "Mobile App"],
    liveUrl: "https://goodfoods-zeta.vercel.app/",
    githubUrl: "https://github.com/nancymish",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
            My Projects
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured{" "}
            <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Icon Header */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="default" size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
