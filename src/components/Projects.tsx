import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Play, Calendar, Code, Star } from "lucide-react";

const Projects = () => {
  const { ref } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with modern UI, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "#",
      demo: "#",
      date: "2024",
      status: "Completed",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Firebase", "Framer Motion", "TypeScript"],
      github: "#",
      demo: "#",
      date: "2024",
      status: "Completed",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "OpenWeather API", "Charts.js", "CSS3"],
      github: "#",
      demo: "#",
      date: "2023",
      status: "Completed",
      featured: false,
    },
    {
      title: "Crypto Portfolio Tracker",
      description:
        "Track cryptocurrency investments with real-time prices, portfolio analytics, and market trends visualization.",
      image:
        "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "CoinGecko API", "Web3.js", "Chart.js"],
      github: "#",
      demo: "#",
      date: "2024",
      status: "In Progress",
      featured: true,
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with post scheduling, engagement tracking, and performance metrics.",
      image:
        "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      github: "#",
      demo: "#",
      date: "2023",
      status: "Completed",
      featured: false,
    },
    {
      title: "NFT Marketplace",
      description:
        "Decentralized NFT marketplace with minting capabilities, auction features, and wallet integration for seamless trading.",
      image:
        "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Solidity", "Web3.js", "IPFS"],
      github: "#",
      demo: "#",
      date: "2024",
      status: "In Progress",
      featured: true,
    },
  ];

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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 flex flex-col z-30"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Project Status */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-neon-green/20 text-neon-green border border-neon-green/30"
                          : "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredProject === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-4"
                    >
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-neon-cyan/20 backdrop-blur-sm rounded-full text-white hover:bg-neon-cyan/30 transition-colors duration-200"
                      >
                        <Play size={24} />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github size={24} />
                      </motion.a>
                    </motion.div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {project.date}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
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
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/10 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 group relative z-30"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      project.status === "Completed"
                        ? "bg-neon-green/20 text-neon-green"
                        : "bg-neon-cyan/20 text-neon-cyan"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

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

                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-neon-cyan dark:hover:text-neon-cyan transition-colors duration-200"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-neon-purple dark:hover:text-neon-purple transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
