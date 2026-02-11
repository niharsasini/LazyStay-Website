import React from "react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-neutral-100 py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-neutral-200 p-8 md:p-14">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Terms & Conditions
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            These Terms & Conditions govern your access to and use of the
            Lazystay Hospitality website and hotel services. By booking a stay
            or using our website, you agree to comply with the terms outlined
            below.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-neutral-700 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              1. General Terms
            </h2>
            <p>
              By accessing our website or booking accommodation at Lazystay
              Hospitality, you confirm that you agree to be bound by these Terms
              & Conditions. These terms apply to all guests, website visitors,
              and customers.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              2. Booking & Payment Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-amber-600">
              <li>
                All bookings are subject to availability and confirmation.
              </li>
              <li>
                Guests must provide accurate personal and contact information.
              </li>
              <li>
                Full or partial payment may be required to confirm reservations.
              </li>
              <li>
                Payments are securely processed via trusted third-party
                gateways.
              </li>
              <li>Government-issued ID is mandatory at check-in.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              3. Cancellation & Refund Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-amber-600">
              <li>Cancellations must be made as per the selected rate plan.</li>
              <li>Refund eligibility depends on booking type and timing.</li>
              <li>
                Refunds (if applicable) are processed within 7–14 business days.
              </li>
              <li>No-show bookings may not be eligible for refunds.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              4. Guest Responsibilities
            </h2>
            <p>
              Guests agree to use hotel property responsibly and comply with
              local laws and hotel policies. Lazystay Hospitality reserves the
              right to deny accommodation to guests engaging in misconduct or
              illegal activities.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              5. Intellectual Property
            </h2>
            <p>
              All website content including text, images, logos, and designs are
              the intellectual property of Lazystay Hospitality and protected
              under applicable copyright and trademark laws. Unauthorized use is
              strictly prohibited.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              Lazystay Hospitality shall not be liable for any indirect,
              incidental, or consequential damages arising from the use of our
              website or hotel services, except as required by applicable law.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              7. Third-Party Services
            </h2>
            <p>
              Our website may contain links to third-party platforms. We are not
              responsible for their content, policies, or practices.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              8. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and interpreted in accordance
              with the laws of India. Any disputes shall be subject to the
              exclusive jurisdiction of courts located in Odisha, India.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              9. Amendments
            </h2>
            <p>
              Lazystay Hospitality reserves the right to modify these Terms at
              any time. Continued use of the website or services constitutes
              acceptance of updated terms.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              10. Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms & Conditions,
              please contact us:
            </p>

            <div className="mt-4 space-y-2">
              <p>
                📧 Email:{" "}
                <a
                  href="mailto:info@lazystayhospitality.com"
                  className="text-amber-600 font-medium hover:underline"
                >
                  sales@lazystay.com
                </a>
              </p>
              <p>📞 Phone: +91-8455007723</p>
              <p>📍 Location: Bhubaneswar, Odisha, India</p>
            </div>
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
