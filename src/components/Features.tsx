import { motion } from 'framer-motion';
import { MapPin, Cpu, TrendingUp, FileText, LineChart, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "India-First Intelligence",
    description: "Tailored insights for the Indian market ecosystem, cultural nuances, and consumer behavior."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Multi-Agent System",
    description: "Specialized AI agents working together to cover every aspect of your startup's needs."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Competitor Mining",
    description: "Uncover competitor weaknesses and market gaps you can exploit immediately."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Structured Research",
    description: "Get comprehensive reports organized into actionable strategies, not just raw data."
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "GTM & Financials",
    description: "Automated go-to-market strategies and financial projections ready for investors."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Compliance Insights",
    description: "Navigate the complex regulatory landscape with AI-powered compliance checks."
  }
];

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose Antarang.AI
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We combine global AI capability with deep local context to give you the unfair advantage.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

