"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/banner/banner1.jpg",
  "/banner/banner2.jpg",
  "/banner/banner3.jpg",
  "/banner/banner4.jpg",
  "/banner/banner5.jpg",
  "/banner/banner6.jpg",
  "/banner/banner7.jpg",
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
    <div className="relative w-full min-h-[100vh] flex flex-col lg:flex-row items-center bg-white px-4 pt-[100px] lg:pt-0 lg:px-16 py-10">
      {/* Image Carousel */}
      <div className="relative w-full lg:w-1/2 h-96 lg:h-[500px] overflow-hidden">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Carousel Image"
            fill
            className={`absolute inset-0 transition-opacity duration-1000 rounded-lg ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } object-cover`}
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0 px-6">
        <h2 className="text-gray-700 text-lg uppercase tracking-wider">
          Reinvent Your Wardrobe. Or Hire One That Turns Heads.
        </h2>
        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800 mt-4">
          Townsville Alterations & Formal Wear
        </h2>
        <button className="mt-6 border border-gray-800 px-6 py-3 text-gray-800 hover:bg-yellow-300 hover:cursor-pointer hover:text-gray-900 hover:ease-in-out hover:border-gray-50 transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default BannerCarousel;
