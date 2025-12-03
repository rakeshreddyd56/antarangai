import { motion } from 'framer-motion';
import { Rocket, Target, Users, Brain, MapPin, Shield, Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 20 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        </div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-700 font-medium text-sm mb-8"
          >
            <Sparkles size={16} className="mr-2" />
            <span>Our Story</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight"
          >
            Building the Co-Founder <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">You Never Had</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Democratizing startup expertise for India's next million entrepreneurs.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Opening Statement - Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl transform rotate-1 scale-[1.02] opacity-50 blur-sm"></div>
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 md:p-12 rounded-3xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/30"
                >
                  <Rocket className="text-emerald-400" size={28} />
                </motion.div>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                  At AntarangAI, we're not just building another AI tool — we're building the{' '}
                  <strong className="text-emerald-400 font-semibold">co-founder you never had</strong>. 
                  Starting a business in India can be daunting: navigating compliance, understanding 
                  fragmented markets, and crafting a go-to-market strategy without guidance. That's 
                  where AntarangAI steps in. We turn your raw startup idea into a{' '}
                  <strong className="text-white font-semibold">launch-ready roadmap within minutes</strong>, 
                  powered by a multi-agent AI system trained on real Indian startup data, laws, and founder journeys.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            {/* India Focus */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-orange-200/50">
                  <MapPin className="text-orange-600" size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Culturally & Contextually Indian</h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're a D2C dreamer from Jaipur, a fintech builder in Bangalore, or exploring 
                  agritech solutions in Maharashtra, AntarangAI is designed to be culturally and contextually 
                  Indian — from regulatory guidance (think FSSAI, GST, RBI) to regional subsidy insights 
                  and competitor heatmaps.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-emerald-200/50">
                  <Target className="text-emerald-600" size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is simple but bold: <strong className="text-gray-900">democratize startup expertise</strong>. 
                  We believe every aspiring founder should have access to high-quality strategy, not just 
                  those who can afford consultants or incubators. Our platform offers everything from idea 
                  validation, legal checklists, SWOT analysis, and even execution timelines — built to move 
                  as fast as you do.
                </p>
              </div>
            </motion.div>

            {/* Team & Tech */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-blue-200/50">
                  <Brain className="text-blue-600" size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">India-Trained Intelligence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built by a team of founders, product thinkers, and AI engineers, AntarangAI is grounded 
                  in a powerful India-trained intelligence layer. Our platform uses domain-specific RAG 
                  storage fine‑tuned on Indian markets, regulations, and sector insights — ensuring every 
                  recommendation is rooted in real, local context rather than generic global data.
                </p>
              </div>
            </motion.div>

            {/* Core Belief */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-purple-200/50">
                  <Shield className="text-purple-600" size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Core Belief</h3>
                <p className="text-gray-600 leading-relaxed">
                  At our core, we believe technology should simplify entrepreneurship, not complicate it. 
                  AntarangAI is here to remove the guesswork, shorten your learning curve, and give you 
                  the clarity and confidence to take your idea from zero to launch.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Closing CTA */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center py-16 rounded-3xl bg-gradient-to-br from-gray-50 to-emerald-50/30 border border-gray-100 overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200/50 shadow-lg shadow-emerald-500/10"
              >
                <Users className="text-emerald-600" size={36} />
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              >
                Empowering India's Next Million Entrepreneurs
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 max-w-xl mx-auto mb-8 px-4"
              >
                We're here to help you stop dreaming — and start building.
              </motion.p>
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                href="/" 
                className="group inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                <Rocket size={20} />
                Analyze Your Idea Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
