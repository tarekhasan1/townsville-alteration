'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AlterationsSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-20 text-gray-800 text-center">
      <div className="mx-auto text-center mt-[80px]">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Clothing Alterations & Repairs</h1>
        <p className="mt-4 text-lg font-semibold">Because the Perfect Fit Changes Everything</p>
        <p className="mt-2 text-gray-600">
          Whether it’s your favorite dress that needs a little tweaking, a suit that could use some sharpening, or jeans that
          just don’t fit quite right—our expert tailoring team can make it fit like a dream.
        </p>
      </div>

      <div className="mx-auto mt-8 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Bridal & Formal Alterations</h2>
          <p className="text-gray-600">Your wedding dress, bridesmaid gown, or formal attire should fit like it was made just for you.</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Wedding dress resizing & adjustments</li>
            <li>Bridesmaid dress & evening gown alterations</li>
            <li>Suit & tuxedo alterations</li>
            <li>Hemming, taking in, or letting out for the perfect shape</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Suit Alterations</h2>
          <p className="text-gray-600">A great suit should fit like a second skin.</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Jacket sleeve & trouser length adjustments</li>
            <li>Waist & shoulder reshaping</li>
            <li>Suit tapering for a modern fit</li>
          </ul>
        </div>

        <div className="flex justify-center my-6">
          <Image width={100} height={100} objectFit="cover" src="/dress-icon.png" alt="dress icon" />
        </div>

        <div>
          <h2 className="text-xl font-semibold">Racewear & Special Occasion Alterations</h2>
          <p className="text-gray-600">Got a big day at the races or a special event?</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Dress & skirt alterations</li>
            <li>Adjustments to fitted blazers & jackets</li>
            <li>Custom tailoring for race day looks</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 text-center">
        <h2 className="text-xl font-semibold">Why Choose Us?</h2>
        <ul className="mt-2 text-gray-600">
          <li className="flex items-center justify-center gap-2"><CheckCircle size={18} /> Fast Turnaround – Quick, high-quality alterations</li>
          <li className="flex items-center justify-center gap-2"><CheckCircle size={18} /> Expert Tailoring – Decades of experience</li>
          <li className="flex items-center justify-center gap-2"><CheckCircle size={18} /> Personalized Service – Every client is unique</li>
        </ul>
      </div>

      <div className="flex justify-center mt-8">
        <a href="mailto:sales@townsvillealterationsformalwear.com" className="bg-gray-900 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700">
          Send Measurements
        </a>
      </div>
    </section>
  );
}
