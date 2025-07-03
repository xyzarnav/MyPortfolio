import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code, Gamepad2 } from 'lucide-react';
import WordleGame from './WordleGame';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showWordle, setShowWordle] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      href: "#",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      href: "mailto:contact@example.com",
      label: "Email",
      color: "hover:text-red-500",
    },
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Wordle Game Trigger Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowWordle(true)}
          className="mx-auto mb-12 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-cyan text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 font-semibold text-base"
          aria-label="Play Wordle Game"
        >
          <Gamepad2 size={22} className="text-neon-cyan animate-pulse" />
          <motion.span
            className="bg-gradient-to-r from-neon-purple to-neon-cyan text-wh bg-clip-text text-white"
            animate={{
              x: [0, -5, 5, -5, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1.2,
              duration: 0.3,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              ease: "easeInOut",
            }}
          >
            Play the Wordle Guess Game
          </motion.span>
        </motion.button>
        {showWordle && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Overlay */}
            <button
              onClick={() => setShowWordle(false)}
              className="absolute inset-0 w-full h-full bg-black/50 cursor-pointer"
              aria-label="Close Wordle Game"
              tabIndex={-1}
              style={{ zIndex: 0 }}
            />
            {/* WordleGame Modal */}
            <div className="relative z-10">
              <WordleGame isOpen={true} onClose={() => setShowWordle(false)} />
            </div>
          </div>
        )}

        <div className="text-center space-y-8">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Arnav.dev
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md mx-auto">
              Crafting digital experiences with passion and precision
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 border border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20`}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto"
          />

          {/* Copyright and Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-2">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart size={16} className="text-red-500" fill="currentColor" />
              </motion.span>
              <span>and</span>
              <Code size={16} className="text-neon-cyan" />
              <span>by Arnav</span>
            </p>
            
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © {currentYear} Arnav. All rights reserved.
            </p>

            <div className="flex items-center justify-center space-x-6 text-xs text-gray-500 dark:text-gray-500">
              <span>Built with React & Framer Motion</span>
              <span>•</span>
              <span>Deployed on Netlify</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 right-10 w-12 h-12 bg-gradient-to-r from-neon-pink/10 to-neon-cyan/10 rounded-full blur-xl"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;