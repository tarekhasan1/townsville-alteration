'use client';

import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

export default function ContactSection() {
  const PHONE_NUMBER = "0421929683";
  const FORMATTED_PHONE = "04 219 29683";
  const ADDRESS = "611 Flinders Street, Townsville";
  const BUSINESS_NAME = "Townsville Alterations & Formal Wear";
  
  // Google Maps URL for the address
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Townsville+Alterations+%26+Formal+Wear+611+Flinders+Street+Townsville";

  return (
    <footer
      id="contact"
      aria-labelledby="contact-us"
      className="bg-[#f2f2e5] p-8 md:p-12 lg:p-16"
    >
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full h-auto relative">
          <Image
            src="/tailored-suit.jpg"
            alt="Tailored suits on hangers"
            width={600}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>
        <div className="space-y-6 text-center md:text-left">
          <h2
            id="contact-us"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            We&apos;d love to work with you. Call us now.
          </h2>
          <hr className="border-yellow-300 border-[2px]" />
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">ADDRESS</h3>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 hover:underline transition-colors inline-block"
                aria-label={`Open ${BUSINESS_NAME} address in Google Maps`}
              >
                {ADDRESS}
              </a>
            </div>
            <div>
              <h3 className="font-semibold">PHONE</h3>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="hover:text-gray-900 hover:underline transition-colors inline-block"
                aria-label={`Call ${BUSINESS_NAME} at ${FORMATTED_PHONE}`}
              >
                {FORMATTED_PHONE}
              </a>
            </div>
            <div>
              <h3 className="font-semibold">EMAIL</h3>
              <p>
                <a
                  href="mailto:tranglecong2014@gmail.com"
                  className="hover:text-gray-900 hover:underline transition-colors"
                  aria-label={`Email ${BUSINESS_NAME} at tranglecong2014@gmail.com`}
                >
                  tranglecong2014@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold">SOCIAL</h3>
              <div className="flex justify-center md:justify-start space-x-4 text-xl">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/DressmakingAlterationsTownsville"
                  aria-label={`Facebook - ${BUSINESS_NAME}`}
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/tsvalterationformal?igsh=bXJkaXp3eXN4Yml2"
                  aria-label={`Instagram - ${BUSINESS_NAME}`}
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}