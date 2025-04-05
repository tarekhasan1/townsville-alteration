/* eslint-disable react/no-unescaped-entities */
"use client";

export default function SuitHireSection() {
    return (
        <section className="bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Red-Carpet-Worthy Suits.
            </h2>
            <hr className="border-yellow-300 border-[2px] my-4" />
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                Your event is in days, and your wardrobe is failing you. No
                stress. Our latest styles and timeless classics are delivered to
                your door in less than 24 hours, anywhere in Australia.
            </p>

            <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl">👔</span>
                </div>
            </div>

            <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
                <h3 className="font-bold">Suit Hire – How It Works</h3>
                <p>
                    <strong>STEP 1:</strong> Choose a Style - Browse our
                    collection of suits and tuxedos.
                </p>
                <p>
                    <strong>STEP 2:</strong> Get the Perfect Fit - Your suit is
                    yours for 7 or 14 days and comes with accidental damage
                    insurance. We send you two jacket and trouser sizes—so you
                    always have the perfect fit.
                </p>
                <p>
                    <strong>STEP 3:</strong> Easy Returns - Pop your suit back,
                    drop it off, and we'll handle the dry cleaning.
                </p>
            </div>

            <a
                href="mailto:sales@townsvillealterationsformalwear.com"
                className="mt-6 px-6 py-3 border border-gray-600 rounded hover:bg-yellow-300 hover:border-gray-50 hover:text-white transition"
            >
                HIRE SUIT NOW
            </a>
        </section>
    );
}
