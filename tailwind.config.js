/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"], // sleek & professional
      },
      colors: {
        // Web3 color palette
        neon: {
          cyan: "#00D4FF",
          purple: "#8B5CF6",
          pink: "#EC4899",
          green: "#10B981",
          blue: "#3B82F6",
        },
        dark: {
          bg: "#0A0A0F",
          surface: "#1A1A2E",
          elevated: "#16213E",
        },
        light: {
          bg: "#FAFAFA",
          surface: "#FFFFFF",
          elevated: "#F8F9FA",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        flip: "flip 0.1s ease-in-out",
      },
      keyframes: {
        flip: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%) scale(0.9)",
          },
          "50%": {
            opacity: "1",
            transform: "translateY(0%) scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-100%) scale(0.9)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" },
          "100%": { boxShadow: "0 0 30px rgba(0, 212, 255, 0.8)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

