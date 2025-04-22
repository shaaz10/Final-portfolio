
import { ProjectCard } from "./ProjectCard";
import { AnimatedText } from "./AnimatedText";

// Sample project data - you would replace these with your actual projects
const PROJECTS = [
  {
    title: "Complaints Webstie for VNRVJIET college",
    description: "A complainting website for students annoymously",
    image: "/1.png",
    tags: ["WebG3", "MERN", "NODE js", "FLASK"],
    link: "https://complaints.vnrzone.site/"
  },
  {
    title: "Project Expo Website for VNRVJIET college",
    description: "A websitefor the students to display their projectrs or view others project and comment on them",
    image: "/2.png",
    tags: ["React", "TypeScript", "AI", "Lucid react"],
    link: "https://openhouse.vnrzone.site/"
  },
  {
    title: "Mood changing Webstie for depressed people",
    description: "used for changing the mood this website ask you about your mood and suggest you the type of  movies ,quotes,music etc  u should watch or listen to ,to change your mood",
    image: "/3.png",
    tags: ["JavaScript", "Canvas API", "Typography", "Motion Design"],
    link: "https://moodmavens.netlify.app/"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-mono tracking-widest uppercase">Portfolio</span>
          <AnimatedText
            text="Featured Projects"
            as="h2"
            className="text-4xl sm:text-5xl font-bold mt-2 mb-4"
          />
          <AnimatedText
            text="A collection of my most innovative and visually striking interactive experiences."
            as="p"
            delay={300}
            className="text-white/70 max-w-2xl mx-auto"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              className="opacity-0 animate-blur-in"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards"
              }}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://github.com/shaaz10" 
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors group"
          >
            <span>View All Projects</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
