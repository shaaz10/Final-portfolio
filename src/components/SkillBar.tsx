
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  color?: string;
  className?: string;
}

export function SkillBar({ 
  name, 
  level, 
  color = "bg-primary",
  className
}: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setWidth(level);
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [level]);

  return (
    <div ref={barRef} className={cn("mb-4", className)}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white/90">{name}</span>
        <span 
          className="text-xs font-semibold text-white/70 transition-opacity duration-1000"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {width}%
        </span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className={cn("h-full rounded-full transition-all duration-1000 ease-out", color)}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
