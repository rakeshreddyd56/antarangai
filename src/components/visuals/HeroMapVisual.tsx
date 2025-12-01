import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Target, AlertCircle, Users, Layers, Rocket, BadgeIndianRupee, ScrollText } from 'lucide-react';

const HeroMapVisual = () => {
  const { scrollY } = useScroll();
  
  // Detect if mobile using window width (basic check for hydration safe rendering could be improved but effective for visual tweaks)
  // Ideally use a hook, but for visual logic inside framer motion transforms, we often need conditions.
  // Since we want to keep web version EXACTLY same, we will use media queries in className for container
  // and conditional logic for transform ranges if possible, or just use CSS transform: scale() on a parent wrapper for mobile.

  // Strategy: Keep all "web" animations as is. Wrap the entire visual in a container that scales it down significantly on mobile.
  // This ensures the relative movements (pixels) work visually even if scaled down.
  
  // Animation range: 0 to 400px scroll
  const range = [0, 400];

  // --- Left Board (Founder) Animations ---
  const leftCardRotate = useTransform(scrollY, range, [-12, -2]);
  const leftCardX = useTransform(scrollY, range, [-50, 0]);

  // Sticky Note Cluster
  const stickyClusterX = useTransform(scrollY, range, [-350, 0]);
  const stickyClusterY = useTransform(scrollY, range, [-450, 0]);
  const stickyClusterRotate = useTransform(scrollY, range, [-45, -5]);
  const stickyClusterScale = useTransform(scrollY, range, [1.5, 1]);

  // "Struggles" Floating Badges
  const struggle1X = useTransform(scrollY, range, [-400, 0]);
  const struggle1Y = useTransform(scrollY, range, [-200, 0]);
  
  const struggle2X = useTransform(scrollY, range, [-300, 0]);
  const struggle2Y = useTransform(scrollY, range, [100, 0]);

  // Budget Badge (Coin)
  const budgetX = useTransform(scrollY, range, [-450, 0]);
  const budgetY = useTransform(scrollY, range, [-300, 0]);
  const budgetRotate = useTransform(scrollY, range, [-180, 0]);

  // Orange Pin
  const pinY = useTransform(scrollY, range, [-500, 0]);
  const pinX = useTransform(scrollY, range, [-150, 0]);
  const pinScale = useTransform(scrollY, range, [2.5, 1]);

  // Founder Card
  const founderY = useTransform(scrollY, range, [-200, 0]);
  const founderX = useTransform(scrollY, range, [-200, 0]);
  const founderScale = useTransform(scrollY, range, [0.8, 1]);
  const founderOpacity = useTransform(scrollY, [0, 100], [0, 1]);


  // --- Right Board (Antarang AI) Animations ---
  const rightCardRotate = useTransform(scrollY, range, [12, 2]);
  const rightCardX = useTransform(scrollY, range, [50, 0]);

  // AI Main Card
  const aiCardX = useTransform(scrollY, range, [450, 0]);
  const aiCardY = useTransform(scrollY, range, [-300, 0]);
  const aiCardScale = useTransform(scrollY, range, [0.9, 1]);
  
  // Right Panel Badges - Aligned positions
  const gtmX = useTransform(scrollY, range, [400, 0]);
  const gtmY = useTransform(scrollY, range, [-200, 0]);

  const competitorX = useTransform(scrollY, range, [350, 0]);
  const competitorY = useTransform(scrollY, range, [100, 0]);

  const regX = useTransform(scrollY, range, [200, 0]);
  const regY = useTransform(scrollY, range, [250, 0]);

  const mvpX = useTransform(scrollY, range, [100, 0]);
  const mvpY = useTransform(scrollY, range, [300, 0]);

  const fundingX = useTransform(scrollY, range, [400, 0]);
  const fundingY = useTransform(scrollY, range, [0, 0]);

  // Ready to Launch Pill
  const pillY = useTransform(scrollY, range, [-150, 0]);
  const pillX = useTransform(scrollY, range, [250, 0]);
  const pillScale = useTransform(scrollY, range, [0.5, 1]);

  // Connecting Line
  const lineProgress = useTransform(scrollY, [100, 400], [0, 1]);
  const lineOpacity = useTransform(scrollY, [50, 150], [0, 1]);

  return (
    <div className="relative w-full h-[950px] md:h-[750px] flex items-center justify-center overflow-hidden md:overflow-visible">
      <div className="relative w-full max-w-6xl h-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 scale-[0.8] md:scale-100 origin-top md:origin-center pt-16 md:pt-0">
        
        {/* Mobile Connecting Arrow (Simple Vertical) */}
        <svg className="absolute w-full h-full z-50 pointer-events-none md:hidden overflow-visible" viewBox="0 0 400 950">
           <defs>
             <marker id="arrowhead-mobile" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
             </marker>
           </defs>
           <path 
             d="M 200 480 L 200 540" 
             stroke="#3b82f6" 
             strokeWidth="4" 
             strokeDasharray="8 8"
             markerEnd="url(#arrowhead-mobile)"
             opacity="0.6"
           />
        </svg>

        {/* Connecting Line - High Z-Index for 3D overlap effect (Desktop Only) */}
        <svg className="absolute inset-0 w-full h-full z-50 pointer-events-none overflow-visible hidden md:block" viewBox="0 0 1200 750">
          <defs>
            <filter id="line-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="4" dy="8" stdDeviation="4" floodColor="rgba(0,0,0,0.2)" />
            </filter>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
            </marker>
          </defs>
          
          {/* Path Calculation: 
              Left Board Center approx x=350. Founder Card Top-Right approx x=500, y=550?
              Right Board Center approx x=850. Antarang Card Top-Left approx x=650, y=250?
              
              Let's adjust coordinates relative to the 1200x750 viewBox.
              Left Board is roughly centered around x=360 (if total width is 1200 and gap is 80, boards are 380 & 420).
              Center = 600.
              Half gap = 40.
              Left Board End = 560. Start = 180.
              Right Board Start = 640. End = 1060.
              
              Founder Card (Bottom of Left Board): 
              x range: 180+24 to 560-24. Center ~ 370.
              y range: ~530 (bottom). Top of card ~ 450.
              Target Start Point (Top Right of Founder Card): x=500, y=480.
              
              Antarang Card (Top of Right Board):
              x range: 640+24 to 1060-24. Center ~ 850.
              y range: Top ~ 140. Center ~ 200.
              Target End Point (Top Left of Antarang Card): x=700, y=220.
          */}
          
          <path
            d="M 480 480 C 550 400, 600 220, 720 220"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="4"
            strokeDasharray="12 12"
            strokeLinecap="round"
            className="opacity-0" 
          />
          <motion.path
            d="M 480 480 C 550 400, 600 220, 720 220"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="5"
            strokeLinecap="round"
            markerEnd="url(#arrowhead)"
            filter="url(#line-shadow)"
            style={{ pathLength: lineProgress, opacity: lineOpacity }}
          />
        </svg>

        {/* --- LEFT BOARD: Founder Submission --- */}
        <motion.div 
          style={{ rotate: leftCardRotate, x: leftCardX }}
          className="relative w-[380px] h-[520px] bg-[#f4f1ea] rounded-xl shadow-2xl z-10 overflow-visible border border-[#e5e0d8]"
        >
          {/* Map Background */}
          <div className="absolute inset-0 rounded-xl overflow-hidden opacity-20 mix-blend-multiply grayscale">
             <div className="absolute inset-0 bg-[url('/assets/map-texture.avif')] bg-cover bg-center"></div>
             <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#71717a 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </div>

          {/* Asset: Sticky Note Cluster */}
          <motion.div 
            style={{ x: stickyClusterX, y: stickyClusterY, rotate: stickyClusterRotate, scale: stickyClusterScale }}
            className="absolute top-8 left-8 z-30"
          >
             <div className="relative">
                <div className="absolute -top-2 -left-4 w-20 h-20 bg-yellow-200 shadow-md p-2 flex items-center justify-center text-center transform -rotate-12 border border-yellow-300/50">
                   <span className="font-handwriting text-xs text-yellow-900 font-bold">User?</span>
                </div>
                <div className="absolute top-2 left-16 w-20 h-20 bg-pink-200 shadow-md p-2 flex items-center justify-center text-center transform rotate-12 border border-pink-300/50">
                   <span className="font-handwriting text-xs text-pink-900 font-bold">Problem?</span>
                </div>
                <div className="relative top-6 left-2 w-28 h-28 bg-yellow-300 shadow-lg p-3 flex items-center justify-center text-center transform -rotate-3 border border-yellow-400/50">
                   <div className="text-yellow-900 font-handwriting font-bold text-sm leading-tight">
                     Idea:<br/>FinTech App
                   </div>
                   <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-yellow-400/50 rotate-1"></div>
                </div>
             </div>
          </motion.div>

          {/* Asset: Orange Pin */}
          <motion.img 
            src="/assets/pin.png"
            alt="Pin"
            style={{ y: pinY, x: pinX, scale: pinScale }}
            className="absolute top-12 right-10 w-10 z-30 drop-shadow-md"
          />

          {/* Asset: Budget Badge */}
          <motion.div 
            style={{ x: budgetX, y: budgetY, rotate: budgetRotate }}
            className="absolute top-56 left-6 w-16 h-16 bg-orange-100 rounded-full shadow-lg flex flex-col items-center justify-center border-2 border-orange-200 z-20"
          >
            <span className="text-orange-600 font-bold text-xs">Budget</span>
            <div className="text-orange-600 text-xl font-bold">₹5L</div>
          </motion.div>

          {/* Asset: Struggle Badges */}
          <motion.div style={{ x: struggle1X, y: struggle1Y }} className="absolute top-40 right-6 bg-red-50 px-2 py-1 rounded-md shadow border border-red-100 transform rotate-6 z-20">
             <div className="flex items-center gap-1 text-red-500 text-[10px] font-medium"><AlertCircle size={10}/> No Plan</div>
          </motion.div>
          <motion.div style={{ x: struggle2X, y: struggle2Y }} className="absolute top-64 right-8 bg-red-50 px-2 py-1 rounded-md shadow border border-red-100 transform -rotate-3 z-20">
             <div className="flex items-center gap-1 text-red-500 text-[10px] font-medium"><AlertCircle size={10}/> Compliance?</div>
          </motion.div>

          {/* Asset: Founder Card */}
          <motion.div 
            style={{ y: founderY, x: founderX, opacity: founderOpacity, scale: founderScale }}
            className="absolute bottom-16 left-6 right-6 z-30"
          >
             <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-pink-100 border border-gray-200 shadow-sm overflow-hidden flex-shrink-0">
                  <img src="/assets/memoji.png" alt="Prashant" className="w-full h-full object-cover" />
                </div>
                <div>
                   <div className="text-xs font-bold text-gray-900">Prashant (Founder)</div>
                   <div className="text-[10px] text-gray-500 leading-tight mt-1">Submitted my fintech idea and got a full India-specific startup blueprint within seconds.</div>
                </div>
             </div>
          </motion.div>
        </motion.div>


        {/* --- RIGHT BOARD: Antarang AI Output --- */}
        <motion.div 
          style={{ rotate: rightCardRotate, x: rightCardX }}
          className="relative w-[420px] h-[540px] bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-2xl z-10 overflow-visible border border-blue-100"
        >
          {/* Clean Blue Grid Background */}
          <div className="absolute inset-0 rounded-xl overflow-hidden opacity-30">
             <div className="absolute inset-0 bg-white"></div>
             <div className="absolute inset-0" 
                  style={{ 
                    backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)', 
                    backgroundSize: '30px 30px' 
                  }}>
             </div>
             <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 to-transparent"></div>
          </div>

          {/* Asset: AI Robot */}
          <div className="absolute top-6 right-6 w-16 h-16 z-30">
             <div className="w-full h-full rounded-full bg-white border-2 border-blue-100 shadow-md flex items-center justify-center p-2 overflow-hidden">
                <img src="/assets/logo-final.png" alt="AI Robot" className="w-full h-full object-contain" />
             </div>
             <motion.div 
               style={{ scale: 1 }}
               className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm text-white"
             >
                <ShieldCheck size={12} strokeWidth={3} />
             </motion.div>
          </div>

          {/* Asset: Main Output Card */}
          <motion.div 
            style={{ x: aiCardX, y: aiCardY, scale: aiCardScale }}
            className="absolute top-24 left-6 right-6 z-20"
          >
             <div className="bg-white p-5 rounded-2xl shadow-xl border border-blue-50/50 relative">
                <div className="text-center">
                   <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-sm font-bold text-gray-900">Antarang AI</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   </div>
                   <div className="text-xs text-gray-500 leading-relaxed px-2">Generated market analysis, competitor breakdown, compliance roadmap & full GTM strategy.</div>
                </div>
             </div>
          </motion.div>

          {/* Right Panel Badges - Organized Grid Layout */}
          
          {/* GTM Strategy: Left Side, below main card */}
          <motion.div style={{ x: gtmX, y: gtmY }} className="absolute top-64 left-4 bg-white px-3 py-2 rounded-full shadow-md flex items-center gap-2 z-30 border border-blue-100">
             <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Target size={12}/></div>
             <span className="text-[10px] font-medium text-gray-700 whitespace-nowrap">GTM Strategy</span>
          </motion.div>

          {/* Competitor Gaps: Right Side, below main card */}
          <motion.div style={{ x: competitorX, y: competitorY }} className="absolute top-64 right-4 bg-white px-3 py-2 rounded-full shadow-md flex items-center gap-2 z-30 border border-purple-100">
             <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-purple-600"><Users size={12}/></div>
             <span className="text-[10px] font-medium text-gray-700 whitespace-nowrap">Competitor Gaps</span>
          </motion.div>

          {/* MVP Blueprint: Left Side, lower */}
          <motion.div style={{ x: mvpX, y: mvpY }} className="absolute top-80 left-4 bg-white px-3 py-2 rounded-full shadow-md flex items-center gap-2 z-30 border border-indigo-100">
             <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600"><Layers size={12}/></div>
             <span className="text-[10px] font-medium text-gray-700 whitespace-nowrap">MVP Blueprint</span>
          </motion.div>

          {/* Regulatory: Center/Right, lower */}
          <motion.div style={{ x: regX, y: regY }} className="absolute top-80 right-4 bg-white px-3 py-2 rounded-full shadow-md flex items-center gap-2 z-30 border border-yellow-100">
             <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600"><ScrollText size={12}/></div>
             <span className="text-[10px] font-medium text-gray-700 whitespace-nowrap">3 Reg. Steps</span>
          </motion.div>

          {/* Funding Readiness: Right Side, near bottom */}
          <motion.div style={{ x: fundingX, y: fundingY }} className="absolute bottom-32 right-4 bg-white px-3 py-2 rounded-full shadow-md flex items-center gap-2 z-20 border border-emerald-100 opacity-90">
             <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600"><BadgeIndianRupee size={12}/></div>
             <span className="text-[10px] font-medium text-gray-700 whitespace-nowrap">Funding Ready</span>
          </motion.div>

          {/* Asset: Ready to Launch Pill */}
          <motion.div 
            style={{ y: pillY, x: pillX, scale: pillScale }}
            className="absolute bottom-8 right-8 z-30"
          >
             <div className="bg-emerald-500 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer ring-4 ring-emerald-100">
                <Rocket size={18} /> 
                <span className="text-sm">Ready to Launch</span>
             </div>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
};

export default HeroMapVisual;

