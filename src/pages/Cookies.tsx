import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              This Cookie Policy explains how AntarangAI uses cookies and similar tracking technologies on our website or application. By using our Service, you consent to the use of cookies as described in this policy. If you do not agree, you can disable cookies via your browser settings, but note that some parts of our Service may not function properly without cookies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">1. What Are Cookies?</h3>
            <p>
              Cookies are small text files placed on your device (computer or smartphone) when you visit a website. They allow the site to remember your actions or preferences over time. Cookies can be “session” cookies (temporary) or “persistent” cookies (remain until deleted).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">2. How We Use Cookies</h3>
            <p>We use cookies for several essential and functional purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Authentication & Security:</strong> To verify your account and keep you logged in securely.</li>
              <li><strong>Preferences:</strong> To remember your settings (e.g., language, closed notifications).</li>
              <li><strong>Analytics & Performance:</strong> To understand usage patterns and improve our features (e.g., aggregated traffic stats).</li>
              <li><strong>Payment and Integrations:</strong> Third-party services like Razorpay may set cookies to process transactions.</li>
            </ul>
            <p className="mt-2">
              Importantly, we do not use targeting or advertising cookies on AntarangAI at this time. You will not receive third-party ads on our platform.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">3. Cookie Choices and Controls</h3>
            <p>
              You have the right to control cookies:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Browser Settings:</strong> Modify your browser to decline cookies or alert you. Disabling essential cookies may impact login functionality.</li>
              <li><strong>Clearing Cookies:</strong> You can clear cookies from your browser at any time (this logs you out).</li>
              <li><strong>Do Not Track:</strong> We honor “Do Not Track” signals for analytics, though essential cookies remain.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">4. Third-Party Cookies</h3>
            <p>
              Some third-party services (like Razorpay or Google) may set their own cookies. This policy covers AntarangAI only. Please review third-party policies for their specific cookie use.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">5. Updates to this Policy</h3>
            <p>
              We may update our Cookie Policy. We will post changes here. Continued use implies acceptance.
            </p>
            <p>
              If you have questions, please contact us at [Contact Email].
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;

