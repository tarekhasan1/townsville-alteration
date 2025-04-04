"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    { name: "James", text: "Great service! My suit was altered perfectly." },
    {
        name: "James",
        text: "Highly recommend! The team did an amazing job on my wedding dress.",
    },
    {
        name: "James",
        text: "Quick and professional. My racewear fit like a glove!",
    },
    { name: "James", text: "Amazing craftsmanship and attention to detail!" },
    { name: "James", text: "Best tailoring experience I've ever had." },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);

    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(3);
            } else if (window.innerWidth >= 640) {
                setItemsToShow(2);
            } else {
                setItemsToShow(1);
            }
        };

        updateItemsToShow();
        window.addEventListener("resize", updateItemsToShow);
        return () => window.removeEventListener("resize", updateItemsToShow);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - itemsToShow : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= testimonials.length - itemsToShow ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="bg-[#f2f2e5] min-h-[85vh] flex flex-col items-center justify-center py-12 px-6 md:px-12 lg:px-12 text-gray-800">
            <div className="mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    What Our Clients Say
                </h1>
                <hr className="border-gray-400 my-4" />
            </div>

            <div className="relative mx-auto flex items-center justify-center">
                <button
                    onClick={prevSlide}
                    className="absolute left-0 p-2 bg-gray-200 rounded-full hover:bg-gray-300 z-10"
                >
                    <ChevronLeft size={24} />
                </button>

                <div className="flex overflow-hidden w-full justify-center">
                    <div
                        className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${
                                currentIndex * (100 / itemsToShow)
                            }%)`,
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="border border-gray-600 rounded-t-full p-6 h-56 flex flex-col items-center justify-center w-full text-center mx-2 min-w-[calc(96.5%/3)]"
                            >
                                <h3 className="font-bold text-center mb-4 mx-auto">
                                    {testimonial.name}
                                </h3>
                                <p className="text-gray-700 italic">
                                    {testimonial.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 p-2 bg-gray-200 rounded-full hover:bg-gray-300 z-10"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
}
