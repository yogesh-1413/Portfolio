import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="space-y-8">
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                <div className="ml-16 portfolio-card p-6 w-full">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Bachelor of Technology in Computer Science & Engineering
                      </h3>
                      <p className="text-lg text-primary font-medium mb-2">
                        Mohan Babu University
                      </p>
                      <div className="flex items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>2022 - 2026</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>Tirupati, India</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Currently in my 4th year, maintaining a CGPA of 7.86/10. 
                        Focused on algorithms, data structures, machine learning, 
                        and software engineering principles.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          Data Structures & Algorithms
                        </span>
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                          Machine Learning
                        </span>
                        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                          Database Systems
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          FullStack Development
                        </span>
                      </div>
                    </div>
                    <GraduationCap className="w-12 h-12 text-primary/60" />
                  </div>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                <div className="ml-16 portfolio-card p-6 w-full">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Higher Secondary Education (or) Intermediate
                      </h3>
                      <p className="text-lg text-primary font-medium mb-2">
                        Glimpses Junior College 
                      </p>
                      <div className="flex items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>2020 - 2022</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>Visakhapatnam, India</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Completed with 79.9% in Science stream. Specialized in 
                        Mathematics, Physics and Chemistry.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          Mathematics
                        </span>
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                          Physics
                        </span>
                        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                          Chemistry
                        </span>
                      </div>
                    </div>
                    <GraduationCap className="w-12 h-12 text-accent/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}