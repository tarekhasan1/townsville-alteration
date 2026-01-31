// app/wedding-suits/page.tsx
import { Metadata } from 'next';
import ImageGallery from '@/components/ImageGallery';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Wedding Suits Collection | Townsville Alterations & Formal Wear',
  description: 'Browse our premium wedding suit collection for hire and purchase in Townsville. Perfectly tailored suits for grooms, groomsmen, and wedding parties.',
  keywords: ['wedding suits', 'groom suits', 'groomsmen suits', 'wedding attire', 'formal suits Townsville', 'wedding suit hire', 'custom wedding suits'],
  openGraph: {
    title: 'Wedding Suits Collection | Townsville Alterations & Formal Wear',
    description: 'Premium wedding suits for hire and purchase. Perfectly tailored for your special day.',
    type: 'website',
    locale: 'en_AU',
  },
  alternates: {
    canonical: 'https://townsvillealterationsformalwear.com/wedding-suits',
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

export default function WeddingSuitsPage() {
  return (
    <>
      {/* Hero Section - ABSOLUTE FULL WIDTH FIX */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-[80px] pb-16 md:pb-24">
        <div className="w-full h-full">
          <div className="max-w-7xl mx-auto px-6 pt-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="lg:w-1/2">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Wedding Suits Collection
                  </h1>
                  <div className="w-24 h-1 bg-yellow-400 lg:mx-0 mb-8 mx-auto"></div>
                  <p className="text-xl md:text-2xl text-gray-300 mb-10">
                    Elegant and sophisticated wedding suits tailored for the modern groom. 
                    Hire or purchase premium suits for your special day.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                    <a
                      href="tel:0421929683"
                      className="inline-flex items-center justify-center bg-yellow-400 text-gray-900 hover:bg-yellow-500 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call for Suit Consultation
                    </a>
                    <a
                      href="mailto:tranglecong2014@gmail.com?subject=Wedding Suit Inquiry"
                      className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Inquiry
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:w-1/2">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the page content */}
      <main className="pt-0">
        {/* Gallery Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Wedding Suit Collection
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse our curated collection of premium wedding suits. Each suit is available for hire 
                or purchase and can be customized to your preferences.
              </p>
            </div>

            <ImageGallery
              collection="suits"
              title="Wedding Suits"
              description="Premium suits perfect for your wedding day"
              itemsPerPage={9}
              showContactButton={true}
              contactEmail="tranglecong2014@gmail.com"
              contactSubject="Wedding Suit Inquiry"
              buttonText="Inquire About This Suit"
              showCallButton={true}
              phoneNumber="0421929683"
              callButtonText="Call About This Suit"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Wedding Suit Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="text-yellow-500 text-4xl mb-4">👔</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Suit Hire</h3>
                <p className="text-gray-600">
                  Hire premium wedding suits for the groom and groomsmen. Perfect fit guaranteed with our expert tailoring.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Groom & Groomsmen Packages
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    All Sizes Available
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Dry Cleaning Included
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="text-yellow-500 text-4xl mb-4">✂️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Tailoring</h3>
                <p className="text-gray-600">
                  Custom-made wedding suits tailored to your exact measurements and style preferences.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Personalized Measurements
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Fabric Selection
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Style Consultation
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="text-yellow-500 text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Alterations</h3>
                <p className="text-gray-600">
                  Professional suit alterations to ensure the perfect fit for your wedding day.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Expert Fitting
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Quick Turnaround
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Quality Guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Find Your Perfect Wedding Suit?
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-8">
              Contact us today for a consultation. Let&apos;s create the perfect look for your special day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0421929683"
                className="inline-flex items-center justify-center bg-gray-900 text-white hover:bg-gray-800 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 0421 929 683
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}