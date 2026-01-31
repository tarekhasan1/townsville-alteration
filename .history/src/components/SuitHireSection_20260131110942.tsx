/* eslint-disable react/no-unescaped-entities */
'use client';

import ContactForm from "@/components/ContactForm"; // Import the form

export default function SuitHireSection() {
  return (
    <section
      className="bg-gradient-to-br from-white to-yellow-50 px-6 md:px-12 lg:px-24 text-gray-800 py-16"
      aria-labelledby="suit-hire-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Title + Form Side by Side */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-16">
          {/* Left Column - Title & Description */}
          <div className="lg:w-1/2">
            <div className="text-center lg:text-left">
              <h2
                id="suit-hire-section"
                className="text-4xl md:text-5xl font-bold text-gray-900"
                aria-describedby="suit-hire-description"
              >
                Red-Carpet-Worthy Suits.
              </h2>
              <hr className="w-20 border-yellow-400 border-[3px] mx-auto lg:mx-0 my-6 rounded-full" />
              <p
                id="suit-hire-description"
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                Your event is in days, and your wardrobe is failing you. No stress. 
                Our latest styles and timeless classics are available for you, browse 
                our gallery to get the perfect fit.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-1/2  flex items-center justify-center w-full">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* How It Works Section */}
                    {/* Suit Icon */}
            <div className="flex justify-center lg:justify-start my-10" role="img" aria-label="Suit icon">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-4xl">👔</span>
              </div>
            </div>
        <div
          className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto text-left space-y-4 text-gray-700 text-base md:text-lg"
          aria-labelledby="how-it-works-title"
        >
          <h3
            id="how-it-works-title"
            className="text-2xl font-semibold text-gray-800 text-center"
          >
            Suit Hire – How It Works
          </h3>
          <div>
            <p>
              <strong>STEP 1:</strong> Choose a Style – Browse our collection of suits and tuxedos.
            </p>
            <p>
              <strong>STEP 2:</strong> Get the Perfect Fit – Your suit is yours for 7 or 14 days and comes with accidental damage insurance. We send you two jacket and trouser sizes—so you always have the perfect fit.
            </p>
            <p>
              <strong>STEP 3:</strong> Easy Returns – Pop your suit back, drop it off, and we'll handle the dry cleaning.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="mailto:tranglecong2014@gmail.com?subject=Suit Hire Inquiry"
            className="bg-yellow-300 text-gray-900 font-semibold hover:bg-yellow-400 transition px-6 py-3 rounded-xl shadow-md mb-6"
            aria-label="Hire a suit now via email"
          >
            HIRE SUIT NOW
          </a>
        </div>
      </div>
    </section>
  );
}