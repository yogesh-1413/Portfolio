import { Code, Database, Cloud, Cpu, Palette, Users } from "lucide-react"

export function SkillsSection() {
  const technicalSkills = [
    { name: "C", icon: Code },
    { name: "Python", icon: Code },
    { name: "Java", icon: Code },
    { name: "JavaScript (React, Node)", icon: Code },
    { name: "Kotlin", icon: Code },
    { name: "SQL / MongoDB", icon: Database },
    { name: "AWS / Cloud", icon: Cloud },
    { name: "Machine Learning", icon: Cpu },
  ]

  const softSkills = [
    { name: "Problem Solving", icon: Cpu },
    { name: "Critical Thinking", icon: Users },
    { name: "Communication", icon: Users },
    { name: "Leadership", icon: Users },
    { name: "Collaboration", icon: Palette },
    { name: "Time Management", icon: Users },
  ]

  const SkillItem = ({ skill }: { skill: typeof technicalSkills[0] }) => (
    <div className="flex items-center gap-3">
      <skill.icon className="w-5 h-5 text-primary" />
      <span className="text-foreground font-medium">{skill.name}</span>
    </div>
  )

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A concise overview of my technical and soft skills developed through academic projects, internships, and personal learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="portfolio-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                Technical Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <SkillItem key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div className="portfolio-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-accent" />
                Soft Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <SkillItem key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="portfolio-card p-6 text-center">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Frontend Development
              </h4>
              <p className="text-muted-foreground text-sm">
                React, Vue.js, HTML5, CSS3, Tailwind CSS, TypeScript
              </p>
            </div>
            
            <div className="portfolio-card p-6 text-center">
              <Database className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Backend & Database
              </h4>
              <p className="text-muted-foreground text-sm">
                Node.js, Express, Python, Django, MongoDB, PostgreSQL
              </p>
            </div>
            
            <div className="portfolio-card p-6 text-center">
              <Cloud className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Cloud & DevOps
              </h4>
              <p className="text-muted-foreground text-sm">
                AWS, Docker, Git, CI/CD, Linux, Kubernetes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
