
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

interface ParticleCanvasProps {
  count?: number;
  className?: string;
}

export function ParticleCanvas({ count = 50, className = "" }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    function initParticles() {
      particles.current = [];
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 0.5;
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: getRandomColor(),
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    }

    function getRandomColor() {
      const colors = [
        "rgba(190, 149, 255, 0.8)", // purple
        "rgba(0, 229, 255, 0.8)",   // cyan
        "rgba(255, 49, 150, 0.8)"   // magenta
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach(p => {
        // Draw particle
        ctx.fillStyle = p.color.replace("0.8", `${p.opacity}`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Mouse interaction
        const dx = p.x - mousePosition.current.x;
        const dy = p.y - mousePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 500;
          p.x += Math.cos(angle) * force * 5;
          p.y += Math.sin(angle) * force * 5;
        }

        // Boundaries
        if (p.x < 0 || p.x > canvas.width) {
          p.speedX *= -1;
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.speedY *= -1;
        }
        
        // Connect particles
        particles.current.forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = p.color.replace("0.8", `${0.1 * (1 - distance / 120)}`);
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [count]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${className}`} 
    />
  );
}
