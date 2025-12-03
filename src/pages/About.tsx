import { motion } from 'framer-motion';
import { Rocket, Target, Users, Brain, MapPin, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50/30 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Rocket size={16} />
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building the Co-Founder <br className="hidden md:block" />
              <span className="text-emerald-600">You Never Had</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Democratizing startup expertise for India's next million entrepreneurs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-600 space-y-8"
          >
            {/* Opening */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl -mx-4 sm:mx-0">
              <p className="text-lg leading-relaxed text-gray-200 m-0">
                At AntarangAI, we're not just building another AI tool — we're building the <strong className="text-emerald-400">co-founder you never had</strong>. Starting a business in India can be daunting: navigating compliance, understanding fragmented markets, and crafting a go-to-market strategy without guidance. That's where AntarangAI steps in. We turn your raw startup idea into a <strong className="text-white">launch-ready roadmap within minutes</strong>, powered by a multi-agent AI system trained on real Indian startup data, laws, and founder journeys.
              </p>
            </div>

            {/* India Focus */}
            <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mt-0 mb-2">Culturally & Contextually Indian</h3>
                <p className="m-0 text-gray-600">
                  Whether you're a D2C dreamer from Jaipur, a fintech builder in Bangalore, or exploring agritech solutions in Maharashtra, AntarangAI is designed to be culturally and contextually Indian — from regulatory guidance (think FSSAI, GST, RBI) to regional subsidy insights and competitor heatmaps.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex items-start gap-4 p-6 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mt-0 mb-2">Our Mission</h3>
                <p className="m-0 text-gray-600">
                  Our mission is simple but bold: <strong>democratize startup expertise</strong>. We believe every aspiring founder should have access to high-quality strategy, not just those who can afford consultants or incubators. Our platform offers everything from idea validation, legal checklists, SWOT analysis, and even execution timelines — built to move as fast as you do.
                </p>
              </div>
            </div>

            {/* Team & Tech */}
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mt-0 mb-2">India-Trained Intelligence</h3>
                <p className="m-0 text-gray-600">
                  Built by a team of founders, product thinkers, and AI engineers, AntarangAI is grounded in a powerful India-trained intelligence layer. Our platform uses domain-specific RAG storage fine‑tuned on Indian markets, regulations, and sector insights — ensuring every recommendation is rooted in real, local context rather than generic global data.
                </p>
              </div>
            </div>

            {/* Core Belief */}
            <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mt-0 mb-2">Our Core Belief</h3>
                <p className="m-0 text-gray-600">
                  At our core, we believe technology should simplify entrepreneurship, not complicate it. AntarangAI is here to remove the guesswork, shorten your learning curve, and give you the clarity and confidence to take your idea from zero to launch.
                </p>
              </div>
            </div>

            {/* Closing CTA */}
            <div className="text-center py-12 border-t border-gray-100 mt-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Empowering India's Next Million Entrepreneurs
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                We're here to help you stop dreaming — and start building.
              </p>
              <a 
                href="/" 
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
              >
                <Rocket size={20} />
                Analyze Your Idea Now
              </a>
            </div>

          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

