// app/contact/success/page.tsx
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ContactSuccessPage() {
  return (
    <main className="min-h-screen bg-[#f2f2e5] pt-32 pb-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-green-100 rounded-full p-4">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        
        <p className="text-xl text-gray-700 mb-8">
          Your message has been sent successfully.
        </p>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What happens next?
          </h2>
          
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span>We&apos;ve received your enquiry and will review it shortly.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span>Our team will contact you within 24-48 hours to discuss your requirements.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span>For urgent enquiries, please call us directly at <a href="tel:0421929683" className="text-yellow-600 hover:underline font-medium">04 219 29683</a>.</span>
            </li>
          </ul>
        </div>

        {/* Business Info */}
        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-2">Townsville Alterations & Formal Wear</h3>
          <p className="text-gray-700 mb-1">611 Flinders Street, Townsville</p>
          <p className="text-gray-700">
            <a href="tel:0421929683" className="hover:underline">04 219 29683</a> |{' '}
            <a href="mailto:tranglecong2014@gmail.com" className="hover:underline">tranglecong2014@gmail.com</a>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Return to Home
          </Link>
          <Link
            href="/gallery"
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </main>
  );
}