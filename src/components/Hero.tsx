import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import HeroMapVisual from './visuals/HeroMapVisual';

const Hero = () => {
  const taglineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: taglineRef,
    offset: ["start end", "center center"]
  });

  const taglineOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const taglineY = useTransform(scrollYProgress, [0, 0.8], [50, 0]);
  const taglineScale = useTransform(scrollYProgress, [0, 0.8], [0.95, 1]);

  return (
    <section id="hero" className="pt-32 pb-40 lg:pt-40 lg:pb-60 overflow-visible relative bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/5 text-primary font-medium text-sm mb-8"
          >
            <Sparkles size={16} className="mr-2" />
            <span>India-First AI Startup Intelligence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-tight"
          >
            Your AI Startup <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Co-Founder</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Turn your idea into an India-ready business plan in seconds. 
            Deep market insights, competitor analysis, and financial modeling at your fingertips.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 flex items-center shadow-lg hover:shadow-primary/25">
              Analyze My Idea
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-gray-600 hover:text-primary font-medium px-8 py-4 rounded-full transition-colors">
              View Demo
            </button>
          </motion.div>
        </div>

        {/* Map Visual - No scroll effects, static like Acctual */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 relative mx-auto max-w-5xl"
        >
          <HeroMapVisual />
        </motion.div>

        {/* Tagline below Hero Visual - Scroll Linked Animation */}
        <motion.div
          ref={taglineRef}
          style={{ 
            opacity: taglineOpacity, 
            y: taglineY,
            scale: taglineScale
          }}
          className="mt-24 text-center max-w-3xl mx-auto px-4"
        >
          <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed tracking-tight">
            Turning your ideas into launch-ready startup strategies, backed by <span className="text-primary font-semibold">India-first market intelligence</span>.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
