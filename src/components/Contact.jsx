import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  const contactLinks = [
    {
      text: "ajith8242@gmail.com",
      href: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsLPwCQqCkwxLxGCCtDlKxBwXPsjLwhkbRwKLtpJZFRMcrxNpWtPPGGNcgnWFNSlVdNWbMFl",
    },
    {
      text: "GITHUB",
      href: "https://github.com/ajit-kumar8242",
    },
    {
      text: "LINKEDIN",
      href: "www.linkedin.com/in/ajit-kumar8242",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-primary-50 dark:bg-dark-900 pt-20 transition-colors duration-200"
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
              CONTACT
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h3 className="text-2xl font-bold text-primary-900 dark:text-dark-50 mb-6 font-mono">
              <span className="border-b border-primary-200 dark:border-dark-700 pb-1">
                GET IN TOUCH
              </span>
            </h3>
            <p className="text-primary-600/60 dark:text-dark-300/60 font-mono mb-12 text-lg">
              Have a project in mind or want to collaborate? Feel free to reach
              out.
            </p>
            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-700/80 dark:text-dark-200/80 hover:text-primary-900 dark:hover:text-dark-50 font-mono text-sm uppercase tracking-widest transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
