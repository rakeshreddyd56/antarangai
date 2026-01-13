import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, CheckCircle2, Zap, Brain, Target, Users, TrendingUp, FileText, Shield, Rocket, ExternalLink, Linkedin, Twitter, MessageCircle, Link2, Check } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Blog post content
const blogPostsData: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
}> = {
  'validate-startup-idea-india': {
    title: 'How to Validate Your Startup Idea in India (Without Spending More Than ₹1,000)',
    date: 'December 3, 2025',
    readTime: '15 min read',
    category: 'Startup Guide'
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPostsData[slug] : null;
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
        setShowShareOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'text-sky-500',
      bgColor: 'bg-sky-50'
    }
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors mb-8">
              <ArrowLeft size={18} />
              <span>Back to Blog</span>
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 relative" ref={shareRef}>
              <button 
                onClick={() => setShowShareOptions(!showShareOptions)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
                  showShareOptions 
                    ? 'bg-emerald-600 text-white shadow-emerald-200' 
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-emerald-500 hover:text-emerald-600'
                }`}
              >
                <Share2 size={16} />
                Share Article
              </button>

              <AnimatePresence>
                {showShareOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95, x: 20 }}
                    className="absolute bottom-full left-0 mb-3 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 origin-bottom-left"
                  >
                    <div className="grid grid-cols-1 gap-0.5">
                      {shareLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className={`w-8 h-8 ${link.bgColor} ${link.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                              <link.icon size={14} />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{link.name}</span>
                          </div>
                          <ExternalLink size={12} className="text-gray-300 group-hover:text-gray-400" />
                        </a>
                      ))}
                      
                      <button
                        onClick={handleCopyLink}
                        className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors group text-left w-full"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 ${copied ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-600'} rounded-full flex items-center justify-center transition-colors`}>
                            {copied ? <Check size={14} /> : <Link2 size={14} />}
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {copied ? 'Copied!' : 'Copy Link'}
                          </span>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-700">
            
            {/* Opening */}
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              What do you think is better for a new founder: blindly building a product and hoping for the best, or testing the idea thoroughly with minimal spend? It's not a trick question—the right approach can make the difference between success and becoming another statistic.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
              <p className="text-gray-700 m-0">
                <strong className="text-red-700">The Sobering Reality:</strong> India's startup ecosystem has exploded to <strong>159,157 DPIIT-recognized startups</strong> as of January 2025, but <strong>90% of Indian startups fail within five years</strong> (20% by year one, 30% by year two). The top reasons? Funding freeze (41%), compliance fatigue (27%), and talent churn (19%).
              </p>
            </div>

            <p>
              Most of these failures share one common thread: <strong>insufficient validation before launch</strong>. The good news? You can validate your idea in India for under ₹1,000. This guide lays out a simple, research-backed framework to test your idea—without burning cash or time.
            </p>

            <p className="text-gray-500 italic">
              (And yes, in 2025 you even have AI helpers to speed things up. More on that later.)
            </p>

            {/* Section 1 */}
            <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full text-lg font-bold">1</span>
              Define the Problem, Not the Idea
            </h2>

            <p>
              Too many founders pitch a solution instead of articulating the problem. For example: <em>"I want to build an app that connects freelancers to businesses."</em> That's a solution. Instead, start with the problem:
            </p>

            <ul className="space-y-2 my-6">
              <li><strong>What problem</strong> are you solving?</li>
              <li><strong>For whom</strong> (who exactly has this problem)?</li>
              <li><strong>Why now</strong> (what's changing that makes this problem worth tackling today)?</li>
            </ul>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl my-8">
              <p className="text-gray-700 m-0 font-medium">
                <strong className="text-emerald-700">A strong, India-specific problem statement:</strong><br/>
                <em>"Tier-2 city SMB owners struggle to find reliable freelancers for small digital tasks because current marketplaces prioritize big-city clients."</em>
              </p>
            </div>

            <p>
              This one sentence identifies the target segment (Tier-2 SMB owners), the pain point (can't find reliable freelancers), the context (Tier-2 India vs. metro cities), and the reason this problem exists (marketplaces favor big-city demand). Write down your problem statement in this format before doing anything else.
            </p>

            {/* Section 2 */}
            <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full text-lg font-bold">2</span>
              Check Existing Demand Signals (₹0 Spent)
            </h2>

            <p>
              Instead of obsessing over whether your idea is completely "novel," ask: <strong>Are people already searching for solutions to this problem?</strong> If yes, that's a good sign. If not, you might be looking at a non-existent market.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Free Tools to Gauge Demand:</h3>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Tool</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-4 py-3 font-medium">Google Trends (India)</td><td className="px-4 py-3 text-gray-600">See if search interest is rising or falling</td></tr>
                  <tr><td className="px-4 py-3 font-medium">YouTube Search</td><td className="px-4 py-3 text-gray-600">Lots of videos = lots of interest</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Reddit (r/IndiaStartups)</td><td className="px-4 py-3 text-gray-600">Find discussions about frustrations</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Amazon Reviews</td><td className="px-4 py-3 text-gray-600">Read 3★-4★ reviews for complaints</td></tr>
                  <tr><td className="px-4 py-3 font-medium">LinkedIn Search</td><td className="px-4 py-3 text-gray-600">B2B pain points surface here</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl my-8">
              <h4 className="font-semibold text-blue-800 mb-2">Real Example: D2C Skincare</h4>
              <p className="text-gray-700 m-0 text-sm">
                The India sunscreen market was valued at $481–893 million in 2024 and is growing at 6.8–9.1% CAGR through 2030. Google Trends shows rising interest in multi-functional skincare with ingredients like niacinamide, Vitamin C, and hyaluronic acid. This signals strong existing demand for innovative skincare.
              </p>
            </div>

            {/* Section 3 */}
            <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full text-lg font-bold">3</span>
              Identify 3 Close Competitors (₹0)
            </h2>

            <p>
              If no one is doing anything similar in India, it might be a red flag (no market) or a huge opportunity. Either way, you need to know.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">How to Research Competitors for Free:</h3>

            <ul className="space-y-2 my-6">
              <li><strong>Google Search:</strong> Search keywords in English, Hindi, or regional languages</li>
              <li><strong>SimilarWeb (free):</strong> Get traffic, audience geography, and engagement snapshots</li>
              <li><strong>App Store/Play Store:</strong> Check rankings and read user reviews</li>
              <li><strong>Social Media:</strong> Look at competitor pages and customer comments</li>
            </ul>

            <p>
              Make a simple table comparing at least 3 competitors on: Target Audience, Pricing/Revenue Model, Customer Praise, Customer Complaints, and Gap in India.
            </p>

            {/* Section 4 */}
            <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full text-lg font-bold">4</span>
              Talk to 5 Potential Customers (₹0)
            </h2>

            <p>
              Nothing beats talking to real people who have the problem you're trying to solve. <strong>72% of Indian consumers expect personalized interactions</strong>—which means you need to understand them on a personal level.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-8">
              <h4 className="font-semibold text-yellow-800 mb-3">The Only 3 Questions You Really Need:</h4>
              <ol className="space-y-3 m-0 text-gray-700">
                <li><strong>"What's the hardest part about [the problem] for you?"</strong> – Get them to open up about their pain.</li>
                <li><strong>"How are you currently dealing with it?"</strong> – This tells you who your real competition is.</li>
                <li><strong>"If a new solution could fix this, what would you pay?"</strong> – Gauges both interest and value.</li>
              </ol>
            </div>

            <p className="text-red-600 font-medium">
              <strong>Questions to Avoid:</strong> "Would you use my product if I built it?" and "Do you think my idea is good?" – People say yes to be polite.
            </p>

            {/* Section 5 */}
            <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full text-lg font-bold">5</span>
              Calculate an India-Specific Feasibility Score (₹0)
            </h2>

            <p>
              Rate your idea 1 to 5 on each factor below, where 1 is poor and 5 is excellent:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Criteria</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">1 (Poor)</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">5 (Excellent)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-4 py-3 font-medium">Market Size (TAM)</td><td className="px-4 py-3 text-gray-600">Very niche</td><td className="px-4 py-3 text-gray-600">Huge market</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Regulatory Hurdles</td><td className="px-4 py-3 text-gray-600">Heavy (RBI, FSSAI)</td><td className="px-4 py-3 text-gray-600">Little/no regulation</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Competition</td><td className="px-4 py-3 text-gray-600">Very crowded</td><td className="px-4 py-3 text-gray-600">White space</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Customer Acquisition Cost</td><td className="px-4 py-3 text-gray-600">High CAC</td><td className="px-4 py-3 text-gray-600">Low/organic</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Operational Complexity</td><td className="px-4 py-3 text-gray-600">Logistics heavy</td><td className="px-4 py-3 text-gray-600">Easily scalable</td></tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Score 18+ out of 25?</strong> Your idea looks promising. <strong>Below 15?</strong> Identify the weak areas and address them.
            </p>

            {/* Section 6 */}
            <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full text-lg font-bold">6</span>
              (Optional) Run a ₹1,000 Market Test
            </h2>

            <p>
              If you've scored well on the steps above, get real-world signal with a small spend:
            </p>

            <ul className="space-y-2 my-6">
              <li><strong>Create a Landing Page:</strong> Use Carrd (free) with a clear CTA like "Sign up for early access"</li>
              <li><strong>Run Small Ads:</strong> Spend ₹500 on Facebook/Instagram ads targeted to your audience</li>
              <li><strong>Leverage WhatsApp:</strong> 80% of Indian adults use WhatsApp with 98% open rates (vs 20% for email)</li>
            </ul>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl my-8">
              <h4 className="font-semibold text-purple-800 mb-2">What to Measure:</h4>
              <ul className="space-y-1 m-0 text-gray-700 text-sm">
                <li><strong>Click-through Rate (CTR):</strong> Good = 1-3% on cold audiences</li>
                <li><strong>Conversion Rate:</strong> 5-10% for cold audience is encouraging</li>
                <li><strong>Responses:</strong> Quality of WhatsApp replies and feedback</li>
              </ul>
            </div>

            {/* Section 7 */}
            <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full text-lg font-bold">7</span>
              Synthesize Your Findings
            </h2>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl my-8">
              <h4 className="font-semibold text-gray-800 mb-4">Validation Checklist:</h4>
              <ul className="space-y-3 m-0">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} /><span><strong>Clear Problem Statement:</strong> "[Target segment] struggles with [pain point] because [context]."</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} /><span><strong>Evidence of Demand:</strong> Google searches, forum discussions, or market stats.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} /><span><strong>Competitive Gap:</strong> What you can do better or differently.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} /><span><strong>Real People Feedback:</strong> At least a few said "Yes, this is a real pain."</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} /><span><strong>Feasible on Paper:</strong> Sizable market, path to reaching customers.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} /><span><strong>Positive Market Test:</strong> Encouraging results from small experiment.</span></li>
              </ul>
            </div>

            {/* Enhanced Bottom Line with AntarangAI */}
            <div className="my-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30">
                      <Zap className="text-emerald-400" size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold m-0 text-white">The Bottom Line: Automate This With AI</h2>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-8">
                    Validating your startup idea in India doesn't require a big budget. It requires curiosity, persistence, and a willingness to listen to the market. But what if you could <strong className="text-emerald-400">automate 80% of this research in minutes</strong>?
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-6">How AntarangAI Automates Each Step:</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="text-orange-400" size={18} />
                        <span className="font-semibold text-white text-sm">Problem Definition</span>
                      </div>
                      <p className="text-gray-400 text-sm m-0">Our AI helps refine your problem statement using India-specific market context and founder patterns.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="text-blue-400" size={18} />
                        <span className="font-semibold text-white text-sm">Demand Signals</span>
                      </div>
                      <p className="text-gray-400 text-sm m-0">Instant TAM/SAM/SOM calculations, market size data, and trend analysis for Indian markets.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="text-purple-400" size={18} />
                        <span className="font-semibold text-white text-sm">Competitor Analysis</span>
                      </div>
                      <p className="text-gray-400 text-sm m-0">Auto-generated competitor breakdown with gaps, pricing models, and differentiation opportunities.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="text-cyan-400" size={18} />
                        <span className="font-semibold text-white text-sm">Customer Interview Prep</span>
                      </div>
                      <p className="text-gray-400 text-sm m-0">AI-generated interview scripts, persona profiles, and key questions tailored to your idea.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="text-yellow-400" size={18} />
                        <span className="font-semibold text-white text-sm">Feasibility Scoring</span>
                      </div>
                      <p className="text-gray-400 text-sm m-0">Automated scoring across 20+ India-specific criteria including regulatory complexity (FSSAI, GST, RBI).</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="text-emerald-400" size={18} />
                        <span className="font-semibold text-white text-sm">Compliance Roadmap</span>
                      </div>
                      <p className="text-gray-400 text-sm m-0">Complete regulatory checklist with timelines, costs, and state-specific requirements.</p>
                    </div>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-8">
                    <p className="text-gray-300 m-0">
                      <strong className="text-emerald-400">Built for India:</strong> Our multi-agent AI system is trained on real Indian startup data, regulations, and founder journeys. Every recommendation is rooted in local context—not generic global data. From Tier-2 city market dynamics to state-wise subsidy programs, AntarangAI understands the nuances that matter.
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-400 mb-6">
                      In an environment where 90% of startups fail and funding dropped 25% in H1 2025, validation isn't optional—it's survival. The founders who validate fast, iterate faster, and use every tool at their disposal are the ones who thrive.
                    </p>
                    
                    <p className="text-xl font-semibold text-white mb-6">
                      So, what's better? Burning ₹10 lakhs on an untested idea, or letting AI validate it in minutes?
                    </p>

                    <Link 
                      to="/"
                      className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 no-underline"
                    >
                      <Rocket size={20} />
                      Try AntarangAI Free
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 italic">
              Good luck, and happy validating!
            </p>

            {/* Sources */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sources</h3>
              <ol className="text-sm text-gray-500 space-y-2 list-decimal pl-5">
                <li>Singh, Manoj. "India Startup Closures 2025: 30% Surge." TICE News, 26 Oct 2025</li>
                <li>GrowthList. "Startup Failure Statistics"</li>
                <li>Press Information Bureau. "DPIIT-Recognized Startups Update"</li>
                <li>Financial Express. "The Great Indian Shutdown: 11,223 Start-ups Fold in 2025"</li>
                <li>Deutsche Consulting. "India's Startup Reckoning 2025"</li>
                <li>Grand View Research. "India Sunscreen Market Report"</li>
                <li>DeepMarket Insights. "Niacinamide Beauty Products Market"</li>
                <li>Atom Media Labs. "Why WhatsApp Marketing Works for Indian Businesses"</li>
                <li>Inc42. "State of Indian Startup Ecosystem Report 2024"</li>
              </ol>
            </div>

          </div>
        </motion.div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;

