import React, { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export function AnimatedText({
  text,
  className = "",
  as: Component = "div",
  delay = 0,
  once = true,
  threshold = 0.1
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, once, threshold]);

  return (
    <Component className={className} ref={ref} data-lov-id="some-id">
      <span className={`animate-text-container ${isVisible ? "visible" : ""}`}>
        {words.map((word, wordIndex) => (
          <span key={`word-${wordIndex}`}>
            {word.split("").map((char, charIndex) => (
              <span
                key={`char-${wordIndex}-${charIndex}`}
                className="animate-text"
                style={{ "--index": wordIndex + charIndex } as React.CSSProperties}
              >
                {char}
              </span>
            ))}
            {wordIndex !== words.length - 1 && (
              <span
                className="animate-text"
                style={{ "--index": wordIndex + word.length } as React.CSSProperties}
              >
                &nbsp;
              </span>
            )}
          </span>
        ))}
      </span>
    </Component>
  );
}
