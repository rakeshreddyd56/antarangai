import { motion } from 'framer-motion';
import { Lightbulb, BrainCircuit, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    step: "01",
    title: "Share Your Idea",
    description: (
      <>
        Share your concept in simple words.
        <span className="block mt-3 text-gray-500 font-normal">
          No jargon, no prep, just your raw thoughts.
        </span>
      </>
    )
  },
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    step: "02",
    title: "Antarang AI Goes to Work",
    description: (
      <>
        Our India-first multi-agent engine analyzes:
        <span className="block mt-3 font-medium text-primary-dark/90 leading-relaxed">
          market → competition → regulations
          <br />
          feasibility → risks
        </span>
      </>
    )
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    step: "03",
    title: "Your Launch Plan, Ready",
    description: (
      <>
        Get a structured, actionable, India-ready startup plan that includes
        <span className="block mt-3 font-medium text-primary-dark/90 leading-relaxed">
          GTM, compliance roadmap,
          <br />
          financial model, and MVP strategy.
        </span>
      </>
    )
  }
];

const Workflow = () => {
  return (
    <section id="workflow" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">From idea to execution plan in three simple steps.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0">
             <motion.div 
               initial={{ width: "0%" }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-primary/20"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.4, type: "spring" }}
                className="bg-white p-6 text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 mx-auto bg-white border-4 border-gray-50 group-hover:border-primary/20 transition-colors rounded-full flex items-center justify-center text-primary mb-6 relative shadow-sm"
                >
                  {step.icon}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: (index * 0.4) + 0.3, type: "spring" }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md"
                  >
                    {step.step}
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <div className="text-gray-600 leading-relaxed min-h-[100px] flex flex-col justify-start">
                  {step.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
