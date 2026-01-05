import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/kowshik-b-c-b62a62226',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/kowshikBC',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:koushikoushik17@gmail.com',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:+918431427231',
      label: 'Phone',
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Kowshik B C. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

