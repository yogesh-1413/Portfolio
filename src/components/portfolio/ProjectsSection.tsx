import { useState } from "react"
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
  image: string
}

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "SARA Ai",
      description: " Smart Academic Resource Assistant(SARA) aims to make learning smarter and more accessible by combining AI-powered study tools, curated educational videos, and mental health support.",
      longDescription: " Smart Academic Resource Assistant (SARA):This platform was built to provide students with a smarter and more personalized way of learning. By integrating AI-powered study guides, curated educational videos, and interactive concept explanations, it simplifies complex topics and makes study time more productive. Alongside academics, it also offers a mental health chat assistant for motivation and mindfulness support. The personalized dashboard ensures learners can track their progress and receive tailored recommendations. Overall, it bridges academics and well-being in one unified platform.",
      technologies: ["React.js", "Node.js", "Firebase", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/yogesh-1413/sara",
      liveUrl: "https://sara-ai.in/",
      featured: true,
      image: "/Sara.png"
    },
    {
      id: 2,
      title: "CalcVerse",
      description: "Calcverse is a one-stop platform offering universal calculators, from currency converters to financial and scientific tools. It simplifies complex calculations with accuracy and speed.",
      longDescription: "Calcverse was designed to provide users with a comprehensive set of calculators in a single, easy-to-use platform. It covers everyday needs such as currency conversion, financial planning, and unit conversions, along with advanced scientific calculations. The goal is to reduce the hassle of switching between multiple apps or websites for different calculations. With an intuitive interface and accurate results, Calcverse ensures convenience for students, professionals, and everyday users. Ultimately, it’s a versatile tool that makes complex calculations simple and accessible to everyone.",
      technologies: ["React.js", "Tailwind", "Express", "Node.js", "Firebase"],
      githubUrl: "https://github.com/yogesh-1413/CalcVerse",
      liveUrl: "https://calcverse.onrender.com/",
      featured: true,
      image: "/CalcVerse.png"
    },

  ]

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate
              my technical skills and problem-solving abilities.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-card p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer group relative"
                      onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <p className="text-white font-medium flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" /> Visit Site
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center text-sm mt-4 text-muted-foreground">
                      
                    <p>{project.title} Preview</p>  
                    </div>
                  </div>
                  

                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {expandedProject === project.id ? project.longDescription : project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>

                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="bg-accent hover:bg-accent/90"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleProject(project.id)}
                        className="ml-auto"
                      >
                        {expandedProject === project.id ? (
                          <>
                            Less Details <ChevronUp className="w-4 h-4 ml-1" />
                          </>
                        ) : (
                          <>
                            More Details <ChevronDown className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="glow-button"
              onClick={() => window.open("https://github.com/yogesh-1413?tab=repositories", "_blank")
              }
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}