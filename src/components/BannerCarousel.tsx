"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
    // "/products/1.jpeg",
    // "/products/2.jpeg",
    "/products/3.jpeg",
    "/products/4.jpeg",
    "/products/5.jpeg",
    "/products/6.jpeg",
    "/products/8.jpeg",
    "/products/9.jpeg",
    // "/products/10.jpeg",
    // "/products/11.jpeg",
    // "/products/12.jpeg",
    // "/products/13.jpeg",
    // "/products/14.jpeg",
    // "/products/15.jpeg",
    // "/products/16.jpeg",
    // "/products/17.jpeg",
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
                <h2 className="text-gray-800 text-lg uppercase tracking-wider">
                    Reinvent Your Wardrobe. Or Hire One That Turns Heads.
                </h2>
                <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mt-4">
                    Townsville Alterations & Formal Wear
                </h2>
                <div className="mt-12">
                    <Link
                        href="/about-us"
                        className="mt-6 border border-gray-800 px-6 py-3 text-gray-800 hover:bg-yellow-300 hover:cursor-pointer hover:text-gray-900 hover:ease-in-out hover:border-gray-50 transition-all"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerCarousel;
