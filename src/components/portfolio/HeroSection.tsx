import { Github, Linkedin, Mail, Download,Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import profilePhoto from "@/assets/image.png"
import { ArrowBigDownIcon } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in mb-8">
            <div className="relative inline-block">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-48 h-48 rounded-full border-4 border-white/20 shadow-2xl mx-auto mb-6 object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20"></div>
            </div>
          </div>

          <div className="fade-in-delay">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              D Venkata Yogeswara Rao
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-2">
              Aspiring Software Developer | CSE Student
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Passionate about creating innovative solutions through code. 
              Currently pursuing Computer Science and Engineering with a focus on 
              full-stack development and machine learning.
            </p>
          </div>

          <div className="fade-in-delay-2 flex flex-wrap justify-center gap-4">
           
            <Button 
              size="lg" 
              variant="outline"
              className="glow-button bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
              onClick={() => window.open("https://github.com/yogesh-1413", "_blank")}
              
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="glow-button bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
              onClick={() => window.open("https://www.linkedin.com/in/yogeshwarao/", "_blank")}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="glow-button bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
              onClick={() => window.open("https://leetcode.com/u/Yogesh1413/",'_blank')}
            >
              <Code className="w-5 h-5 mr-2" />
              Leet Code
            </Button>
            <Button 
              size="lg" 
              className="glow-button bg-accent hover:bg-accent/90"
              onClick={() => window.open("https://drive.google.com/file/d/1gflyP54sxPm1A439gzEYHGkJJADag04t/view?usp=sharing", "_blank")}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse">
         
          </div>
        </div>
      </div>
    </section>
  )
}