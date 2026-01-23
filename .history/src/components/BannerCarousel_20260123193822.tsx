"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

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
    <div className="relative w-full min-h-[100vh] flex flex-col lg:flex-row items-center bg-white px-4 pt-[120px] lg:pt-0 lg:px-16 py-10">
      {/* Image Carousel */}
      <div className="relative w-full lg:w-1/2 h-96 lg:h-[500px] overflow-hidden">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Townsville Alterations & Formal Wear Image ${index + 1}`}
            fill
            className={`absolute inset-0 transition-opacity duration-1000 rounded-lg ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } object-cover`}
          />
        ))}
      </div>

      {/* Text Section */}
      <header className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0 px-6">
        <h2 className="text-gray-800 text-lg uppercase tracking-wider">
          Reinvent Your Wardrobe. Or Hire One That Turns Heads.
        </h2>

        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mt-4">
          Townsville Alterations & Formal Wear
        </h2>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
          {/* Learn More */}
          <Link
            href="/about-us"
            aria-label="Learn more about Townsville Alterations and Formal Wear"
            className="border border-gray-800 px-6 py-3 text-gray-800 hover:bg-yellow-300 hover:text-gray-900 transition-all text-center"
          >
            Learn More
          </Link>

          {/* Call Us */}
          <a
            href="tel:0421929683"
            aria-label="Call Townsville Alterations and Formal Wear"
            className="flex items-center justify-center gap-2 bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </div>
      </header>
    </div>
  );
};

export default BannerCarousel;
