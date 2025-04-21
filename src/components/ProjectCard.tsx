
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  className
}: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [animationFrame, setAnimationFrame] = useState<number | null>(null);

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [animationFrame]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (centerY - e.clientY) / 15;
    const rotateY = (e.clientX - centerX) / 15;
    
    // Use requestAnimationFrame for smooth animation
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
    }
    
    const newFrame = requestAnimationFrame(() => {
      setRotation({ x: rotateX, y: rotateY });
    });
    
    setAnimationFrame(newFrame);
  };

  const handleMouseLeave = () => {
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
    }
    
    const newFrame = requestAnimationFrame(() => {
      setRotation({ x: 0, y: 0 });
      setIsHovering(false);
    });
    
    setAnimationFrame(newFrame);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative group bg-card rounded-xl overflow-hidden transition-all duration-500",
        "shadow-lg hover:shadow-2xl hover:-translate-y-2",
        "transform perspective-1000",
        className
      )}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.02 : 1})`,
        transition: "transform 0.15s ease-out"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project image with overlay */}
      <div className="relative w-full h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url(${image})`,
            transform: isHovering ? "scale(1.05)" : "scale(1)"
          }}
        />
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
          isHovering ? "opacity-20" : "opacity-50"
        }`} />
      </div>

      {/* Card content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-gray-300 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transform: isHovering ? "translateY(0)" : "translateY(5px)",
                opacity: isHovering ? 1 : 0.7,
                transition: "all 0.3s ease-out"
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a
          href={link}
          className="inline-block text-sm font-medium text-primary hover:text-secondary transition-colors duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 group-hover:after:w-full"
        >
          View Project
        </a>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary transform translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
    </div>
  );
}
