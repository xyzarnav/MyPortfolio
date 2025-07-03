import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Calendar, Code, Star } from "lucide-react";
import trustChainImg from "../assets/trustchain.png";
import arbitrageImg from "../assets/arbitage.png";
import turfImg from "../assets/turf.png";
import taskTrackerImg from "../assets/task-tracker.png"
import tideyImg from "../assets/Tidey.png";
// Add a Project interface to define all used properties
interface Project {
  title: string;
  category: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  demoAvailable: boolean;
  keyPoints: string[];
  description: string;
  featured?: boolean;
  status?: string;
  date?: string;
}

const Projects = () => {
  const { ref } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Ref and inView for TrustChain video
  // const trustChainVideoRef = useRef<HTMLDivElement>(null);
  const [trustChainInViewRef, trustChainInView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  // Add missing fields: featured, status, date, demo
  const projects: Project[] = [
    {
      title: "TrustChain",
      category: "Web3",
      tech: ["Next.js", "React", "TailwindCSS", "Ethereum", "Solidity"],
      image: trustChainImg,
      demo: "https://player.cloudinary.com/embed/?cloud_name=dnyrdbyes&public_id=el2hpdqxszy4fuqe9zyk&profile=cld-default&player[autoplay]=true&player[muted]=true",
      demoAvailable: true,
      github: "https://github.com/xyzarnav/trustchain",
      keyPoints: [
        "Transparent government bidding platform",
        "100+ simulated transactions",
        "Smart contract automation",
      ],
      description:
        "Web3-based platform for transparent government bidding processes, eliminating corruption through immutable transaction records and smart contracts.",
      featured: true,
      status: "Completed",
      date: "2025",
    },
    {
      title: "Task Tracker App",
      category: "Full Stack",
      tech: ["React", "Vite", "TailwindCSS", "Lucide Icons"],
      image: taskTrackerImg, // Replace with imported image variable
      demo: "https://task-tracker-green-delta.vercel.app/",
      demoAvailable: true,
      github: "https://github.com/xyzarnav/task-tracker", // Replace with your actual GitHub repo
      keyPoints: [
        "Fast and responsive UI with Vite + React",
        "Beautiful neon-inspired dark/light themes",
        "Track total, completed, and pending tasks",
        "Theme toggle for light/dark mode",
        "Mobile-friendly and responsive design",
      ],
      description:
        "A modern, visually appealing task management app built with React, Vite, and Tailwind CSS. Features include live progress tracking, a theme toggle, and a username-based login system.",
      featured: true,
      status: "Completed",
      date: "2025",
    },
    {
      title: "Crypto Arbitrage Bot",
      category: "AI/ML",
      tech: ["Python", "WebSockets", "Binance API", "TA-Lib"],
      image: arbitrageImg,
      github: "https://github.com/xyzarnav/crypto-arbitrage-bot",
      demoAvailable: false,
      keyPoints: [
        "500+ simulated trades",
        "Real-time market data",
        "10% test profit",
      ],
      description:
        "High-frequency crypto trading bot exploiting price differences across exchanges, with real-time market data streaming and automated execution.",
      featured: true,
      status: "In Development",
      date: "2024",
    },
    {
      title: "Tidey - Beach Cleanup Platform",
      category: "Web3",
      tech: [
        "React",
        "TailwindCSS",
        "MongoDB",
        "Express",
        "JWT",
        "Web3.js",
        "Solidity",
        "IPFS",
      ],
      image: tideyImg, // Replace with actual import
      demo: "https://your-demo-link.com", // Optional: add your deployed DApp link
      demoAvailable: false,
      github: "https://github.com/rushxbh/Tidey", // Replace with real repo URL
      keyPoints: [
        "Blockchain-based NFT achievements for volunteers",
        "Gamification with AquaCoins and on-chain rewards",
        "QR-based event check-in and attendance tracking",
        "Smart contract integration for reward redemption",
        "Role-based dashboards for NGOs and volunteers",
      ],
      description:
        "Tidey is a Web3-powered platform for organizing beach cleanup events. It combines blockchain technology, NFTs, and gamification to reward volunteers and track environmental impact. Features include smart contract integration, secure authentication, and a mobile-friendly design.",
      featured: true,
      status: "In Development",
      date: "2025",
    },
    {
      title: "Turf Booking System",
      category: "Full Stack",
      tech: ["React", "MongoDB", "TailwindCSS"],
      image: turfImg,
      demo: "https://turf-booking-demo.com",
      demoAvailable: true,
      github: "https://github.com/xyzarnav/test_turf",
      keyPoints: [
        "Real-time reservations",
        "40% faster bookings",
        "Mobile-first design",
      ],
      description:
        "Full-stack turf booking platform with real-time slot reservations, payment integration, wallet, and group cost-splitting functionality.",
      featured: false,
      status: "Completed",
      date: "2025",
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
            {featuredProjects.map((project, index) => {
              // TrustChain project special handling
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Project Status */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                            project.status === "Completed"
                              ? "bg-neon-green/60 text-white border border-neon-green/80"
                              : "bg-neon-green/60 text-white border font-bold border-neon-cyan/80"
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
                          {project.github && (
                            <motion.a
                              href={project.github}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                            >
                              <Github size={24} />
                            </motion.a>
                          )}
                        </motion.div>
                      )}
                    </div>
                    {/* Project Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          <span className="px-2 py-1 bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded-full text-xs font-medium">
                            {project.category}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {project.date}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
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
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* Project Status */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                          project.status === "Completed"
                            ? "bg-neon-green/60 text-white border border-neon-green/80"
                            : "bg-neon-cyan/90 text-white border font-bold border-neon-green/80"
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
                        {project.github && (
                          <motion.a
                            href={project.github}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                          >
                            <Github size={24} />
                          </motion.a>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <span className="px-2 py-1 bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {project.date}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
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
            })}
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
                className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/10 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 group relative z-30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h4>
                      <span className="px-1.9 py-0.3 mr-0.3 bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium backdrop-blur-sm ${
                        project.status === "Completed"
                          ? "bg-neon-green/40 text-neon-green border border-neon-green/50"
                          : "bg-neon-cyan/40 text-neon-cyan border border-neon-cyan/50"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
