// components/UploadSection.tsx
'use client';

import { useState } from "react";
import type { CollectionType } from "../../../types/admin.types";

interface UploadSectionProps {
  uploadTarget: CollectionType;
  onTargetChange: (target: CollectionType) => void;
  onUpload: (file: File, target: CollectionType) => Promise<boolean>;
}

export default function UploadSection({
  uploadTarget,
  onTargetChange,
  onUpload,
}: UploadSectionProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    setUploading(true);
    const success = await onUpload(file, uploadTarget);
    setUploading(false);
    
    if (success) {
      setFile(null);
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  };

  const collectionInfo: Record<CollectionType, { title: string; desc: string }> = {
    gallery: { 
      title: "Gallery", 
      desc: "General gallery images" 
    },
    featured: { 
      title: "Featured", 
      desc: "Highlighted images" 
    },
    suits: { 
      title: "Suits", 
      desc: "Suit collection" 
    },
    "wedding-gowns": { 
      title: "Wedding Gowns", 
      desc: "Wedding gown collection" 
    },
  };

  const allCollections: CollectionType[] = ["gallery", "featured", "suits", "wedding-gowns"];

  return (
    <section className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
      <div>
        <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">Upload Image</h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Upload images to different sections of your website
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {allCollections.map((col) => (
          <button
            key={col}
            onClick={() => onTargetChange(col)}
            className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
              uploadTarget === col
                ? "border-yellow-400 bg-yellow-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="text-left">
              <div className="font-medium text-gray-800 text-sm sm:text-base">{collectionInfo[col].title}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{collectionInfo[col].desc}</div>
              <div className="mt-1 sm:mt-2 text-xs text-gray-400">Click to select</div>
            </div>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <label className="cursor-pointer w-full">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 sm:p-8 text-center hover:border-yellow-400 transition-colors">
              <div className="flex flex-col items-center gap-3">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                {file ? (
                  <div className="text-center">
                    <p className="font-medium text-gray-700 text-sm sm:text-base">{file.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="font-medium text-gray-700 text-sm sm:text-base">
                      Choose an image
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      PNG, JPG, WebP up to 5MB
                    </p>
                  </div>
                )}
                <button
                  type="button"
                  className="mt-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById('file-input')?.click();
                  }}
                >
                  Browse Files
                </button>
              </div>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </label>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            className="px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-medium rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            {uploading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Uploading...
              </span>
            ) : (
              `Upload to ${collectionInfo[uploadTarget].title}`
            )}
          </button>
        </div>
      </div>
    </section>
  );
}