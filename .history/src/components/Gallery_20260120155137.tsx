'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

const itemsPerPage = 12;

export default function Gallery() {
    const [images, setImages] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(0); 


    const totalPages = Math.ceil(images.length / itemsPerPage);
    const paginatedImages = images.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const snapshot = await getDocs(collection(db, "gallery"));
                const urls = snapshot.docs.map(
                    (doc) => doc.data().url as string
                );
                setImages(urls);
                console.log("Fetched gallery images:", urls);
            } catch (error) {
                console.error("Error fetching gallery images:", error);
            }
        };

        fetchImages();
    }, []);

    return (
        <section
            id="gallery"
            aria-labelledby="gallery-heading"
            className="bg-gradient-to-br from-white to-yellow-50 py-16 px-6 md:px-12 lg:px-24 text-gray-800"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2
                    id="gallery-heading"
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                >
                    Gallery
                </h2>
                <hr className="w-20 border-yellow-400 border-[3px] mx-auto my-6 rounded-full" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                    A peek into our work, transformations, and the beautiful
                    details we’ve tailored for real moments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {paginatedImages.map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                width={400}
                                height={500}
                                className="w-full h-72 object-cover"
                                loading="lazy"  // Add lazy loading for SEO
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center mt-10 space-x-6">
                    <button
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 0))
                        }
                        disabled={currentPage === 0}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                        Previous
                    </button>

                    <span className="text-gray-700 font-medium">
                        Page {currentPage + 1} of {totalPages}
                    </span>

                    <button
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages - 1)
                            )
                        }
                        disabled={currentPage === totalPages - 1}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}
