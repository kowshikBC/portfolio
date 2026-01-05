import { motion } from 'framer-motion';
import { Code, Brain, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Programming & Tools',
      items: [
        'Python (NumPy, Pandas, OOPs)',
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'SQL',
        'Tableau',
        'Power BI',
        'OpenCV',
        'AWS EC2',
      ],
    },
    {
      category: 'Data Science & ML',
      items: [
        'Machine Learning Algorithms',
        'Time Series Forecasting',
        'Data Analysis',
        'Deep Learning',
      ],
    },
    {
      category: 'Statistical Techniques',
      items: [
        'Linear Regression',
        'Logistic Regression',
        'Clustering',
        'Classification',
        'Applied Statistics',
        'Statistical Analysis',
      ],
    },
    {
      category: 'Advanced AI',
      items: [
        'GenAI',
        'NLP',
        'RAG',
        'LangChain',
        'Transformers',
        'Fine-tuning',
        'MCP Server',
        'Agentic AI',
      ],
    },
  ];

  const highlights = [
    {
      icon: Brain,
      title: 'Machine Learning Expert',
      description: 'Skilled in supervised and unsupervised ML models with expertise in optimization algorithms.',
    },
    {
      icon: Code,
      title: 'Full-Stack Data Scientist',
      description: 'End-to-end development from data preprocessing to model deployment and UI integration.',
    },
    {
      icon: TrendingUp,
      title: 'AI Innovation',
      description: 'Experience in cutting-edge AI including GenAI, NLP, RAG, and Agentic AI systems.',
    },
    {
      icon: Award,
      title: 'Certified Professional',
      description: 'Multiple certifications including CDS NASSCOM, IABAC Data Science certifications.',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Motivated and detail-oriented Data Scientist with expertise in machine learning,
            deep learning, and advanced AI technologies. Passionate about transforming complex
            data into actionable insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border border-gray-200 dark:border-slate-600 hover:shadow-xl transition-shadow"
              >
                <Icon className="w-12 h-12 text-primary dark:text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
              >
                <h4 className="text-xl font-semibold mb-4 text-primary dark:text-accent">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 border border-primary/20 dark:border-accent/20"
        >
          <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Education
          </h4>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p className="text-lg font-medium">
              B.Sc. (Computer Science) - Davangere University
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Government First Grade College (2023)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

