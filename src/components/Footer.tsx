import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-primary mb-4 block">Antarang.AI</Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Empowering Indian entrepreneurs with AI-driven insights to build world-class startups.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail size={16} className="text-primary" />
              <span>Have questions? Reach out to us at</span>
            </div>
            <a 
              href="mailto:hello@antarangai.in" 
              className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
            >
              hello@antarangai.in
            </a>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/investors" className="hover:text-primary transition-colors">Investors</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/support" className="hover:text-primary transition-colors">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/legal" className="hover:text-primary transition-colors">Legal Disclaimer</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Antarang.AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://x.com/antarangai?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/antarang-ai-94951b393?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/antarangai_?igsh=dGc2MTZkdTJseXJj&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
