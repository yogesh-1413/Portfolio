import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { verify } from "crypto"

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Java Full Stack Development",
      company: "EduSkills",
      location: "Virtual",
      duration: "October 2024 - December 2024",
      description: "Hands-on experience with OOP, multithreading, JDBC, collections, and backend integration.",
      responsibilities: [
     
      ],
      technologies: [],
      current: false,
      ver:"https://drive.google.com/file/d/1oVwl9eBEN6LU3Ft473WAqAyRaBJS331R/view"
    },
    {
      id: 2,
      title: "Kotlin for Android Development",
      company: "EduSkills",
      location: "Virtual",
      duration: "April 2025 - June 2025",
      description: "Gained hands-on experience in Kotlin programming, developing applications and enhancing problem-solving skills.",
      responsibilities: [
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "AWS"],
      current: false,
      ver:'https://drive.google.com/file/d/1zQ2K8rRoXcHyhXsouYdorOgU2UifMsJP/view'
    },
    {
      id: 3,
      title: "Fundamentals of Cybersecurity ",
      company: "Zscaler Training:",
      location: "Virtual",
      duration: "July 2025 - September 2025",
      description: "Completed EDU-102 certification covering core cybersecurity concepts, network security, and threat protection.",
      responsibilities: [

      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLTK", "Jupyter"],
      current: false,
      ver:"https://verify.skilljar.com/c/ezgdpx5mahf7"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Certifications & Internships
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Professional experience gained through internships, 
              showcasing hands-on application of technical skills.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start">
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background shadow-lg ${
                    exp.current ? 'bg-accent animate-pulse' : 'bg-primary'
                  }`}></div>
                  
                  <div className="ml-16 portfolio-card p-8 w-full">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <p className="text-lg text-primary font-medium mb-3">
                          {exp.company}
                        </p>
                        
                        <div className="flex items-center gap-4 text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Briefcase className={`w-12 h-12 ${
                        exp.current ? 'text-accent/60' : 'text-primary/60'
                      }`} />
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* <div className="mb-6">
                      <h4 className="text-foreground font-medium mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div> */}

                    {/* <div className="flex flex-wrap gap-2 mb-6">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div> */}

                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(exp.ver,"_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                     Verify
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Looking for new opportunities to grow and contribute to innovative projects.
            </p>
            <Button size="lg" className="glow-button">
              <Briefcase className="w-5 h-5 mr-2" />
              Let's Work Together
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  )
}