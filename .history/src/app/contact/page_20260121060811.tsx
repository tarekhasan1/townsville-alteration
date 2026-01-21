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
    <main className="pt-[100px] min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with Townsville Alterations & Formal Wear. Whether you need alterations, 
              want to hire a suit, or are looking for your dream wedding attire, we&apos;re here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Details
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Phone Number</h3>
                      <a 
                        href="tel:0421929683" 
                        className="text-gray-600 hover:text-yellow-600 transition-colors text-lg font-medium"
                      >
                        0421 929 683
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Call us for immediate assistance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Email Address</h3>
                      <a 
                        href="mailto:tranglecong2014@gmail.com" 
                        className="text-gray-600 hover:text-yellow-600 transition-colors text-lg font-medium"
                      >
                        tranglecong2014@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Send us an email anytime
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600 text-lg font-medium">
                        Townsville, QLD
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Serving the Townsville community
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Business Hours
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-gray-900 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-gray-900 font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-900 font-semibold">Closed</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Note:</span> Appointment recommended for consultations and fittings. 
                    Walk-ins are welcome based on availability.
                  </p>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Quick Contact
                </h2>
                
                <div className="space-y-4">
                  <a
                    href="tel:0421929683"
                    className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now: 0421 929 683
                  </a>
                  
                  <a
                    href="mailto:tranglecong2014@gmail.com?subject=Website Inquiry"
                    className="flex items-center justify-center w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Quick Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What We Can Help You With
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
              <div className="text-3xl mb-4">✂️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alterations</h3>
              <p className="text-gray-600">
                Clothing repairs, hemming, taking in/out, and perfect fit adjustments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
              <div className="text-3xl mb-4">👔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Suit Hire</h3>
              <p className="text-gray-600">
                Premium suit rental for weddings, formal events, and special occasions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
              <div className="text-3xl mb-4">👰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wedding Attire</h3>
              <p className="text-gray-600">
                Wedding gowns, suits, and bridal party attire selection and alterations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Tailoring</h3>
              <p className="text-gray-600">
                Made-to-measure suits and dresses tailored to your exact specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How long do alterations usually take?
              </h3>
              <p className="text-gray-600">
                Most alterations take 3-7 business days depending on complexity. Rush services are available for urgent requests.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Do I need an appointment for alterations?
              </h3>
              <p className="text-gray-600">
                Appointments are recommended for fittings to ensure we can give you dedicated time, but walk-ins are welcome based on availability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What should I bring to my fitting?
              </h3>
              <p className="text-gray-600">
                Bring the garment you need altered, any undergarments or shoes you plan to wear with it, and any specific style preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}