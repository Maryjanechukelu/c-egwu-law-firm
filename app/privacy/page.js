import React from 'react';
import { Lock } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | C. Egwu Law Firm',
  description: 'Privacy Policy for C. Egwu Law Firm - How we collect, use, and protect your information',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Lock className="w-12 h-12 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600">Last Updated: February 2026</p>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white p-8 md:p-12">
          <div className="prose prose-slate max-w-none">
            
            <div className="mb-8">
              <p className="text-slate-700 leading-relaxed">
                C. Egwu Law Firm is committed to protecting the privacy and personal data of visitors to our website and persons who interact with us through our online platforms.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                This Privacy Policy explains how we collect, use and protect personal information obtained through this website.
              </p>
            </div>

            <div className="space-y-8">
              
              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Information We Collect</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    We may collect personal information that you voluntarily provide to us through this website or by electronic communication, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>your name</li>
                    <li>email address</li>
                    <li>telephone number</li>
                    <li>company name</li>
                    <li>any other information relevant to enquiries made through our site</li>
                  </ul>
                  <p className="mt-4">
                    We may also automatically collect limited technical information such as IP address, browser type and access time for website administration and security purposes.
                  </p>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">How We Use Your Information</h2>
                <div className="space-y-3 text-slate-700 leading-relaxed">
                  <p>We use your personal information solely for legitimate business and professional purposes, including to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>respond to enquiries and requests;</li>
                    <li>communicate with you regarding our services;</li>
                    <li>assess potential engagements;</li>
                    <li>maintain internal records; and</li>
                    <li>comply with legal and regulatory obligations.</li>
                  </ul>
                  <p className="mt-4">
                    We do not sell, rent or trade your personal data.
                  </p>
                </div>
              </div>

              {/* Legal Basis and Compliance */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Legal Basis and Compliance</h2>
                <p className="text-slate-700 leading-relaxed">
                  C. Egwu Law Firm processes personal data in accordance with the Nigeria Data Protection Act 2023 and applicable data protection regulations.
                </p>
                <p className="text-slate-700 leading-relaxed mt-4">
                  By submitting your personal information through this website, you consent to the collection and use of your information in accordance with this Privacy Policy.
                </p>
              </div>

              {/* Disclosure of Information */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Disclosure of Information</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    We may disclose personal information only where required by law, regulation, court order, or where reasonably necessary to protect our legal rights or comply with professional obligations.
                  </p>
                  <p>
                    We do not disclose your personal information to third parties for marketing purposes.
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Data Security</h2>
                <p className="text-slate-700 leading-relaxed">
                  We take reasonable technical and organisational measures to safeguard personal information against unauthorised access, loss, misuse or disclosure.
                </p>
                <p className="text-slate-700 leading-relaxed mt-4">
                  However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Retention of Data */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Retention of Data</h2>
                <p className="text-slate-700 leading-relaxed">
                  Personal information is retained only for as long as reasonably necessary for the purposes for which it was collected, or as required by law or professional obligations.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Your Rights</h2>
                <div className="space-y-3 text-slate-700 leading-relaxed">
                  <p>
                    Subject to applicable law, you may request access to your personal data, request correction of inaccurate information, or request the deletion of your personal data.
                  </p>
                  <p>
                    Requests may be made by contacting the Firm using the details below.
                  </p>
                </div>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Third-Party Links</h2>
                <p className="text-slate-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites.
                </p>
              </div>

              {/* Updates to this Policy */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Updates to this Policy</h2>
                <p className="text-slate-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any updated version will be published on this website and will take effect immediately upon publication.
                </p>
              </div>

            </div>

            {/* Contact Information */}
            <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Questions About Your Privacy?</h3>
              <p className="text-slate-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong className="text-slate-900">Email:</strong> inquires@cegwulawfirm.com</p>
                <p><strong className="text-slate-900">Phone:</strong> +234 707 167 4471</p>
                {/* <p><strong className="text-slate-900">Address:</strong> 7, Oyi River Crescent, Maitama, Abuja, Nigeria</p> */}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
