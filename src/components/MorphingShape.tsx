
import { useEffect, useRef } from "react";

interface MorphingShapeProps {
  className?: string;
  color?: string;
  size?: string | number;
}

export function MorphingShape({
  className = "",
  color = "rgba(190, 149, 255, 0.3)",
  size = "300px",
}: MorphingShapeProps) {
  const shapeRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const initPos = useRef({ x: 0, y: 0 });
  const isInitialized = useRef(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mousePos.current = { x: clientX, y: clientY };
      
      if (!isInitialized.current && shapeRef.current) {
        const rect = shapeRef.current.getBoundingClientRect();
        initPos.current = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        isInitialized.current = true;
      }
    };
    
    const updateShapePosition = () => {
      if (shapeRef.current && isInitialized.current) {
        const dx = mousePos.current.x - initPos.current.x;
        const dy = mousePos.current.y - initPos.current.y;
        
        // Calculate distance for an inverse relationship 
        // (shape moves away from cursor)
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = Math.min(window.innerWidth, window.innerHeight) / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        
        // Move the shape in the opposite direction from the cursor
        const moveX = (dx / distance) * normalizedDistance * -15;
        const moveY = (dy / distance) * normalizedDistance * -15;
        
        if (!isNaN(moveX) && !isNaN(moveY)) {
          shapeRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
      }
      
      requestAnimationFrame(updateShapePosition);
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    const animationId = requestAnimationFrame(updateShapePosition);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div
      ref={shapeRef}
      className={`animate-morph ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
        transition: "transform 0.3s ease-out",
      }}
    />
  );
}
