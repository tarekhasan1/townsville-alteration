"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm"; // Import the form

export default function AlterationsSection() {
    return (
        <section className="bg-gradient-to-br from-white to-yellow-50 py-16 px-6 md:px-12 lg:px-24 text-gray-800 pt-[100px]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                    {/* Left Column */}
                    <div className="lg:w-1/2">
                        <div className="max-w-4xl text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Clothing Alterations & Repairs
                            </h1>
                            <hr className="w-20 border-yellow-400 border-[3px] mx-auto lg:mx-0 my-6 rounded-full" />
                            <p className="text-xl font-semibold">
                                Because the Perfect Fit Changes Everything
                            </p>
                            <p className="mt-4 text-gray-600 text-xs sm:text-base md:text-lg leading-relaxed">
                                Whether it&apos;s your favorite dress that needs a little
                                tweaking, a suit that could use some sharpening, or jeans
                                that just don&apos;t fit quite right—our expert tailoring team
                                can make it fit like a dream.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:w-1/2 flex items-center justify-center w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-12 grid gap-10">
                <div className="bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Bridal & Formal Alterations
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Your wedding dress, bridesmaid gown, or formal attire
                        should fit like it was made just for you.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                        <li>Wedding dress resizing & adjustments</li>
                        <li>Bridesmaid dress & evening gown alterations</li>
                        <li>Suit & tuxedo alterations</li>
                        <li>
                            Hemming, taking in, or letting out for the perfect
                            shape
                        </li>
                    </ul>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Suit Alterations
                    </h2>
                    <p className="mt-2 text-gray-600">
                        A great suit should fit like a second skin.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                        <li>Jacket sleeve & trouser length adjustments</li>
                        <li>Waist & shoulder reshaping</li>
                        <li>Suit tapering for a modern fit</li>
                    </ul>
                </div>

                <div className="flex justify-center">
                    <Image
                        width={100}
                        height={100}
                        objectFit="cover"
                        src="/dress-icon.png"
                        alt="dress icon"
                        className="rounded-full shadow-md"
                    />
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Racewear & Special Occasion Alterations
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Got a big day at the races or a special event?
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                        <li>Dress & skirt alterations</li>
                        <li>Adjustments to fitted blazers & jackets</li>
                        <li>Custom tailoring for race day looks</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-3xl mx-auto mt-16 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Why Choose Us?
                </h2>
                <ul className="mt-6 space-y-4 text-gray-700 text-base">
                    <li className="flex items-center justify-center gap-3">
                        <CheckCircle size={20} className="text-yellow-500" />
                        Fast Turnaround: Quick, high-quality alterations
                    </li>
                    <li className="flex items-center justify-center gap-3">
                        <CheckCircle size={20} className="text-yellow-500" />
                        Expert Tailoring: Decades of experience
                    </li>
                    <li className="flex items-center justify-center gap-3">
                        <CheckCircle size={20} className="text-yellow-500" />
                        Personalised Service: Every client is unique
                    </li>
                </ul>
            </div>

            <div className="flex justify-center mt-12">
                <a
                    href="mailto:tranglecong2014@gmail.com"
                    className="bg-yellow-300 text-gray-900 font-semibold hover:bg-yellow-400 transition px-6 py-3 rounded-xl shadow-md"
                >
                    Send Measurements
                </a>
            </div>
        </section>
    );
}