"use client";

export default function FAQSection() {
    return (
        <section className="bg-white py-12 px-6 md:px-12 lg:px-20 text-gray-800">
            <div className="mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    FAQ
                </h1>
                <hr className="w-20 border-yellow-400 border-[3px] mx-auto my-6 rounded-full" />
            </div>

            <div className="mx-auto space-y-8 text-center text-gray-700">
                <div>
                    <h2 className="text-lg font-semibold">
                        How far in advance should I book a suit hire?
                    </h2>
                    <p className="mt-2">
                        We recommend booking at least a week ahead. That said,
                        we’re happy to help out with last-minute hires for those
                        “I forgot I’ve got a wedding” moments, just pop in!
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
                        Sure thing, you can send us your measurements to get
                        started. Just keep in mind we don’t offer postage or
                        delivery services, so fittings and pickups are done
                        in-store.
                    </p>
                </div>
            </div>
        </section>
    );
}
