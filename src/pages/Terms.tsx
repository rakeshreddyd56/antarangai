import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              By accessing or using our AI-driven startup co-founder platform (“AntarangAI” or “the Service”), you agree to these Terms of Service. Please read them carefully. If you do not agree, you should discontinue use of the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">Use of the Service</h3>
            <p>
              You must be an adult (18 years or older) to use AntarangAI. You agree to use the Service only for lawful purposes and in compliance with all applicable laws. Do not use the platform to post any content that is illegal, harmful, or infringing of others’ rights. We reserve the right to suspend or terminate accounts that violate these rules or engage in abusive behavior.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">Account Registration</h3>
            <p>
              Some features require creating an account with a valid email or phone number (with OTP verification). You are responsible for maintaining the confidentiality of your login credentials and all activities under your account. Provide accurate information and do not impersonate anyone. If you suspect unauthorized use of your account, notify us immediately.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">User Content and Ideas</h3>
            <p>
              You retain ownership of the startup ideas and content you input into AntarangAI. We do not claim any intellectual property rights over your ideas. By submitting content, you grant us a license to process and store it in order to provide the Service’s analysis. We treat your idea briefs as confidential and do not share them with other users or any third parties beyond what is necessary to operate the Service (such as processing by our AI engine). You represent that you have the right to share the content you submit and that it does not violate any law or anyone’s rights.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">AI-Generated Outputs</h3>
            <p>
              AntarangAI provides multi-dimensional analysis of your startup idea – including market research, competitor analysis, legal checklists (e.g. FSSAI, GST, RBI, SEBI compliance guidance), and execution roadmaps – using GPT-4 and other AI models. However, all outputs are for informational purposes only. The information and guidance our AI provides do not constitute legal, financial, or professional advice. We strive for accuracy and India-specific relevance, but we make no guarantee that the content is complete, up-to-date, or suitable for your specific situation. You should not act or refrain from acting based solely on the AI output without seeking advice from qualified professionals in law, finance, or other relevant fields.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">Payments and Premium Features</h3>
            <p>
              Certain advanced features (such as detailed execution roadmaps or premium guidance) may require a paid subscription or one-time payment. Payments are processed securely via our trusted payment gateway (Razorpay) in INR. All applicable fees and terms for premium services will be presented at the time of purchase. We do not store your credit card or UPI details on our servers – financial data is handled by the payment provider. In case of payment disputes or technical issues, please contact us. Fees are generally non-refundable once services are rendered, except as required by Indian law.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">Third-Party Services</h3>
            <p>
              AntarangAI integrates third-party services to function: e.g., we use OpenAI GPT-4 via OpenRouter to generate the idea analysis, Razorpay to process payments, and SMS/email providers for OTP verification. These providers are vetted, and we share only the necessary data with them (for example, your idea description to the AI model, or your email/phone to the OTP service). By using our Service, you agree to the use of these third-party services as part of our platform. We are not responsible for any third-party outages or breaches, but we strive to ensure they adhere to strict data protection standards.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">Limitations of Liability</h3>
            <p>
              The Service is provided on an “as is” and “as available” basis without warranties of any kind. We do not guarantee that the Service will be uninterrupted, error-free, or secure. To the fullest extent permitted by law, AntarangAI and its team shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, goodwill, or other intangible losses. Our total liability for claims arising from your use of the Service is limited to the amount you paid us (if any) for the use of the Service in the past six months.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">Indemnification</h3>
            <p>
              You agree to indemnify and hold harmless AntarangAI (and its officers, employees, and partners) from any claims, liabilities, damages, losses, or expenses (including legal fees) that arise from your violation of these Terms or your misuse of the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">Governing Law and Dispute Resolution</h3>
            <p>
              These Terms are governed by the laws of India. In the event of any dispute or claim related to the Service or these Terms, you agree to submit to the jurisdiction of competent courts in India. We prefer to amicably resolve any issues—feel free to contact us to discuss any concern.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">Changes to Terms</h3>
            <p>
              We may update these Terms of Service from time to time. If we make material changes, we will notify users via the app or email. By continuing to use the Service after an update, you accept the revised Terms. We encourage you to review the Terms periodically.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;

