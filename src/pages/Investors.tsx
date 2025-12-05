import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Rocket, Mail, ArrowRight, BarChart3, Zap, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Investors = () => {
  const stats = [
    { label: 'Target Market Size', value: '₹2.5L Cr', icon: BarChart3 },
    { label: 'Indian Startups (2024)', value: '1.17L+', icon: Rocket },
    { label: 'First-time Founders', value: '68%', icon: Users },
  ];

  const highlights = [
    {
      icon: Target,
      title: 'India-First AI Platform',
      description: 'Purpose-built for the Indian startup ecosystem with local regulations, market data, and cultural context.'
    },
    {
      icon: Zap,
      title: 'Multi-Agent Architecture',
      description: 'Proprietary AI system that delivers comprehensive startup analysis in minutes, not weeks.'
    },
    {
      icon: Globe,
      title: 'Massive TAM',
      description: 'Addressing the needs of millions of aspiring entrepreneurs across India\'s diverse markets.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable SaaS Model',
      description: 'Recurring revenue with high margins and low customer acquisition costs through organic growth.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 font-medium text-sm mb-8 border border-emerald-500/30"
          >
            <TrendingUp size={16} className="mr-2" />
            <span>Investment Opportunity</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight"
          >
            Partner with the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Indian Entrepreneurship</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-12"
          >
            Join us in democratizing startup expertise for India's next million entrepreneurs through AI.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why AntarangAI?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're building the infrastructure layer for India's startup ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-emerald-200/50">
                    <item.icon className="text-emerald-600" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-emerald-50/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-200/50 shadow-lg shadow-emerald-500/10">
              <Mail className="text-emerald-600" size={36} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Build Together
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              We're looking for strategic partners who share our vision of empowering Indian entrepreneurs.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-xl mx-auto">
              <p className="text-gray-600 mb-4">For investor inquiries, please email</p>
              <a 
                href="mailto:founders@antarangai.in"
                className="group inline-flex items-center gap-3 text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <Mail size={28} />
                founders@antarangai.in
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-500 mt-4">
                We typically respond within 24-48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Investors;

