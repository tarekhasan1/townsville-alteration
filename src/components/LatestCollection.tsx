"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

const itemsPerPage = 6;

export default function LatestCollection() {
    const [images, setImages] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const snapshot = await getDocs(collection(db, "featured"));
                const urls = snapshot.docs.map(
                    (doc) => doc.data().url as string
                );
                setImages(urls);
            } catch (error) {
                console.error("Error fetching featured images:", error);
            }
        };

        fetchImages();
    }, []);

    const totalPages = Math.ceil(images.length / itemsPerPage);
    const paginatedImages = images.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <section
            id="latest-collection"
            className="bg-gradient-to-br from-white to-yellow-50 py-16 px-6 md:px-12 lg:px-24 text-gray-800"
        >
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Latest Collection
                </h2>
                <div className="w-[80vw] border-b border-[2px] border-yellow-300 mx-auto mb-8"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                    Explore our freshest styles and most popular
                    looks—handpicked for your standout moments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {paginatedImages.map((src, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                        >
                            <Image
                                src={src}
                                alt={`Collection Image ${index + 1}`}
                                width={500}
                                height={600}
                                className="w-full h-[300px] object-cover transition duration-300 group-hover:brightness-90"
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

                <div className="mt-10">
                    <Link
                        href="/gallery"
                        className="inline-block px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
                    >
                        Explore All
                    </Link>
                </div>
            </div>
        </section>
    );
}
