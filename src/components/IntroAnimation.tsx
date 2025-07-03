import React, { useEffect, useState } from "react";

const words = [
  "Hola",
  "你好",
  "Welcome",
  "Bonjour",
  "Ciao",
  "Salam",
  "Namaste",
];

export default function IntroAnimation({ onDone }: { onDone?: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length - 1) {
      const interval = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 250);
      return () => clearInterval(interval);
    } else if (onDone) {
      // Wait 300ms after last word before calling onDone
      const timeout = setTimeout(() => {
        onDone();
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [index, onDone]);

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="fixed right-10 top-[60%] -translate-y-1/2 text-6xl md:text-8xl text-white font-extrabold font-mono">
        <span
          key={index}
          className="animate-flip transition-all duration-200 text-neon-cyan tracking-wide"
          style={{ textShadow: "0 0 8px #00D4FF, 0 0 12px #00D4FF" }}
        >
          {words[index]}
        </span>
      </div>
    </div>
  );
}
