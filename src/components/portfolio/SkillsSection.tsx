import { Code, Database, Cloud, Cpu, Palette, Users } from "lucide-react"

export function SkillsSection() {
  const technicalSkills = [
    { name: "C", level: 90, icon: Code },
    
    { name: "Python", level: 85, icon: Code },
    { name: "Java", level: 85, icon: Code },
    { name: "js(React,Node)", level: 75, icon: Code },
    { name: "Kotlin", level: 80, icon: Code },
    { name: "SQL/MongoDB", level: 82, icon: Database },
    { name: "AWS/Cloud", level: 70, icon: Cloud },
    { name: "Machine Learning", level: 75, icon: Cpu },
  ]

  const softSkills = [
    { name: "Problem Solving", level: 92, icon: Cpu },
    { name: "Critical Thinking", level: 88, icon: Users },
    { name: "Communication", level: 85, icon: Users },
    { name: "Leadership", level: 80, icon: Users },
    { name: "Collaboration", level: 87, icon: Palette },
    { name: "Time Management", level: 83, icon: Users },
  ]

  const SkillBar = ({ skill }: { skill: typeof technicalSkills[0] }) => (
    <div className="space-y-2" key={skill.name}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <skill.icon className="w-4 h-4 text-primary" />
          <span className="text-foreground font-medium">{skill.name}</span>
        </div>
        <span className="text-muted-foreground text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="skill-progress h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
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
              A comprehensive overview of my technical skills and soft skills 
              developed through academic projects, internships, and personal learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="portfolio-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div className="portfolio-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-accent" />
                Soft Skills
              </h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
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