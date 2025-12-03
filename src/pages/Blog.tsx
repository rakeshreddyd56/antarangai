import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Blog posts data
const blogPosts = [
  {
    id: 'validate-startup-idea-india',
    title: 'How to Validate Your Startup Idea in India (Without Spending More Than ₹1,000)',
    excerpt: 'India\'s startup ecosystem has 159,157 DPIIT-recognized startups, but 90% fail within five years. Learn a research-backed framework to test your idea cheaply.',
    date: 'December 3, 2025',
    readTime: '15 min read',
    category: 'Startup Guide',
    featured: true,
    image: '/assets/map-texture.avif'
  }
];

const Blog = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-700 font-medium text-sm mb-6"
          >
            <Sparkles size={16} className="mr-2" />
            <span>Insights & Resources</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6"
          >
            The Antarang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Deep dives into India's startup ecosystem, validation strategies, and AI-powered entrepreneurship.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Featured Post */}
          {blogPosts.filter(p => p.featured).map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <Link to={`/blog/${post.id}`} className="group block">
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/assets/map-texture.avif')] bg-cover bg-center"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10 p-8 md:p-12">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-400 text-lg mb-6 max-w-3xl">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 inline-flex items-center gap-2 text-emerald-400 font-medium group-hover:gap-4 transition-all">
                      Read Full Article
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* More Posts Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.filter(p => !p.featured).map((post) => (
              <motion.div key={post.id} variants={item}>
                <Link to={`/blog/${post.id}`} className="group block">
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3 group-hover:text-emerald-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center py-16 bg-gray-50 rounded-2xl border border-gray-100"
          >
            <TrendingUp className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">More Articles Coming Soon</h3>
            <p className="text-gray-500">We're working on more insights to help Indian founders succeed.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

