import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Your privacy is important to us. This Privacy Policy explains what information AntarangAI collects, how we use it, and your rights regarding your personal data. We are committed to protecting your data and comply with applicable Indian data protection laws, including the Information Technology Act and the Digital Personal Data Protection Act, 2023.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">1. Information We Collect</h3>
            <p>We only collect information that is necessary to provide and improve our Service:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Account Information:</strong> When you register, we collect personal identifiers such as your name (optional), email address and/or phone number for account creation and unique login. If you sign in via Google or Apple, we receive your basic profile info (like email and name) from those providers. We also securely store authentication credentials and your user settings.</li>
              <li><strong>Idea Content:</strong> When you use AntarangAI’s analysis features, we collect the details of your startup idea that you provide – e.g. the title, description, industry, stage, budget range, and target region for your idea. We also store the AI-generated analysis results for your idea. Your idea inputs and the AI outputs are treated as confidential user content.</li>
              <li><strong>Usage Data:</strong> We automatically collect certain technical information when you use the app, such as log data, device type, browser type, IP address, and timestamps to monitor usage and debug issues.</li>
              <li><strong>Payment Information:</strong> If you upgrade to premium features, our payment processor (Razorpay) will collect your payment details. We do not see or store your full financial information.</li>
              <li><strong>Communication Data:</strong> If you contact us for support, we collect the information you provide to assist you.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">2. How We Use Your Information</h3>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide the Service and generate AI analysis results.</li>
              <li>Improve and develop the service by analyzing aggregated usage patterns.</li>
              <li>Process premium subscriptions and manage accounts.</li>
              <li>Communicate regarding service updates or support.</li>
              <li>Comply with legal obligations and enforce security.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">3. How We Share Your Data</h3>
            <p>We do not sell or rent your personal data. We share data only with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Service Providers:</strong> AI processors (OpenAI via OpenRouter), Payment processors (Razorpay), SMS/Email providers, and Cloud hosting providers. All providers are vetted and bound by data protection contracts.</li>
              <li><strong>Legal Requirements:</strong> If required by Indian law or valid government requests.</li>
              <li><strong>Business Transfers:</strong> In case of a merger or acquisition, ensuring new owners honor this policy.</li>
              <li><strong>Protection of Rights:</strong> To enforce terms or protect safety and rights.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">4. Data Security</h3>
            <p>
              We implement industry-standard security measures including encryption in transit (HTTPS), password hashing, and access controls. While we strive to protect your data, no method is 100% secure.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">5. Data Retention</h3>
            <p>
              We retain your personal information as long as your account exists. If you delete your account, we erase or anonymize your data, except where legally required to be retained.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">6. Your Rights and Choices</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Access and Correction:</strong> You can update your profile settings directly.</li>
              <li><strong>Deletion:</strong> You may request deletion of your personal data or account.</li>
              <li><strong>Consent Withdrawal:</strong> You can withdraw consent for marketing or optional processing at any time.</li>
              <li><strong>Grievance and Complaints:</strong> Contact our Grievance Officer for any concerns.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">7. Cookies and Tracking</h3>
            <p>
              We use cookies for essential and functional purposes. See our separate Cookie Policy for details.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">8. Children’s Privacy</h3>
            <p>
              AntarangAI is not intended for children under 18. We do not knowingly collect data from minors.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">9. International Data Transfers</h3>
            <p>
              We primarily store data in India. Some third-party providers may process data globally with adequate safeguards in place.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">10. Updates to This Policy</h3>
            <p>
              We may revise this Privacy Policy. Continued use after changes implies consent.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">11. Contact Us</h3>
            <p>
              For questions, contact our Grievance Officer/Privacy Officer at: [Contact Email].
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;

