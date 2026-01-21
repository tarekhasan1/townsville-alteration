// app/wedding-gowns/page.tsx
import { Metadata } from 'next';
import ImageGallery from '@/components/ImageGallery';

export const metadata: Metadata = {
  title: 'Wedding Gowns Collection | Townsville Alterations & Formal Wear',
  description: 'Discover our exquisite collection of wedding gowns in Townsville. Designer dresses, custom creations, and expert alterations for your dream wedding.',
  keywords: ['wedding gowns', 'bridal dresses', 'wedding dresses Townsville', 'bridal gowns', 'wedding dress alterations', 'custom wedding dresses', 'bridal shop Townsville'],
  openGraph: {
    title: 'Wedding Gowns Collection | Townsville Alterations & Formal Wear',
    description: 'Exquisite wedding gowns and bridal dresses. Find your dream dress for your special day.',
    type: 'website',
    locale: 'en_AU',
  },
  alternates: {
    canonical: 'https://townsvillealterationsformalwear.com/wedding-gowns',
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

export default function WeddingGownsPage() {
  return (
    <main className='pt-[100px]'>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-blue-50 text-gray-800 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mtt-[100px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Wedding Gowns Collection
          </h1>
          <div className="w-24 h-1 bg-pink-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            Discover your dream wedding gown. From elegant designer dresses to custom creations, 
            find the perfect dress for your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0421929683"
              className="inline-flex items-center justify-center bg-pink-500 text-white hover:bg-pink-600 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call for Bridal Appointment
            </a>
            <a
              href="mailto:tranglecong2014@gmail.com?subject=Wedding Gown Inquiry"
              className="inline-flex items-center justify-center bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Wedding Gown Collection
            </h2>
            <div className="w-20 h-1 bg-pink-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our stunning collection of wedding gowns. Each dress is carefully selected 
              for quality, style, and timeless elegance.
            </p>
          </div>

          <ImageGallery
            collection="wedding-gowns"
            title="Wedding Gowns"
            description="Exquisite gowns for your dream wedding"
            itemsPerPage={9}
            showContactButton={true}
            contactEmail="tranglecong2014@gmail.com"
            contactSubject="Wedding Gown Inquiry"
            buttonText="Inquire About This Gown"
            showCallButton={true}
            phoneNumber="0421929683"
            callButtonText="Call About This Gown"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Bridal Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-pink-500 text-4xl mb-4">👰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gown Selection</h3>
              <p className="text-gray-600">
                Browse our curated collection of designer wedding gowns in various styles and silhouettes.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Designer Collections
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Various Styles Available
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Private Fittings
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-pink-500 text-4xl mb-4">✂️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bridal Alterations</h3>
              <p className="text-gray-600">
                Expert wedding gown alterations to ensure the perfect fit for your special day.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom Fitting
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Hem Adjustments
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Bustle & Embellishments
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-pink-500 text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Design</h3>
              <p className="text-gray-600">
                Create your dream wedding gown with our custom design service.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized Design
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Fabric Consultation
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Made-to-Measure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Styles Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Popular Wedding Dress Styles
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-3xl mb-4">👗</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">A-Line</h3>
              <p className="text-gray-600 text-sm">
                Classic silhouette that flatters most body types
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-3xl mb-4">💃</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mermaid</h3>
              <p className="text-gray-600 text-sm">
                Fitted through bodice, flaring at the knee
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ball Gown</h3>
              <p className="text-gray-600 text-sm">
                Dramatic full skirt with fitted bodice
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-3xl mb-4">🌿</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bohemian</h3>
              <p className="text-gray-600 text-sm">
                Relaxed, flowing styles with lace details
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-400 to-pink-500 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Schedule Your Bridal Appointment
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Visit our boutique for a personalized consultation. Find the gown of your dreams with our expert assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0421929683"
              className="inline-flex items-center justify-center bg-white text-pink-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 0421 929 683
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-pink-600 font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How far in advance should I order my wedding gown?
              </h3>
              <p className="text-gray-600">
                We recommend ordering your wedding gown 6-8 months before your wedding date to allow time for production, shipping, and alterations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Do you offer alterations on gowns purchased elsewhere?
              </h3>
              <p className="text-gray-600">
                Yes, we offer expert alterations on wedding gowns purchased from other stores. We can handle hemming, taking in/out, and other adjustments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What should I bring to my bridal appointment?
              </h3>
              <p className="text-gray-600">
                Bring any undergarments you plan to wear, shoes with similar heel height, and photos of gowns you love. We also recommend bringing up to two guests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}