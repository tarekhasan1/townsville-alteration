'use client';

import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-[#f2f2e5] p-8 md:p-12 lg:p-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full h-auto relative">
          <Image
            src="/tailored-suit.jpg"
            alt="Suits on hangers"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
            We&apos;d love to work with you. Call us now.
          </h2>
          <hr className="border-yellow-300 border-[2px]" />
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">ADDRESS</h3>
              <p>611 Flinders Street, Townsville</p>
            </div>
            <div>
              <h3 className="font-semibold">PHONE</h3>
              <p>07 47 241368</p>
            </div>
            <div>
              <h3 className="font-semibold">EMAIL</h3>
              <p>Sales@TownsvilleAlterationsFormalWear.com</p>
            </div>
            <div>
              <h3 className="font-semibold">SOCIAL</h3>
              <div className="flex justify-center md:justify-start space-x-4 text-xl">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
