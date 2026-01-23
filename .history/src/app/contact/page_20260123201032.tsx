// app/contact/page.tsx
import { Metadata } from 'next';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Townsville Alterations & Formal Wear',
  description: 'Get in touch with Townsville Alterations & Formal Wear. Book appointments, ask questions, or request quotes for alterations, suits, and wedding attire.',
  keywords: ['contact alterations Townsville', 'formal wear contact', 'wedding suit appointment', 'bridal gown consultation', 'alterations service Townsville'],
  openGraph: {
    title: 'Contact Us | Townsville Alterations & Formal Wear',
    description: 'Contact us for all your alteration and formal wear needs in Townsville.',
    type: 'website',
    locale: 'en_AU',
  },
  alternates: {
    canonical: 'https://townsvillealterationsformalwear.com/contact',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ContactPage() {
  return (
    <main className="pt-16 min-h-screen bg-white">
      {/* Hero Section - Ultra Compact */}
      <section className="py-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Contact Us
            </h1>
            <div className="w-16 h-0.5 bg-yellow-400 mx-auto mb-3"></div>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Get in touch for alterations, suit hire, or wedding attire.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Form - First Column */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 border border-gray-200">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-900">
                  Send a Message
                </h2>
              </div>
              
              <ContactForm />
            </div>

            {/* Contact Information - Second Column */}
            <div className="space-y-6">
              {/* Contact Details - Compact */}
              <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Contact Details
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-semibold text-gray-900">Phone</h3>
                      <a 
                        href="tel:0421929683" 
                        className="text-gray-700 hover:text-yellow-600 transition-colors text-base font-medium"
                      >
                        0421 929 683
                      </a>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Call for immediate assistance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                      <a 
                        href="mailto:tranglecong2014@gmail.com" 
                        className="text-gray-700 hover:text-yellow-600 transition-colors text-sm font-medium break-all"
                      >
                        tranglecong2014@gmail.com
                      </a>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Email us anytime
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-700 text-sm font-medium">
                        611 Flinders Street, Townsville
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Serving Townsville community
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Quick Contact
                </h2>
                
                <div className="space-y-3">
                  <a
                    href="tel:0421929683"
                    className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all shadow-sm hover:shadow"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                  
                  <a
                    href="mailto:tranglecong2014@gmail.com?subject=Website Inquiry"
                    className="flex items-center justify-center w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2.5 px-4 rounded-lg transition-all shadow-sm hover:shadow"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>

              {/* Business Hours - Compact */}
              <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Business Hours
                </h2>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm text-gray-700">Mon - Fri</span>
                    <span className="text-sm font-semibold text-gray-900">9am - 6pm</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm text-gray-700">Saturday</span>
                    <span className="text-sm font-semibold text-gray-900">9am - 4pm</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm text-gray-700">Sunday</span>
                    <span className="text-sm font-semibold text-gray-900">Closed</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-xs text-gray-700">
                    <span className="font-semibold">Note:</span> Appointment recommended. Walk-ins welcome based on availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Optional (Consider removing if still needs scrolling) */}
      <section className="py-8 px-4 md:px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-6">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-2xl mb-2">✂️</div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Alterations</h3>
              <p className="text-xs text-gray-600">
                Clothing repairs, hemming, and perfect fit adjustments.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-2xl mb-2">👔</div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Suit Hire</h3>
              <p className="text-xs text-gray-600">
                Premium suit rental for weddings and formal events.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-2xl mb-2">👰</div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Wedding Attire</h3>
              <p className="text-xs text-gray-600">
                Wedding gowns, suits, and bridal party attire.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Custom Tailoring</h3>
              <p className="text-xs text-gray-600">
                Made-to-measure suits and dresses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}