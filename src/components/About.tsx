import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const education = [
    {
      institution: "Vivekanand Education Society's Institute Of Technology (VESIT)",
      degree: "B.E. in Information Technology, CGPA: 9.04 (Sem-VI)",
      period: "August 2022 - May 2026",
      location: "Mumbai",
      description: "",
    },
    {
      institution: "MNR School of Excellence",
      degree: "HSC, Central Board of Secondary Education",
      period: "June 2020 - May 2022",
      location: "Kamothe, Maharashtra",
      description: "",
    },
    {
      institution: "Ryewood International School",
      degree: "ICSE, Indian Certificate of Secondary Education",
      period: "March 2010 - July 2020",
      location: "Lonavala, Maharashtra",
      description: "",
    },
  ];

  const experience = [
    {
      title: "Web Developer Intern",
      company: "Vivekanand Education Society's Institute Of Technology (VESIT)",
      period: "Jul 2024 – Present",
      location: "Mumbai",
      description:
        "Developed and deployed responsive web pages using Laravel, JavaScript, PHP; optimized performance to reduce load time by 30% across mobile and desktop. Resolved PHP file upload issues, leading to 40% increase in successful submissions. Integrated basic CI/CD flow via GitHub Actions for automated deployment.",
      achievements: [
        "30% faster load times",
        "40% upload success rate",
        "15-member team",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer with a keen interest in Web3
            technologies, always eager to learn and build innovative solutions
            that push the boundaries of web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-white/10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get to Know Me
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I'm an Information Technology student at VESIT Mumbai with a
                CGPA of 9.04. Currently working as a Web Developer Intern on the
                College Website Team, I specialize in full-stack development and
                blockchain technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring the latest Web3
                trends, contributing to open-source projects, or experimenting
                with new technologies that shape the future of the internet.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Completed", value: "15+" },
                { label: "Technologies", value: "10+" },
                { label: "Coffee Cups", value: "∞" },
                { label: "Happy Clients", value: "5+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 dark:border-white/10"
                >
                  <div className="text-2xl font-bold text-neon-cyan mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-white/10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="mr-3 text-neon-cyan" size={28} />
                Education
              </h3>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="border-l-2 border-neon-cyan pl-6 pb-6"
                >
                  <div className="absolute w-3 h-3 bg-neon-cyan rounded-full -ml-8 mt-1.5"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.institution}
                  </h4>
                  <p className="text-neon-cyan font-medium">{edu.degree}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {edu.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience Section: full width, covers both columns */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 lg:col-span-2"
        >
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-white/10 w-full">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="mr-3 text-neon-purple" size={28} />
              Experience
            </h3>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="border-l-2 border-neon-purple pl-6 relative pb-6"
              >
                <div className="absolute w-3 h-3 bg-neon-purple rounded-full -ml-8 mt-1.5"></div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h4>
                <p className="text-neon-purple font-medium">{exp.company}</p>
                <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {exp.period}
                  </span>
                  <span className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {exp.location}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  {exp.description}
                </p>
                {exp.achievements && (
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="text-neon-purple mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;