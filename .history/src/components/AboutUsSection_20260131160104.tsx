/* eslint-disable react/no-unescaped-entities */
'use client';

import ContactForm from '@/components/ContactForm'; // Import the form

export default function AboutUsSection() {
    return (
        <section className="bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-10">
                    {/* Left Column - About Us Content */}
                    <div className="lg:w-1/2">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
                            <hr className="w-20 border-yellow-400 border-[3px] lg:mx-0 my-6 rounded-full mx-auto" />
                            <p className="text-gray-700 mb-6">
                                We have over almost 40 years of experience in alterations and dressmaking. We specialise in formal 
                                women's and menswear – Gowns, Dresses, and Suits. Now, we also offer custom-made suits, sales, and suit hire.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:w-1/2 flex items-center justify-center w-full">
                        <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
                            <ContactForm />
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full justify-center mx-auto mb-12 gap-10'>
                    <div className="flex lg:justify-start justify-center mt-10">
                                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-4xl">🧵</span>
                                </div>
                            </div>

                            <div className="text-gray-700 space-y-4">
                                <h3 className="font-bold">Our Location & Contact</h3>
                                <p><strong>ADDRESS:</strong> 611 Flinders Street, Townsville</p>
                                <p><strong>PHONE:</strong> 07 47 241368</p>
                                <a href='mailto:tranglecong2014@gmail.com' className="block hover:text-yellow-600 transition-colors">
                                    <strong>EMAIL:</strong> <span className="text-yellow-400">tranglecong2014@gmail.com</span>
                                </a>
                            </div>
                </div>
            </div>
        </section>
    );
}