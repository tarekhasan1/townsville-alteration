/* eslint-disable react/no-unescaped-entities */
'use client';

export default function SuitHireSection() {
  return (
    <section className="bg-gradient-to-br from-white to-yellow-50 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Red-Carpet-Worthy Suits.
        </h2>
        <hr className="w-20 border-yellow-400 border-[3px] mx-auto my-6 rounded-full" />
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Your event is in days, and your wardrobe is failing you. No stress. Our latest styles and timeless classics are delivered to your door in less than 24 hours, anywhere in Australia.
        </p>
      </div>

      <div className="flex justify-center my-10">
        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-md">
          <span className="text-white text-4xl">👔</span>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto text-left space-y-4 text-gray-700 text-base md:text-lg">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">Suit Hire – How It Works</h3>
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

      <div className="flex justify-center mt-10">
        <a
          href="mailto:sales@townsvillealterationsformalwear.com"
          className="bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500 transition px-6 py-3 rounded-xl shadow-md mb-6"
        >
          HIRE SUIT NOW
        </a>
      </div>
    </section>
  );
}
