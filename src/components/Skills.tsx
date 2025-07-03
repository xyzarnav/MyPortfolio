import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-neon-cyan to-neon-blue",
      skills: [
        {
          name: "React",
          level: 90,
          description:
            "Building dynamic user interfaces with hooks and context",
        },
        {
          name: "JavaScript",
          level: 85,
          description: "Modern ES6+ features and asynchronous programming",
        },
        {
          name: "TypeScript",
          level: 80,
          description: "Type-safe development and better code maintainability",
        },
        {
          name: "HTML/CSS",
          level: 95,
          description: "Semantic markup and modern CSS features",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          description: "Utility-first CSS framework for rapid UI development",
        },
        {
          name: "Framer Motion",
          level: 75,
          description: "Creating smooth animations and micro-interactions",
        },
      ],
    },
    {
      title: "Backend & Tools",
      color: "from-neon-purple to-neon-pink",
      skills: [
        {
          name: "Node.js",
          level: 70,
          description: "Server-side JavaScript and REST API development",
        },
        {
          name: "Git",
          level: 85,
          description:
            "Version control and collaborative development workflows",
        },
        {
          name: "Vite",
          level: 80,
          description: "Fast build tool and development server",
        },
        {
          name: "MongoDB",
          level: 65,
          description: "NoSQL database design and operations",
        },
        {
          name: "Firebase",
          level: 70,
          description: "Backend-as-a-service and real-time databases",
        },
      ],
    },
    {
      title: "Web3 & Emerging Tech",
      color: "from-neon-green to-neon-cyan",
      skills: [
        {
          name: "Ethereum",
          level: 60,
          description: "Smart contract interaction and DApp development",
        },
        {
          name: "Web3.js",
          level: 55,
          description: "Blockchain integration and wallet connectivity",
        },
        {
          name: "Solidity",
          level: 50,
          description: "Smart contract development fundamentals",
        },
        {
          name: "IPFS",
          level: 45,
          description: "Decentralized storage solutions",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A constellation of technologies I've mastered to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300"
            >
              <h3
                className={`text-2xl font-bold mb-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center gap-3 group">
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-125 transition-transform`}
                      />
                      <span className="text-gray-900 dark:text-white font-medium">
                        {skill.name}
                      </span>

                      {/* Skill Level Visualization */}
                      <div className="ml-auto flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-6 rounded-full ${
                              i < Math.round(skill.level / 20)
                                ? `bg-gradient-to-t ${category.color} animate-pulse-slow`
                                : "bg-gray-300 dark:bg-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Tooltip */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute z-10 mt-2 p-3 bg-gray-900 dark:bg-gray-800 text-white text-sm rounded-lg shadow-lg border border-gray-700 max-w-xs"
                      >
                        {skill.description}
                        <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45 border-l border-t border-gray-700" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
