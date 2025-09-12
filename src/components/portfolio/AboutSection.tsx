export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science and Engineering student with a deep 
                fascination for technology and its potential to solve real-world problems. 
                My journey in programming began in high school, and since then, I've been 
                constantly learning and exploring new technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in full-stack web development, with experience in modern 
                frameworks like React, Node.js, and Python. I'm particularly interested 
                in machine learning, cloud computing, and building scalable applications 
                that make a positive impact.
              </p>

              {/* <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, 
                participating in hackathons, or exploring the latest tech trends. I believe 
                in continuous learning and enjoy tackling challenging problems that push 
                me to grow as a developer.
              </p> */}
            </div>

            <div className="space-y-6">
              <div className="portfolio-card p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What I'm Working On
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Building full-stack web applications
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Exploring machine learning algorithms
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Contributing to open-source projects
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Learning cloud technologies (AWS, Azure)
                  </li>
                </ul>
              </div>

              <div className="portfolio-card p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Career Goals
                </h3>
                <p className="text-muted-foreground">
                  I'm seeking internship opportunities where I can apply my technical 
                  skills, learn from experienced professionals, and contribute to 
                  meaningful projects that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}