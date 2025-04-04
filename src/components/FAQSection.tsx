'use client';

export default function FAQSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-20 text-gray-800">
      <div className=" mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">FAQ</h1>
        <hr className="border-yellow-300 border-[2px] my-4" />
      </div>

      <div className="mx-auto space-y-8 text-center text-gray-700">
        <div>
          <h2 className="text-lg font-semibold">How far in advance should I book a suit hire?</h2>
          <p className="mt-2">We recommend booking at least a week in advance, but we also offer 24-hour delivery for those last-minute “I forgot I had a wedding” moments.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Do you alter wedding dresses and bridesmaid dresses?</h2>
          <p className="mt-2">Absolutely! We specialise in bridal alterations, formalwear adjustments, and racewear tailoring.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Can I email my measurements for a custom suit?</h2>
          <p className="mt-2">Yes! Send us your measurements, and we’ll take care of the rest.</p>
        </div>
      </div>
    </section>
  );
}
