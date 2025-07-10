import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Project } from "../data/project-data";

interface FeaturedProjectProps {
  project: Project;
  index: number;
  setHoveredProject: React.Dispatch<React.SetStateAction<number | null>>;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
  index,
  setHoveredProject,
}) => {
  const [trustChainInViewRef, trustChainInView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [isVideoVisible, setIsVideoVisible] = useState(false);

  if (project.title === "TrustChain") {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        onMouseEnter={() => setHoveredProject(index)}
        onMouseLeave={() => setHoveredProject(null)}
        className="group relative bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between z-30"
        ref={trustChainInViewRef}
      >
        {/* Project Video or Image */}
        <div className="relative h-64 overflow-hidden">
          {trustChainInView ? (
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dnyrdbyes&public_id=el2hpdqxszy4fuqe9zyk&profile=cld-default&player[autoplay]=true&player[muted]=true"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="TrustChain Demo"
              className="w-full h-full object-cover"
              style={{ border: 0 }}
            />
          ) : (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

          {/* Project Status */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                project.status !== "In Development"
                  ? "bg-neon-green/60 text-white border border-neon-green/80"
                  : "bg-neon-green/60 text-white border font-bold border-neon-cyan/80"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>
        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-3 flex-nowrap">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <div className="flex items-center flex-shrink-0">
              <span className="mr-3 px-2 py-1 bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded-full text-xs font-medium">
                {project.category}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <Calendar size={16} className="mr-1" />
                {project.date}
              </span>
            </div>
          </div>
          <span className="block text-sm italic font-bold text-gray-500 dark:text-gray-400">
            {project.secondTitle}
          </span>

          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow text-sm">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-auto">
            {project.github && (
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Github size={18} />
                <span>Code</span>
              </motion.a>
            )}
            {project.demoAvailable && project.demo && (
              <motion.a
                href={project.demo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink size={18} />
                <span>Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  if (project.title === "CryptoArb") {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        onMouseEnter={() => setHoveredProject(index)}
        onMouseLeave={() => setHoveredProject(null)}
        className="group relative bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between z-30"
      >
        {/* Project Video or Image */}
        <div className="relative h-64 overflow-hidden">
          {isVideoVisible ? (
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dnyrdbyes&public_id=CryptoApp_oljadf&profile=cld-default&player[autoplay]=true&player[muted]=true"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Crypto Simulator & Trading Bot"
              className="w-full h-full object-cover"
              style={{ border: 0 }}
            />
          ) : (
            <>
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition duration-300"
                  onClick={() => setIsVideoVisible(true)}
                  title="Play video"
                  aria-label="Play video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                  <span className="sr-only">Play video</span>
                </button>
              </div>
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          {/* Project Status */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                project.status !== "In Development"
                  ? "bg-neon-green/60 text-white border border-neon-green/80"
                  : "bg-neon-green/60 text-white border font-bold border-neon-cyan/80"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>
        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-3 flex-nowrap">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <div className="flex items-center flex-shrink-0">
              <span className="mr-4 px-2 py-1 bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded-full text-xs font-medium">
                {project.category}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <Calendar size={16} className="mr-1" />
                {project.date}
              </span>
            </div>
          </div>
          <span className="block text-sm italic font-bold text-gray-500 dark:text-gray-400">
            {project.secondTitle}
          </span>

          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow text-sm">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-auto">
            {project.github && (
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Github size={18} />
                <span>Code</span>
              </motion.a>
            )}
            {project.demoAvailable && project.demo && (
              <motion.a
                href={project.demo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink size={18} />
                <span>Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseEnter={() => setHoveredProject(index)}
      onMouseLeave={() => setHoveredProject(null)}
      className="group relative bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between z-30"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain bg-white "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Project Status */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
              project.status !== "In Development"
                ? "bg-neon-green/60 text-white border border-neon-green/80"
                : "bg-neon-cyan/90 text-white border font-bold border-neon-green/80"
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3 flex-nowrap">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <div className="flex items-center flex-shrink-0">
            <span className="mr-3 px-2 py-1 bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded-full text-xs font-medium">
              {project.category}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              <Calendar size={16} className="mr-1" />
              {project.date}
            </span>
          </div>
        </div>
        <span className="block text-sm font-bold italic text-gray-500 dark:text-gray-400">
          {project.secondTitle}
        </span>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 mt-auto">
          {project.github && (
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Github size={18} />
              <span>Code</span>
            </motion.a>
          )}
          {project.demoAvailable && project.demo && (
            <motion.a
              href={project.demo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <ExternalLink size={18} />
              <span>Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
