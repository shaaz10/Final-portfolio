import { AnimatedText } from "./AnimatedText";
import { MorphingShape } from "./MorphingShape";

export function Hero() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-0 top-1/4 opacity-30 -z-10">
        <MorphingShape 
          color="rgba(190, 149, 255, 0.15)" 
          size="25vw" 
        />
      </div>
      
      <div className="absolute right-0 bottom-1/3 opacity-30 -z-10">
        <MorphingShape 
          color="rgba(0, 229, 255, 0.15)" 
          size="35vw" 
        />
      </div>
      
      <div className="absolute left-1/4 bottom-1/4 opacity-20 -z-10">
        <MorphingShape 
          color="rgba(255, 49, 150, 0.10)" 
          size="30vw" 
        />
      </div>
      
      {/* Content */}
      <div className="max-w-3xl text-center z-10 relative">
        {/* Digital Alchemist Tag */}
        <div className="mb-4 inline-block">
          <span className="inline-block text-sm uppercase tracking-widest text-secondary font-mono border border-secondary/30 px-3 py-1 rounded-full mb-6">
            Digital Alchemist • ML Enthusiast • Experience Builder
          </span>
        </div>
        <div className="flex justify-center gap-6 text-2xl sm:text-3xl md:text-4xl text-white mb-6">
  <span className="hover:scale-125 transition-transform duration-300" role="img" aria-label="idea">💡</span>
  <span className="hover:scale-125 transition-transform duration-300" role="img" aria-label="rocket">🚀</span>
  <span className="hover:scale-125 transition-transform duration-300" role="img" aria-label="laptop">💻</span>
  <span className="hover:scale-125 transition-transform duration-300" role="img" aria-label="sparkles">✨</span>
  <span className="hover:scale-125 transition-transform duration-300" role="img" aria-label="art">🎨</span>
</div>
<div className="flex justify-center mb-6">
  <img
    src="/me.png"
    alt="Cool Coder Illustration"
    className="w-48 sm:w-56 md:w-64 rounded-xl shadow-lg opacity-90"
  />
</div>
<blockquote className="max-w-xl mx-auto text-white/70 italic text-lg sm:text-xl md:text-2xl mb-6 relative before:absolute before:-left-4 before:top-0 before:text-4xl before:text-primary before:content-['“'] after:absolute after:-right-4 after:bottom-0 after:text-4xl after:text-primary after:content-['”']">
  “Designing emotion into pixels, one interaction at a time.”
</blockquote>
        
        {/* Animated Heading */}
        {/* <AnimatedText
          text="Crafting Digital Experiences Through Animation"
          as="h1"
          data-lov-id="header-text"
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-white/75 bg-clip-text text-transparent"
        />
        
        {/* Animated Description */}
        {/* <AnimatedText
          text="I create immersive interfaces with cutting-edge web animations and interactions that push the boundaries of the digital experience."
          as="p"
          delay={500}
          data-lov-id="description-text"
          className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed"
        /> */}
        
        {/* New Content Section */}
        {/* <div className="text-center mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-white/80 text-lg">
            Whether it's an immersive website, creative animation, or an interactive user interface, I help bring your ideas to life with precision and passion.
          </p>
          <p className="text-white/80 text-lg">
            I'm always looking for new challenges. Reach out to start a conversation!
          </p>
        </div> */}

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a 
            href="#projects" 
            className="relative group px-8 py-3 text-sm font-medium overflow-hidden rounded-full"
          >
            <span className="absolute inset-0 bg-primary opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 flex items-center justify-center border border-white/30 rounded-full scale-[1.01] group-hover:scale-110 group-hover:border-white/0 transition-all duration-300"></span>
            <span className="relative text-white">View My Work</span>
          </a>
          
          <a 
            href="#contact"
            className="relative group px-8 py-3 text-sm font-medium overflow-hidden rounded-full"
          >
            <span className="absolute inset-0 bg-transparent border border-white/30 group-hover:border-white/60 transition-all duration-300"></span>
            <span className="relative text-white">Contact Me</span>
          </a>
        </div>
        
        {/* Scroll Arrow */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white/50"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
