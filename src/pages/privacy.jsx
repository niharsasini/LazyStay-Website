import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-neutral-100 py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-14 border border-neutral-200">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            At{" "}
            <span className="font-semibold text-neutral-900">
              Lazystay Hospitality
            </span>
            , your privacy is important to us. We are committed to protecting
            your personal information and ensuring transparency in how we
            collect, use, and safeguard your data across all our hotel services
            and digital platforms.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-neutral-700 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-amber-600">
              <li>Full name, contact number, email address</li>
              <li>Booking details and stay preferences</li>
              <li>Government-issued ID details (as required by law)</li>
              <li>Payment details processed via secure third-party gateways</li>
              <li>Website usage data, IP address, and browser details</li>
            </ul>
            <p className="mt-4">
              We do not store your credit/debit card information. All
              transactions are encrypted and securely handled by certified
              payment providers.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-amber-600">
              <li>Confirming and managing room bookings</li>
              <li>Providing guest services and customer support</li>
              <li>Improving hotel facilities and website experience</li>
              <li>Sending booking confirmations and important updates</li>
              <li>Sharing promotional offers (only with your consent)</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              3. Information Sharing
            </h2>
            <p className="mb-4">
              Lazystay Hospitality does not sell or rent your personal data.
              Information may only be shared with:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-amber-600">
              <li>Authorized payment and booking partners</li>
              <li>Government authorities if required by law</li>
              <li>Technology providers assisting in hotel operations</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              4. Cookies & Website Tracking
            </h2>
            <p className="mb-4">
              We use cookies to enhance your browsing experience and improve our
              services.
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-amber-600">
              <li>Remembering your booking preferences</li>
              <li>Analyzing website performance</li>
              <li>Improving navigation and usability</li>
            </ul>
            <p className="mt-4">
              You may disable cookies in your browser settings if preferred.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              5. Data Security
            </h2>
            <p>
              We implement strict security protocols including HTTPS encryption,
              secure servers, limited access controls, and industry-standard
              safeguards to protect your personal data from unauthorized access.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              6. Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-amber-600">
              <li>Request access to your personal information</li>
              <li>Request correction or deletion of data</li>
              <li>Withdraw marketing consent at any time</li>
            </ul>
            <p className="mt-4">
              For any privacy-related concerns, please contact us at{" "}
              <a
                href="mailto:info@lazystayhospitality.com"
                className="text-amber-600 font-medium hover:underline"
              >
                info@lazystayhospitality.com
              </a>
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              7. Children’s Privacy
            </h2>
            <p>
              Our services are not directed toward individuals under the age of
              18. We do not knowingly collect personal data from minors.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              8. Policy Updates
            </h2>
            <p>
              This Privacy Policy may be updated periodically. Any changes will
              be posted on this page with an updated effective date.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t mt-16 pt-6 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Lazystay Hospitality. All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
}
