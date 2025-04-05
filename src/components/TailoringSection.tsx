/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function TailoringSection() {
  return (
    <section className="bg-[#f0f1e6] py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tailoring Perfection, One Stitch at a Time.
          </h2>
          <hr className="mb-4 md:mb-8 border-[2px] text-yellow-300"/>
          <p className="text-gray-700 text-lg mb-6">
            Whether you're looking for a tailor-made suit, a last-minute formalwear hire, or expert alterations, we’ve got you covered literally.
          </p>
          <p className="text-gray-700 text-lg">
            At Townsville Alterations & Formal Wear, we believe a perfect fit changes everything. Whether it’s a suit that makes you feel unstoppable, a wedding dress that fits like a dream, or a vintage jacket that just needs a little TLC, we’re here to make sure your wardrobe works for you. With decades of experience in custom tailoring, suit hire, and alterations, our team takes pride in bringing high-quality craftsmanship to Townsville’s fashion scene.
          </p>
        </div>

        {/* Image Content */}
        <div className="grid grid-cols-1 gap-6">
          <div className="relative w-full h-30 md:h-40">
            <Image
              src="/tailored-suit.jpg"
              alt="Tailored suits"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-60 md:h-80">
            <Image
              src="/tape.jpg"
              alt="Measuring tape"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
