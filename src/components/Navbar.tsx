import React from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

  const NavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => {
    // If on home page, regular anchor to hash works for scroll
    // If on other pages, link to /#hash to go back to home and scroll
    const linkHref = isHome ? href : `/${href}`;
    
    return (
      <a 
        href={linkHref} 
        onClick={onClick}
        className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm cursor-pointer"
      >
        {children}
      </a>
    );
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
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
            <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 font-medium text-sm">
              Analyze My Idea
            </button>
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden"
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <motion.div variants={itemVariants}>
                  <NavLink href="#hero" onClick={() => setIsOpen(false)}>
                    <span className="block px-3 py-3 text-base border-b border-gray-50">Mission</span>
                  </NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink href="#features" onClick={() => setIsOpen(false)}>
                    <span className="block px-3 py-3 text-base border-b border-gray-50">Advantages</span>
                  </NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink href="#workflow" onClick={() => setIsOpen(false)}>
                    <span className="block px-3 py-3 text-base border-b border-gray-50">How It Works</span>
                  </NavLink>
                </motion.div>
                <motion.div variants={itemVariants} className="pt-4">
                  <button className="w-full bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all font-medium text-base">
                    Analyze My Idea
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
