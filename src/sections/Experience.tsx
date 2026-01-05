import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Scientist',
      company: 'Aristocrat',
      location: 'Remote',
      period: 'Oct 2024 - Feb 2025',
      description: [
        'Applied machine learning to enhance product performance and user engagement.',
        'Contributed to deep learning research for PhD-level academic publications.',
        'Gained practical experience in predictive modeling and optimizing analytical solutions.',
        'Contributed to deep learning articles for PhD researchers.',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Data Science Consultant Intern',
      company: 'Rubixe',
      location: 'Remote',
      period: 'Internship',
      description: [
        'Collaborated with team members to understand client requirements and business challenges.',
        'Worked on a client project where machine learning algorithms like Decision Tree, XGBoost, and Random Forest were applied and achieved 95% test accuracy.',
        'Constructed predictive models using Logistic Regression and Multiple Linear Regression, achieving 85% accuracy in attributing revenue and conversions to specific marketing touchpoints.',
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800"
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
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey in data science and machine learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white dark:bg-slate-800 rounded-full border-4 border-primary transform md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`p-6 rounded-xl bg-white dark:bg-slate-700 shadow-lg border-l-4 border-primary hover:shadow-2xl transition-all`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary dark:text-accent font-semibold mb-2">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-primary dark:text-accent mr-2 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

