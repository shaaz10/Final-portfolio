
import React, { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

export function CustomCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseEnter = () => {
      document.body.style.cursor = "none";
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = "auto";
      setIsHidden(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.hasAttribute("role") ||
        target.getAttribute("role") === "button" ||
        target.getAttribute("tabindex") !== null;
      
      setIsHovering(isInteractive);
    };

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const cursorStyle: React.CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: isClicking ? "30px" : isHovering ? "60px" : "40px",
    height: isClicking ? "30px" : isHovering ? "60px" : "40px",
    opacity: isHidden ? 0 : 1,
    background: isHovering 
      ? "radial-gradient(circle, rgba(190, 149, 255, 0.8) 0%, rgba(190, 149, 255, 0) 70%)" 
      : "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)",
    boxShadow: isHovering ? "0 0 20px 5px rgba(190, 149, 255, 0.3)" : "none",
  };

  return <div className="custom-cursor" style={cursorStyle} />;
}
