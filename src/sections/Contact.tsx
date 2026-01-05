import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add your form submission logic (e.g., EmailJS, Formspree, etc.)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'koushikoushik17@gmail.com',
      href: 'mailto:koushikoushik17@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8431427231',
      href: 'tel:+918431427231',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, Karnataka, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kowshik-b-c-b62a62226',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/kowshikBC',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be
            part of your visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 dark:bg-accent/10 group-hover:bg-primary dark:group-hover:bg-accent transition-colors">
                        <Icon className="w-6 h-6 text-primary dark:text-accent group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {info.label}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-primary hover:border-primary dark:hover:bg-accent dark:hover:border-accent transition-all group"
                    >
                      <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-green-500'
                      : 'bg-gradient-to-r from-primary to-accent hover:shadow-lg'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

