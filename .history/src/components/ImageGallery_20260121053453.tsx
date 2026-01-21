/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
// components/ImageGallery.tsx
'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchPaginatedImages, CollectionType, ImageData } from "../../actions/client.action";

interface ImageGalleryProps {
  collection: CollectionType;
  title: string;
  description: string;
  itemsPerPage?: number;
  showExploreButton?: boolean;
  showContactButton?: boolean;
  contactEmail?: string;
  contactSubject?: string;
  buttonText?: string;
  showCallButton?: boolean;
  phoneNumber?: string;
  callButtonText?: string;
}

export default function ImageGallery({
  collection,
  title,
  description,
  itemsPerPage = 6,
  showExploreButton = false,
  showContactButton = false,
  contactEmail = "",
  contactSubject = "",
  buttonText = "Contact to Buy",
  showCallButton = false,
  phoneNumber = "+61412345678", // Default Australian number format
  callButtonText = "Call Us",
}: ImageGalleryProps) {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchPaginatedImages(collection, currentPage, itemsPerPage);
      setImages(result.images);
      setTotalPages(result.totalPages);
      setTotalImages(result.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load images");
      console.error("Error loading images:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, [currentPage, collection, itemsPerPage]);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  if (loading && images.length === 0) {
    return (
      <section className="bg-gradient-to-br from-white to-yellow-50 py-16 px-6 md:px-12 lg:px-24 text-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <div className="w-[80vw] border-b border-[2px] border-yellow-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">{description}</p>
          
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
            <span className="ml-3 text-gray-600">Loading images...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error && images.length === 0) {
    return (
      <section className="bg-gradient-to-br from-white to-yellow-50 py-16 px-6 md:px-12 lg:px-24 text-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <div className="w-[80vw] border-b border-[2px] border-yellow-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">{description}</p>
          
          <div className="text-center py-12 text-red-500">
            <p className="text-lg mb-4">{error}</p>
            <button
              onClick={loadImages}
              className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-white to-yellow-50 py-16 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="w-[80vw] border-b border-[2px] border-yellow-300 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">{description}</p>

        {loading && images.length > 0 && (
          <div className="flex justify-center mb-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-500"></div>
            <span className="ml-2 text-gray-600">Loading more...</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              {/* Call Us Button - Above the image */}
              {showCallButton && (
                <div className="absolute top-3 left-3 right-3 z-10">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    onClick={(e) => {
                      // Analytics or tracking can be added here
                      console.log(`Call button clicked for ${title}`);
                    }}
                  >
                    <svg 
                      className="w-4 h-4 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                      />
                    </svg>
                    {callButtonText}
                  </a>
                </div>
              )}

              {/* Image */}
              <div className={`${showCallButton ? 'pt-16' : ''}`}>
                <Image
                  src={image.url}
                  alt={image.fileName || `${title} image`}
                  width={500}
                  height={600}
                  className="w-full h-[300px] object-cover transition duration-300 group-hover:brightness-90"
                  loading="lazy"
                />
              </div>
              
              {/* Contact Button - Below the image */}
              {showContactButton && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 via-white/80 to-transparent backdrop-blur-sm p-4">
                  <a
                    href={`mailto:${contactEmail}?subject=${encodeURIComponent(contactSubject)}`}
                    className="inline-block px-4 py-2 bg-yellow-300 text-gray-900 font-semibold rounded-md hover:bg-yellow-400 transition shadow-md hover:shadow-lg"
                  >
                    {buttonText}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 space-x-6">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0 || loading}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>

            <span className="text-gray-700 font-medium">
              Page {currentPage + 1} of {totalPages} ({totalImages} total)
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1 || loading}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next
            </button>
          </div>
        )}

        {showExploreButton && (
          <div className="mt-10">
            <a
              href="/gallery"
              aria-label={`Explore full gallery of ${title}`}
              className="inline-block px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
            >
              Explore All
            </a>
          </div>
        )}
      </div>
    </section>
  );
}