"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm"; // Import your existing form

const images = [
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
  "/8.jpeg",
  "/9.jpeg",
  "/12.jpeg",
  "/13.jpeg",
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[100vh] flex flex-col lg:flex-row items-center bg-white px-4 pt-[120px] lg:pt-0 lg:px-8 xl:px-16 py-8 lg:py-10">
      {/* Left Column - Image Carousel */}
      <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg lg:rounded-xl">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Townsville Alterations & Formal Wear Image ${index + 1}`}
            fill
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } object-cover`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        ))}
        
        {/* Mobile-only CTA overlay */}
        <div className="lg:hidden absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-3 rounded-lg">
          <div className="flex items-center justify-between">
            <a
              href="tel:0421929683"
              aria-label="Call Townsville Alterations and Formal Wear"
              className="flex items-center gap-2 bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition-all rounded-md text-sm"
            >
              <Phone className="w-3 h-3" />
              Call Now
            </a>
            <Link
              href="/about-us"
              aria-label="Learn more about Townsville Alterations and Formal Wear"
              className="border border-white px-4 py-2 text-white hover:bg-yellow-400 hover:text-gray-900 transition-all rounded-md text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column - Text & Contact Form */}
      <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12 mt-8 lg:mt-0">
        {/* Heading */}
        <h2 className="text-gray-800 text-sm sm:text-base uppercase tracking-wider font-medium">
          Reinvent Your Wardrobe. Or Hire One That Turns Heads.
        </h2>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
          Townsville Alterations & Formal Wear
        </h1>

        {/* Key Benefits */}
        <div className="mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-4">
            {[
              "✓ Expert Tailors",
              "✓ Premium Formal Wear",
              "✓ Same-Day Service Available",
              "✓ Perfect Fit Guarantee"
            ].map((item, index) => (
              <div key={index} className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                {item}
              </div>
            ))}
          </div>
          
          <p className="text-gray-600 text-base">
            Get a free quote or consultation. Send us your details and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form - Visible on all devices */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Get Your Free Quote
          </h3>
          <ContactForm />
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex gap-4 mt-6">
          <Link
            href="/about-us"
            aria-label="Learn more about Townsville Alterations and Formal Wear"
            className="border border-gray-800 px-6 py-3 text-gray-800 hover:bg-yellow-300 hover:text-gray-900 transition-all text-center rounded-lg"
          >
            Learn More About Us
          </Link>

          <a
            href="tel:0421929683"
            aria-label="Call Townsville Alterations and Formal Wear"
            className="flex items-center justify-center gap-2 bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition-all rounded-lg"
          >
            <Phone className="w-4 h-4" />
            Call: 0421 929 683
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
            <span>✓ Fast Response</span>
            <span>✓ Professional Service</span>
            <span>✓ 15+ Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;