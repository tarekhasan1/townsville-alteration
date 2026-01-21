"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

const itemsPerPage = 6;

export default function SuitsForSaleSection() {
  const [suitUrls, setSuitUrls] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchSuits = async () => {
      try {
        const snapshot = await getDocs(collection(db, "suits"));
        const urls = snapshot.docs.map((doc) => doc.data().url as string);
        setSuitUrls(urls);
      } catch (error) {
        console.error("Error fetching suits:", error);
      }
    };

    fetchSuits();
  }, []);

  const totalPages = Math.ceil(suitUrls.length / itemsPerPage);
  const paginatedSuits = suitUrls.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section
      id="suits-for-sale"
      className="bg-white py-16 px-6 md:px-12 lg:px-24 text-gray-800"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Suits – Available to Buy
        </h2>
        <div className="w-[80vw] border-b border-[2px] border-yellow-300 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Own your look — browse our premium suits crafted for fit, comfort, and standout style.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginatedSuits.map((url, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 bg-yellow-50"
            >
              <Image
                src={url}
                alt={`Suit for sale ${index + 1}`}
                width={500}
                height={600}
                className="w-full h-[300px] object-cover transition duration-300 group-hover:brightness-90"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-4">
                <a
                  href="mailto:sales@townsvillealterationsformalwear.com?subject=Interested in Buying a Suit"
                  className="inline-block px-4 py-2 bg-yellow-300 text-gray-900 font-semibold rounded-md hover:bg-yellow-400 transition"
                >
                  Contact to Buy
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10 space-x-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
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
              setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
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
