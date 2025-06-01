
import { useEffect, useRef, useState } from "react";
import { AnimatedText } from "./AnimatedText";
import { SkillBar } from "./SkillBar";
import { MorphingShape } from "./MorphingShape";

const TECH_SKILLS = [
  { name: "Frontend", level: 95, color: "bg-indigo-500" },
  { name: "ML and AI", level: 90, color: "bg-rose-500" },
  { name: "Flask", level: 85, color: "bg-emerald-500" },
  { name: "DSA", level: 88, color: "bg-yellow-400" },
  { name: "Prompting", level: 99, color: "bg-sky-500" },
  { name: "Pipelining models", level: 94, color: "bg-purple-500" }
];


const SOFT_SKILLS = [
  "Problem Solving",
  "Creative Thinking",
  "Visual Communication",
  "Quick Learner",
  "Performance Optimization",
  "Technical Documentation"
];

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-0 -z-10 opacity-20 blur-xl">
        <MorphingShape 
          color="rgba(0, 229, 255, 0.2)"
          size="40vw"
        />
      </div>
      
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-mono tracking-widest uppercase">Expertise</span>
          <AnimatedText
            text="Skills & Technologies"
            as="h2"
            className="text-4xl sm:text-5xl font-bold mt-2 mb-4"
          />
          <AnimatedText
            text="Specialized in creating cutting-edge animations and interactive experiences for the web."
            as="p"
            delay={300}
            className="text-white/70 max-w-2xl mx-auto"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Tech Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white/90">Technical Proficiency</h3>
            <div className="space-y-6">
              {TECH_SKILLS.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
          
          {/* Soft Skills / Additional Expertise */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white/90">Creative Capabilities</h3>
            <div className="grid grid-cols-2 gap-4">
              {SOFT_SKILLS.map((skill, index) => (
                <div 
                  key={index}
                  className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-white/10"
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease, transform 0.5s ease`,
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-xl font-medium text-white mb-2">{skill}</div>
                </div>
              ))}
            </div>
            
            {/* Tools / Technologies cloud */}
            <div className="mt-8 p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-lg font-medium mb-4 text-white/80">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Flask", "Azure", "ML", "AIs", "Github", 
                  "MERN", "ML libs", "React", "TypeScript", "TailwindCSS",
                  "WEKA", "UML", "JAVA", "Python", "JSP","Servlets"
                ].map((tool, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r"
                    style={{
                      background: index % 3 === 0 
                        ? "linear-gradient(135deg, rgba(190, 149, 255, 0.2), rgba(190, 149, 255, 0))"
                        : index % 3 === 1
                        ? "linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(0, 229, 255, 0))"
                        : "linear-gradient(135deg, rgba(255, 49, 150, 0.2), rgba(255, 49, 150, 0))",
                      borderLeft: index % 3 === 0
                        ? "1px solid rgba(190, 149, 255, 0.3)"
                        : index % 3 === 1
                        ? "1px solid rgba(0, 229, 255, 0.3)"
                        : "1px solid rgba(255, 49, 150, 0.3)",
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scale(1)" : "scale(0.8)",
                      transition: "all 0.4s ease",
                      transitionDelay: `${150 + index * 50}ms`
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
