import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Text-to-Image Generation using Stable Diffusion',
      description:
        'Developed a text-to-image generation application leveraging Stable Diffusion with the Transformers library. Designed an interactive user interface using Tkinter for prompt input, real-time image rendering, and easy user interaction. Enhanced usability by integrating GPU acceleration for faster image generation.',
      tech: ['Python', 'Stable Diffusion', 'Transformers', 'Tkinter', 'GPU Acceleration'],
      category: 'AI/ML',
    },
    {
      title: 'AI-Powered Appointment Setter',
      description:
        'Created an AI voice agent integrated with Cal.com to automate appointment scheduling. Reduced booking time by 80% through workflow automation, time zone handling, and webhook-based error correction.',
      tech: ['Retell AI', 'Make.com', 'Cal.com', 'Webhooks', 'Automation'],
      category: 'AI Automation',
    },
    {
      title: 'Smart Food Ordering Assistant - MDA Restaurant',
      description:
        'Developed an AI-powered chat assistant for automating restaurant orders using Google Sheets integration. The system handles order placement, inventory checks, FAQs, and order status queries with real-time stock validation.',
      tech: ['AI Chatbot', 'Google Sheets API', 'NLP', 'Real-time Integration'],
      category: 'AI Application',
    },
    {
      title: 'RAG-HR-Chatbot',
      description:
        'Developed a Python-based HR chatbot that processes PDF policy documents by extracting, cleaning, and chunking text with LangChain. Implemented RAG architecture using FAISS for semantic search and Groq API for answer generation. Built a full-stack solution with FastAPI backend and Streamlit frontend, containerized with Docker.',
      tech: ['LangChain', 'RAG', 'FAISS', 'FastAPI', 'Streamlit', 'Docker', 'Groq API'],
      category: 'NLP/RAG',
    },
    {
      title: 'Rice Leaf Disease Prediction using CNN',
      description:
        'Applied resizing, normalization, and data augmentation to enhance model robustness. Adjusted learning rates and dropout rates to improve generalization. Implemented Convolutional Neural Network for image classification with comprehensive model evaluation.',
      tech: ['CNN', 'TensorFlow', 'Image Classification', 'Data Augmentation', 'Python'],
      category: 'Deep Learning',
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'AI/ML': 'from-blue-500 to-cyan-500',
      'AI Automation': 'from-purple-500 to-pink-500',
      'AI Application': 'from-green-500 to-emerald-500',
      'NLP/RAG': 'from-orange-500 to-red-500',
      'Deep Learning': 'from-indigo-500 to-purple-500',
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work in AI, ML, and data science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Category Badge */}
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(
                  project.category
                )}`}
              >
                {project.category}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(
                  project.category
                )} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

