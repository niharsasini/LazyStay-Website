import React from "react";

export default function Refund() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-14 text-gray-700">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900">
          Refund & Cancellation Policy
        </h1>

        <p className="mb-8 leading-relaxed">
          At <strong>Lazystay Hospitality</strong>, we are committed to
          providing a seamless and comfortable experience for our guests. This
          Refund & Cancellation Policy outlines the terms and conditions related
          to booking cancellations, refunds, modifications, and no-show
          situations for rooms, banquet halls, restaurant reservations, and
          other services.
        </p>

        {/* 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. General Refund Policy
        </h2>

        <p className="mb-4">
          Refund eligibility depends on the type of booking, timing of
          cancellation, and services utilized. All refund requests are reviewed
          in accordance with this policy.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Refunds are processed to the original payment method.</li>
          <li>Processing time: 7–14 business days after approval.</li>
          <li>Bank processing timelines may vary.</li>
          <li>Non-refundable promotional rates are not eligible for refund.</li>
        </ul>

        {/* 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. Room Booking Cancellation
        </h2>

        <h3 className="font-semibold mb-2">2.1 Cancellation Before Check-In</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>48+ hours before check-in: 100% refund.</li>
          <li>24–48 hours before check-in: 50% refund.</li>
          <li>Less than 24 hours before check-in: No refund.</li>
        </ul>

        <h3 className="font-semibold mb-2">2.2 No-Show Policy</h3>
        <p className="mb-4">
          Failure to check in without prior cancellation will result in a charge
          equivalent to one night’s stay. Remaining nights may be cancelled
          without refund.
        </p>

        {/* 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Advance Payment & Partial Refunds
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Advance payments are refundable as per cancellation timeline.</li>
          <li>
            Refunds exclude payment gateway or transaction fees (if applicable).
          </li>
          <li>Special discounted or non-refundable bookings are excluded.</li>
        </ul>

        {/* 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. Banquet Hall & Event Bookings
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>7+ days before event: 75% refund of advance.</li>
          <li>3–6 days before event: 50% refund.</li>
          <li>Within 72 hours of event: No refund.</li>
          <li>Custom event arrangements may have separate agreements.</li>
        </ul>

        {/* 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. Restaurant & Group Reservations
        </h2>

        <p className="mb-4">
          Standard restaurant reservations do not require advance payment.
          However, for large group bookings or special occasions:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>24+ hours prior cancellation: Full refund.</li>
          <li>Same-day cancellation: No refund of advance.</li>
        </ul>

        {/* 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Booking Modifications
        </h2>

        <p className="mb-4">
          Guests may request date changes or room upgrades subject to
          availability. Price differences may apply. Modification requests made
          within 24 hours of check-in may be treated as cancellation.
        </p>

        {/* 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          7. Force Majeure & Unforeseen Circumstances
        </h2>

        <p className="mb-4">
          In cases of natural disasters, pandemics, government restrictions, or
          events beyond our control, Lazystay Hospitality may reschedule,
          postpone, or offer booking credits. We are not liable for indirect
          expenses such as travel costs.
        </p>

        {/* 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          8. Chargebacks & Payment Disputes
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Please contact us before initiating chargebacks.</li>
          <li>Unauthorized chargebacks may result in booking cancellation.</li>
          <li>Fraudulent disputes may lead to legal action.</li>
        </ul>

        {/* 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">9. Policy Updates</h2>

        <p>
          Lazystay Hospitality reserves the right to update this policy at any
          time. Changes will be effective immediately upon posting.
        </p>

        {/* Contact */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          10. Contact Information
        </h2>

        <div className="space-y-2">
          <p>
            <strong>Lazystay Hospitality</strong>
          </p>
          <p>Bhubaneswar, Odisha, India</p>
          <p>Email: sales@lazystay.com</p>
          <p>Phone: +91-8455007723</p>
          <p>Website: lazystay.in</p>
        </div>

        <div className="border-t mt-12 pt-6 text-sm text-gray-500 text-center">
          Last Updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
