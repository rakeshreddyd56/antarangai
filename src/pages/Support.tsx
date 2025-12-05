import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare, Mail, ChevronDown, Search, BookOpen, Zap, Shield, CreditCard, Users, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    { icon: Zap, label: 'Getting Started', color: 'emerald' },
    { icon: BookOpen, label: 'Features', color: 'blue' },
    { icon: CreditCard, label: 'Billing', color: 'purple' },
    { icon: Shield, label: 'Security', color: 'orange' },
  ];

  const faqs = [
    {
      question: 'What is AntarangAI?',
      answer: 'AntarangAI is an AI-powered platform designed specifically for Indian entrepreneurs. We help you validate your startup idea, understand regulations, analyze competition, and create a comprehensive launch roadmap — all within minutes.'
    },
    {
      question: 'How does the AI analysis work?',
      answer: 'Our multi-agent AI system is trained on Indian startup data, regulations, and market insights. When you submit your idea, multiple specialized AI agents work together to analyze different aspects — market potential, regulatory requirements, competition, and more — to give you a comprehensive analysis.'
    },
    {
      question: 'Is my startup idea kept confidential?',
      answer: 'Absolutely. We take data privacy seriously. Your startup ideas and analysis results are encrypted and never shared with third parties. We follow strict data protection guidelines to ensure your information remains secure.'
    },
    {
      question: 'What kind of startups can use AntarangAI?',
      answer: 'AntarangAI is built for all types of Indian startups — from D2C brands and fintech solutions to agritech, edtech, healthtech, and more. Our platform is sector-agnostic but India-specific, meaning we provide relevant insights regardless of your industry.'
    },
    {
      question: 'How accurate is the regulatory guidance?',
      answer: 'Our regulatory guidance is based on extensive research of Indian laws and regulations including GST, FSSAI, RBI guidelines, and more. While we strive for accuracy, we always recommend consulting with legal professionals for specific compliance matters.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a satisfaction guarantee. If you\'re not happy with your analysis within 7 days of purchase, contact our support team at support@antarangai.in and we\'ll process your refund.'
    },
    {
      question: 'How can I get help with technical issues?',
      answer: 'For any technical issues or account-related problems, please reach out to our support team at support@antarangai.in. We typically respond within 24 hours during business days.'
    },
    {
      question: 'Can I use AntarangAI for multiple startup ideas?',
      answer: 'Yes! Depending on your plan, you can analyze multiple startup ideas. Each analysis is stored in your dashboard for future reference, allowing you to compare and refine your concepts.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-700 font-medium text-sm mb-8"
          >
            <HelpCircle size={16} className="mr-2" />
            <span>Help & Support</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6"
          >
            How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Help You?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Find answers to common questions or reach out to our support team for personalized assistance.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all shadow-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {faqCategories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 bg-${category.color}-100 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <category.icon className={`text-${category.color}-600`} size={24} />
                </div>
                <span className="text-sm font-medium text-gray-700">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`text-gray-400 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                      size={20} 
                    />
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <MessageSquare size={32} />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-blue-100 max-w-xl mx-auto mb-8">
                Our support team is here to help you with any issues or questions. 
                Reach out and we'll get back to you as soon as possible.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/20">
                <p className="text-blue-100 mb-3">For issue resolution, email us at</p>
                <a 
                  href="mailto:support@antarangai.in"
                  className="group inline-flex items-center gap-3 text-xl font-bold text-white hover:text-blue-100 transition-colors"
                >
                  <Mail size={24} />
                  support@antarangai.in
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-blue-200 mt-4">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Support;

