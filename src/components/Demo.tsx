import { motion, useScroll, useTransform } from 'framer-motion';
import { PieChart, BarChart3, Shield, Zap, Users, Target, AlertTriangle, Calendar, Brain, IndianRupee, Banknote } from 'lucide-react';
import { useRef } from 'react';

const Demo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Experience the Power
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            See how Antarang.AI breaks down complex startup ideas into actionable data.
          </motion.p>
        </div>

        <motion.div
          style={{ scale, opacity }}
          className="bg-gray-800 rounded-2xl p-2 md:p-4 shadow-2xl border border-gray-700 max-w-6xl mx-auto"
        >
          {/* Window Controls */}
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* App Interface */}
          <div className="bg-gray-900 rounded-xl overflow-hidden min-h-[600px] flex flex-col md:flex-row">
            
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-gray-800/50 border-r border-gray-700 p-4 hidden md:block">
              <div className="text-teal-400 font-bold mb-8">Antarang.AI</div>
              <div className="space-y-2">
                <div className="bg-teal-900/30 text-teal-300 p-2 rounded-lg text-sm font-medium">Dashboard</div>
                <div className="text-gray-400 p-2 rounded-lg text-sm hover:bg-gray-800 hover:text-white cursor-pointer">Market Analysis</div>
                <div className="text-gray-400 p-2 rounded-lg text-sm hover:bg-gray-800 hover:text-white cursor-pointer">Financials</div>
                <div className="text-gray-400 p-2 rounded-lg text-sm hover:bg-gray-800 hover:text-white cursor-pointer">Compliance</div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Project: FinTech Neo-Bank</h3>
                  <p className="text-gray-400 text-sm">Last updated: Just now</p>
                </div>
                <button className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Export Report
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                
                {/* Row 1: Overview & Market */}
                <div className="col-span-1 md:col-span-2 bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-teal-400">
                      <Zap size={18} />
                      <h4 className="font-semibold text-sm">SWOT Analysis</h4>
                    </div>
                    <span className="text-xs text-gray-500">Live Update</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-900/20 p-2 rounded border border-green-900/30">
                      <span className="text-green-400 text-[10px] font-bold uppercase block mb-1">Strengths</span>
                      <p className="text-gray-300 text-xs truncate">Tech-first, Low overheads</p>
                    </div>
                    <div className="bg-red-900/20 p-2 rounded border border-red-900/30">
                      <span className="text-red-400 text-[10px] font-bold uppercase block mb-1">Weaknesses</span>
                      <p className="text-gray-300 text-xs truncate">High CAC in Tier 1</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-1 bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                     <div className="flex items-center gap-2 text-blue-400">
                      <PieChart size={18} />
                      <h4 className="font-semibold text-sm">Market</h4>
                    </div>
                    <div className="text-xs font-bold text-white">$45B</div>
                  </div>
                  <div className="flex items-center justify-center h-20">
                    <div className="w-16 h-16 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin-slow"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] text-gray-500">TAM / SAM / SOM</div>
                  </div>
                </div>

                <div className="col-span-1 bg-gray-800 rounded-xl p-4 border border-gray-700">
                   <div className="flex items-center gap-2 mb-3 text-cyan-400">
                    <Brain size={18} />
                    <h4 className="font-semibold text-sm">AI Score</h4>
                  </div>
                   <div className="flex items-center justify-center h-20 relative">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle cx="32" cy="32" r="28" stroke="#374151" strokeWidth="4" fill="transparent" />
                        <circle cx="32" cy="32" r="28" stroke="#06b6d4" strokeWidth="4" fill="transparent" strokeDasharray={175} strokeDashoffset={26} />
                      </svg>
                      <span className="absolute text-lg font-bold text-white">85%</span>
                   </div>
                   <div className="text-center text-[10px] text-gray-400 mt-1">Success Probability</div>
                </div>

                {/* Row 2: Financials & Economics */}
                <div className="col-span-1 md:col-span-2 bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-green-400">
                      <BarChart3 size={18} />
                      <h4 className="font-semibold text-sm">Revenue Projection</h4>
                    </div>
                    <div className="flex gap-2">
                       <span className="text-[10px] bg-gray-700 px-2 py-0.5 rounded text-gray-300">Monthly</span>
                       <span className="text-[10px] text-gray-500">Yearly</span>
                    </div>
                  </div>
                  <div className="h-24 flex items-end gap-1">
                    {[40, 65, 50, 80, 95, 120, 150, 180, 220].map((h, i) => (
                      <div key={i} className="flex-1 bg-green-500/20 hover:bg-green-500/40 transition-colors rounded-t-sm" style={{ height: `${h/2.5}%` }}></div>
                    ))}
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2 bg-gray-800 rounded-xl p-4 border border-gray-700">
                   <div className="flex items-center gap-2 mb-3 text-emerald-400">
                    <Banknote size={18} />
                    <h4 className="font-semibold text-sm">Unit Economics</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                     <div className="bg-gray-700/30 p-2 rounded text-center border border-gray-600/30">
                        <div className="text-[10px] text-gray-400">LTV</div>
                        <div className="text-sm font-bold text-emerald-400">₹4.5k</div>
                     </div>
                     <div className="bg-gray-700/30 p-2 rounded text-center border border-gray-600/30">
                        <div className="text-[10px] text-gray-400">CAC</div>
                        <div className="text-sm font-bold text-red-400">₹1.2k</div>
                     </div>
                     <div className="bg-gray-700/30 p-2 rounded text-center border border-gray-600/30 flex flex-col justify-center">
                        <div className="text-[10px] text-gray-400">Ratio</div>
                        <div className="text-sm font-bold text-white">3.75x</div>
                     </div>
                  </div>
                </div>

                {/* Row 3: Strategy & Risks */}
                <div className="col-span-1 md:col-span-2 bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center gap-2 mb-3 text-purple-400">
                    <Users size={18} />
                    <h4 className="font-semibold text-sm">Competitor Landscape</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs border-b border-gray-700 pb-1">
                      <span className="text-gray-500 w-16">Metric</span>
                      <span className="text-gray-500 text-center flex-1">Comp A</span>
                      <span className="text-gray-500 text-center flex-1">Comp B</span>
                      <span className="text-white font-bold text-center flex-1">You</span>
                    </div>
                    {['Price', 'UX', 'Features'].map((metric, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-gray-400 w-16">{metric}</span>
                        <div className="flex-1 flex justify-center"><div className={`w-16 h-1.5 rounded-full ${i === 0 ? 'bg-red-500/50' : 'bg-green-500/50'}`}></div></div>
                        <div className="flex-1 flex justify-center"><div className={`w-16 h-1.5 rounded-full ${i === 1 ? 'bg-red-500/50' : 'bg-yellow-500/50'}`}></div></div>
                        <div className="flex-1 flex justify-center"><div className="w-16 h-1.5 rounded-full bg-green-500"></div></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-1 bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <div className="flex items-center gap-2 mb-2 text-red-400">
                     <AlertTriangle size={18} />
                     <h4 className="font-semibold text-sm">Risk Radar</h4>
                   </div>
                   <div className="h-20 flex items-center justify-center relative">
                     <div className="absolute w-16 h-16 rounded-full border border-gray-600 opacity-50"></div>
                     <div className="absolute w-10 h-10 rounded-full border border-gray-600 opacity-50"></div>
                     <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full top-4 right-8 animate-pulse"></div>
                     <div className="absolute w-1.5 h-1.5 bg-yellow-500 rounded-full bottom-6 left-8"></div>
                   </div>
                   <div className="flex justify-between text-[9px] text-gray-500 px-2">
                      <span>Reg</span>
                      <span>Mkt</span>
                      <span>Tech</span>
                   </div>
                </div>

                <div className="col-span-1 bg-gray-800 rounded-xl p-4 border border-gray-700 flex flex-col justify-between">
                   <div className="flex items-center gap-2 mb-2 text-indigo-400">
                    <Calendar size={18} />
                    <h4 className="font-semibold text-sm">Timeline</h4>
                  </div>
                  <div className="space-y-2">
                     <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        <div className="text-[10px] text-gray-300 flex-1">Day 7: Validation</div>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                        <div className="text-[10px] text-gray-500 flex-1">Day 30: MVP</div>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                        <div className="text-[10px] text-gray-500 flex-1">Day 90: Growth</div>
                     </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;

