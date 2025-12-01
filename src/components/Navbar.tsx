import React from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSecure, setIsSecure] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Check if connection is secure (HTTPS)
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsSecure(window.location.protocol === 'https:');
    }
  }, []);

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    // If on home page, regular anchor to hash works for scroll
    // If on other pages, link to /#hash to go back to home and scroll
    const linkHref = isHome ? href : `/${href}`;
    
    return (
      <a 
        href={linkHref} 
        className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm cursor-pointer"
      >
        {children}
      </a>
    );
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#hero"><span className="block px-3 py-2">Mission</span></NavLink>
            <NavLink href="#features"><span className="block px-3 py-2">Advantages</span></NavLink>
            <NavLink href="#workflow"><span className="block px-3 py-2">How It Works</span></NavLink>
            <a href="#" className="block px-3 py-2 text-primary font-medium">Analyze My Idea</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
