/* eslint-disable react/no-unescaped-entities */
'use client';

import ContactForm from '@/components/ContactForm'; // Import the form

export default function FAQSection() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-heading"
            className="bg-white py-12 px-6 md:px-12 lg:px-20 text-gray-800"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header and Contact Form side by side */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-12">
                    {/* Left Column - FAQ Heading */}
                    <div className="lg:w-1/2">
                        <div className="text-left">
                            <h1
                                id="faq-heading"
                                className="text-3xl md:text-4xl font-bold text-gray-900"
                            >
                                Frequently Asked Questions
                            </h1>
                            <hr className="w-20 border-yellow-400 border-[3px] my-6 rounded-full" />
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:w-1/2">
                        <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
                            <ContactForm />
                        </div>
                    </div>
                </div>

                {/* FAQ Content below */}
                <div className="max-w-3xl mx-auto space-y-8 text-center text-gray-700">
                    <div>
                        <h2 className="text-lg font-semibold">
                            How far in advance should I book a suit hire?
                        </h2>
                        <p className="mt-2">
                            We recommend booking at least a week ahead. That said,
                            we're happy to help out with last-minute hires for those
                            "I forgot I've got a wedding" moments—just pop in!
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">
                            Do you alter wedding dresses and bridesmaid dresses?
                        </h2>
                        <p className="mt-2">
                            Absolutely! We specialise in bridal alterations,
                            formalwear adjustments, and tailoring for race day.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">
                            Can I email my measurements for a custom suit?
                        </h2>
                        <p className="mt-2">
                            Sure thing! You can send us your measurements to get
                            started. Just keep in mind, we don't offer postage or
                            delivery services, so fittings and pickups are done
                            in-store.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}