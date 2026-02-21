import React from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ANALYZE_ROUTE = '/contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSecure, setIsSecure] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Check if connection is secure (HTTPS)
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsSecure(window.location.protocol === 'https:');
    }
  }, []);

  const NavLink = ({ href, children, onClick, className }: { href: string, children: React.ReactNode, onClick?: () => void, className?: string }) => {
    // If on home page, regular anchor to hash works for scroll
    // If on other pages, link to /#hash to go back to home and scroll
    const linkHref = isHome ? href : `/${href}`;
    
    return (
      <a 
        href={linkHref} 
        onClick={onClick}
        className={className || "text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm cursor-pointer"}
      >
        {children}
      </a>
    );
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-50 border border-gray-100">
                <img src="/assets/logo-final.png" alt="Antarang Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight font-sans">AntarangAI</span>
            </Link>
            {isSecure && (
              <div className="hidden sm:flex items-center gap-1 ml-2 px-2 py-1 bg-emerald-50 border border-emerald-200 rounded-full">
                <ShieldCheck size={12} className="text-emerald-600" />
                <span className="text-[10px] font-medium text-emerald-700">Secure</span>
              </div>
            )}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#hero">Mission</NavLink>
            <NavLink href="#features">Advantages</NavLink>
            <NavLink href="#workflow">How It Works</NavLink>
            <Link
              to={ANALYZE_ROUTE}
              className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 font-medium text-sm"
            >
              Analyze My Idea
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                initial={false}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 top-0 h-screen w-[80%] max-w-[320px] bg-white z-50 shadow-2xl md:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-50 border border-gray-100">
                    <img src="/assets/logo-final.png" alt="Antarang Logo" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-lg font-bold text-gray-900 tracking-tight">AntarangAI</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <div className="flex flex-col space-y-4">
                  <motion.div variants={itemVariants}>
                    <NavLink 
                      href="#hero" 
                      onClick={() => setIsOpen(false)}
                      className="block group"
                    >
                      <div className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50/50 group-hover:bg-gray-100 transition-all border border-transparent group-hover:border-gray-200">
                        <span className="text-xl font-semibold text-gray-800">Mission</span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm group-hover:scale-110 transition-transform">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-gray-900"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                        </div>
                      </div>
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink 
                      href="#features" 
                      onClick={() => setIsOpen(false)}
                      className="block group"
                    >
                      <div className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50/50 group-hover:bg-gray-100 transition-all border border-transparent group-hover:border-gray-200">
                        <span className="text-xl font-semibold text-gray-800">Advantages</span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm group-hover:scale-110 transition-transform">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-gray-900"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                        </div>
                      </div>
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink 
                      href="#workflow" 
                      onClick={() => setIsOpen(false)}
                      className="block group"
                    >
                      <div className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50/50 group-hover:bg-gray-100 transition-all border border-transparent group-hover:border-gray-200">
                        <span className="text-xl font-semibold text-gray-800">How It Works</span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm group-hover:scale-110 transition-transform">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-gray-900"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                        </div>
                      </div>
                    </NavLink>
                  </motion.div>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-gray-50">
                <motion.div variants={itemVariants}>
                  <Link
                    to={ANALYZE_ROUTE}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-black text-white px-5 py-4 rounded-2xl hover:bg-gray-800 transition-all font-semibold text-base shadow-lg shadow-black/5 active:scale-[0.98]"
                  >
                    Analyze My Idea
                  </Link>
                </motion.div>
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">© 2026 AntarangAI</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
