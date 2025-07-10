import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "../data/project-data";

interface OtherProjectProps {
  project: Project;
  index: number;
}

const OtherProject: React.FC<OtherProjectProps> = ({ project, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/10 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 group relative z-30 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3 flex-nowrap">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h4>
          <div className="flex items-center flex-shrink-0">
            <span className="mr-2 px-2 py-2 bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded text-[11px]  whitespace-nowrap font-bold">
              {project.category}
            </span>
            <span
              className={`p-2 rounded text-xs font-medium backdrop-blur-sm ${
                project.status !== "In Development"
                  ? "bg-neon-green/40 text-neon-green border border-neon-green/50"
                  : "bg-neon-cyan/40 text-neon-cyan border border-neon-cyan/50"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>
        <span className="block text-sm italic text-gray-500 dark:text-gray-400">
          {project.secondTitle}
        </span>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="flex space-x-3 mt-auto">
        {project.github && (
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 dark:text-gray-400 hover:text-neon-cyan dark:hover:text-neon-cyan transition-colors duration-200"
          >
            <Github size={20} />
          </motion.a>
        )}
        {project.demoAvailable && project.demo && (
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 dark:text-gray-400 hover:text-neon-purple dark:hover:text-neon-purple transition-colors duration-200"
          >
            <ExternalLink size={20} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default OtherProject;
