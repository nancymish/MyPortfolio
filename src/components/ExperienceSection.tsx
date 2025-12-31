import { GraduationCap, Briefcase, Award } from "lucide-react";

const experiences = [
  {
    type: "education",
    icon: GraduationCap,
    title: "B.E. in Computer Science & Engineering",
    organization: "Institute of Engineering, Jiwaji University Gwalior",
    period: "2021 – 2025",
    description:
      "Comprehensive education in computer science fundamentals, data structures, algorithms, software engineering, and modern web development technologies.",
    highlights: ["CGPA: 8.1 / 77%", "Data Structures", "Algorithms", "Software Engineering"],
    logo: "https://cdn-prod.mybharats.in/organization/banner_84da289c-ab4b-47c5-b96f-325d9a4e0425.jpeg",
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Class XII (Senior Secondary)",
    organization: "Jawahar Navodaya Vidyalaya, Amarkantak",
    period: "2021",
    description:
      "Completed senior secondary education with distinction, building a strong foundation in science and mathematics.",
    highlights: ["Percentage: 89%", "Science Stream", "Mathematics", "Computer Science"],
    logo: "https://upload.wikimedia.org/wikipedia/en/8/82/Jawahar_Navodaya_Vidyalaya_logo.png",
  },
  {
    type: "experience",
    icon: Briefcase,
    title: "MERN Stack Developer Intern",
    organization: "Galas IT Solutions Pvt. Ltd. (Remote)",
    period: "Mar 2025 – Sept 2025",
    description:
      "Built REST APIs for CRUD operations, integrated JWT-based secure session management, and collaborated with UI and backend teams to deliver project modules on time under Agile sprints.",
    highlights: ["REST APIs", "JWT Authentication", "Agile", "MongoDB"],
    logo: null,
  },
  {
    type: "experience",
    icon: Briefcase,
    title: "Web Developer Intern",
    organization: "Techie Subhdeep IT Solutions",
    period: "Jan 2025 – Feb 2025",
    description:
      "Developed 10+ reusable React UI components, implemented JWT authentication with encryption/decryption logic, and resolved 20+ API integration bugs.",
    highlights: ["React Components", "JWT Auth", "API Integration", "UI Development"],
    logo: null,
  },
  {
    type: "certification",
    icon: Award,
    title: "AI Engineer Certificate",
    organization: "United Latino Students Association",
    period: "Completed",
    description:
      "Professional certification in AI engineering covering machine learning fundamentals, neural networks, and practical AI applications.",
    highlights: ["Machine Learning", "AI Fundamentals", "Neural Networks", "Practical AI"],
    logo: null,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
            Experience & Education
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My{" "}
            <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A blend of formal education, practical experience, and continuous learning
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-translate-x-0.5" />

            {/* Timeline Items */}
            <div className="space-y-8 lg:space-y-12">
              {experiences.map((item, index) => (
                <div
                  key={item.title}
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg transform -translate-x-1/2 lg:-translate-x-1/2 top-8" />

                  {/* Content */}
                  <div className={`flex-1 ml-16 lg:ml-0 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className="p-6 bg-background rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                        {item.logo ? (
                          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1 shadow-sm">
                            <img src={item.logo} alt={item.organization} className="w-full h-full object-contain" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                        )}
                        <div>
                          <span className="text-xs font-medium text-primary uppercase tracking-wide">
                            {item.period}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-3">
                        {item.organization}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {item.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                        {item.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-1 bg-accent text-accent-foreground rounded-md text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
