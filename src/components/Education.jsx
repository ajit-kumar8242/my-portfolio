import React from "react";
import { motion } from "motion/react";
const EduPosts = [
  {
    title: "Master of Computer Applications (MCA)",
    date: "2021-2023",
    excerpt: "Alaggappa University",
    cgpa: "CGPA:79",
    image:
      "https://d2lk14jtvqry1q.cloudfront.net/media/large_1512_54f84e4f28_3356236c11.png",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    date: "2018-2021",
    excerpt: "Vidhyaa Giri College of Arts and Science",
    cgpa: "CGPA:84",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOc_OnjUDXbUVwXAXxL6Gb75nipA_7gApWEU9PeZlKbheT6JGc2qymLHsMMC5ZN0Ni10&usqp=CAU",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-primary-50 dark:bg-dark-900 py-20 transition-colors duration-200"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-dark-50 mb-12 font-mono">
            <span className="border-b-2 border-primary-200 dark:border-dark-700 pb-2">
              EDUCATION
            </span>
          </h2>

          <div className="space-y-8">
            {EduPosts.map((post, index) => (
              <motion.article
                key={post.title}
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
                  <div className="flex gap-6">
                    <div className="w-1/3 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0">
                      {
                        <img
                          src={post.image}
                          alt={post.title}
                          className={`w-full h-48 object-cover rounded-lg`}
                        />
                      }
                    </div>
                    <div className="w-2/3">
                      <div className="mb-4">
                        <span className="text-primary-500/40 dark:text-dark-400/40 font-mono text-xs uppercase tracking-widest">
                          {post.date}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-primary-900 dark:text-dark-50 mb-4 font-mono ">
                        {post.title}
                      </h3>

                      <p className="text-primary-600/60 dark:text-dark-300/60 mb-6 font-mono text-lg font-extrabold">
                        {post.excerpt}
                      </p>
                      <p className="text-primary-600/60 dark:text-dark-300/60 mb-6 font-mono text-lg font-extrabold">
                        {post.cgpa}
                      </p>

                      <div className="flex items-center justify-end">
                        <motion.a
                          href="#"
                          className="text-primary-700/80 dark:text-dark-200/80 hover:text-primary-900 dark:hover:text-dark-50 font-mono text-sm uppercase tracking-widest"
                          whileHover={{ x: 5 }}
                        ></motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
