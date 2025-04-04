"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
    "/banner/banner1.jpg",
    "/banner/banner2.jpg",
    "/banner/banner3.jpg",
    "/banner/banner4.jpg",
    "/banner/banner5.jpg",
    "/banner/banner6.jpg",
    "/banner/banner7.jpg",
    "/banner/banner1.jpg",
    "/banner/banner2.jpg",
    "/banner/banner3.jpg",
    "/banner/banner4.jpg",
    "/banner/banner5.jpg",
    "/banner/banner6.jpg",
    "/banner/banner7.jpg",
    "/banner/banner1.jpg",
    "/banner/banner2.jpg",
    "/banner/banner3.jpg",
    "/banner/banner4.jpg",
    "/banner/banner5.jpg",
    "/banner/banner6.jpg",
    "/banner/banner7.jpg",
];

const itemsPerPage = 6;

export default function Gallery() {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(images.length / itemsPerPage);
    const paginatedImages = images.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div id="gallery" className="p-6 min-h-[80vh]">
            <h2 className="text-4xl text-center md:text-5xl font-semibold text-gray-800 mb-6">
                Gallery
            </h2>
            <hr className="mb-6 text-yellow-300 border-[2px]" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {paginatedImages.map((src, index) => (
                    <Image
                        width={300}
                        height={400}
                        key={index}
                        src={src}
                        alt={`Gallery Image ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                ))}
            </div>
            <div className="flex justify-center mt-6 space-x-4">
                <button
                    className="hover:cursor-pointer"
                    onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 0))
                    }
                    disabled={currentPage === 0}
                >
                    Previous
                </button>
                <span className="text-gray-600">
                    Page {currentPage + 1} of {totalPages}
                </span>
                <button
                    className="hover:cursor-pointer"
                    onClick={() =>
                        setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages - 1)
                        )
                    }
                    disabled={currentPage === totalPages - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
