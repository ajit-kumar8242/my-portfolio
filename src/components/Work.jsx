import React from "react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
    image: "/images/bg.png",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with real-time inventory management",
    technologies: ["TypeScript", "Next.js", "PostgreSQL"],
    link: "#",
    image: "/images/bg.png",
  },
  {
    title: "Project Three",
    description: "A data visualization dashboard for business analytics",
    technologies: ["D3.js", "Python", "AWS"],
    link: "#",
    image: "/images/bg.png",
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="min-h-screen bg-primary-50 dark:bg-dark-900 py-20 transition-colors duration-200"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-dark-50 mb-12 font-mono">
            <span className="border-b-2 border-primary-200 dark:border-dark-700 pb-2">
              WORK
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 border border-primary-200 dark:border-dark-700 group-hover:border-primary-300 dark:group-hover:border-dark-600 transition-colors duration-300">
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-300 dark:group-hover:bg-dark-600 transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-300 dark:group-hover:bg-dark-600 transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-300 dark:group-hover:bg-dark-600 transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-300 dark:group-hover:bg-dark-600 transition-colors duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="relative w-full h-48 mb-6 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
                    {project.title}
                  </h3>
                  <p className="text-gray-700/60 dark:text-white/60 mb-6 font-mono text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-gray-600/40 dark:text-white/40 font-mono text-xs uppercase tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    className="inline-block text-gray-800/80 dark:text-white/80 hover:text-gray-900 dark:hover:text-white font-mono text-sm uppercase tracking-widest"
                    whileHover={{ x: 5 }}
                  >
                    View Project →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
