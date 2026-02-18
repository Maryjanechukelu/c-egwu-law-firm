import React from 'react';
import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Terms of Use | C. Egwu Law Firm',
  description: 'Terms of Use for C. Egwu Law Firm website and services',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Terms of Use
          </h1>
          <p className="text-slate-600">Last Updated: February 2026</p>
        </div>

        {/* Terms Content */}
        <div className="bg-white p-8 md:p-12">
          <div className="prose prose-slate max-w-none">
            
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                The information contained on this website is provided by C. Egwu Law Firm (the &quot;Firm&quot;) for general informational purposes only and does not constitute legal advice, legal opinion or professional advice of any kind.
              </p>

              <p>
                Use of this website, including the submission of any enquiry or message through this website, does not create a lawyer–client relationship between you and the Firm. A lawyer–client relationship shall only arise upon the Firm&apos;s express written confirmation of engagement.
              </p>

              <p>
                While reasonable care is taken to ensure that the information published on this website is accurate and current, C. Egwu Law Firm makes no representation or warranty, whether express or implied, as to the accuracy, completeness or suitability of any information contained on this website. You should not rely on any information on this website without obtaining specific legal advice relating to your particular circumstances.
              </p>

              <p>
                Any information sent to the Firm through this website or by email prior to a formal engagement may not be treated as confidential.
              </p>

              <p>
                This website may contain links to third-party websites. C. Egwu Law Firm does not control, endorse or accept responsibility for the content, accuracy or security of such third-party websites.
              </p>

              <p>
                To the fullest extent permitted by law, C. Egwu Law Firm shall not be liable for any loss or damage arising from your use of, or reliance on, any information contained on this website.
              </p>

              <p>
                This website is operated in accordance with the laws of the Federal Republic of Nigeria and the applicable Rules of Professional Conduct for Legal Practitioners.
              </p>

              <p>
                By accessing and using this website, you acknowledge and accept the terms of this disclaimer.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Questions About These Terms?</h3>
              <p className="text-slate-700 mb-4">
                If you have any questions or concerns regarding these Terms of Use, please contact us:
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
