// components/ImageGrid.tsx
'use client';

import Image from "next/image";
import type { ImageData, CollectionType } from "../../../types/admin.types";

interface ImageGridProps {
  title: string;
  images: ImageData[];
  collection: CollectionType;
  onDeleteClick: (id: string, url: string, collection: CollectionType) => void;
}

export default function ImageGrid({
  title,
  images,
  collection,
  onDeleteClick,
}: ImageGridProps) {
  if (images.length === 0) {
    return (
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 w-full">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
        <div className="text-center py-12 text-gray-500">
          <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>No images found in {title.toLowerCase()}</p>
          <p className="text-sm mt-2">Upload some images to get started</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 mt-1">
            {images.length} {images.length === 1 ? 'image' : 'images'}
          </p>
        </div>
        <div className="text-sm text-gray-500 text-right sm:text-left">
          Click on any image to view options
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="group relative overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white"
          >
            <div className="aspect-[4/3] relative bg-gray-50">
              {/* Add unoptimized if images are from external sources */}
              <Image
                src={img.url}
                alt={`${title} image`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={false}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gray-100">
                        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    `;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gray-400 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
            
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => onDeleteClick(img.id, img.url, collection)}
                className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-lg transition-colors"
                title="Delete image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>

            <div className="p-3 bg-white">
              {img.fileName && (
                <div className="text-xs text-gray-600 truncate" title={img.fileName}>
                  {img.fileName}
                </div>
              )}
              {img.fileSize && (
                <div className="text-xs text-gray-500 mt-1">
                  {(img.fileSize / 1024 / 1024).toFixed(2)} MB
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}