import  { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Star } from "lucide-react";
import { projects } from "../data/project-data"; // Import projects array

import FeaturedProject from "./FeaturedProject";
import OtherProject from "./OtherProject";

const Projects = () => {
  const { ref } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [, setHoveredProject] = useState<number | null>(null);

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-10 md:py-20 w-full relative z-10">
      <div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work and creative solutions
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-10 md:mb-20 relative z-30">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Star className="mr-3 text-neon-cyan" size={28} />
            Featured Work
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            {featuredProjects.map((project, index) => (
              <FeaturedProject
                key={index}
                project={project}
                index={index}
                setHoveredProject={setHoveredProject}
              />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="relative z-30">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Code className="mr-3 text-neon-purple" size={28} />
            Other Projects
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {otherProjects.map((project, index) => (
              <OtherProject key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
