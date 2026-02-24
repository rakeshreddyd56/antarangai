import { Link } from 'react-router-dom';
import { Home, LifeBuoy, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-wide text-emerald-600 uppercase mb-3">404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Page not found
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            The route you requested does not exist or may have moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <Home size={18} />
              Go Home
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <LifeBuoy size={18} />
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
