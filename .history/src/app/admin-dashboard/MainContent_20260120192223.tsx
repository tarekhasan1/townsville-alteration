// components/MainContent.tsx
'use client';

import type { CollectionType, ImageData } from "../../../types/admin.types";
import UploadSection from "./UploadSection";
import ImageGrid from "./ImageGrid";

interface MainContentProps {
  activeSection: CollectionType | 'dashboard' | 'upload';
  images: {
    gallery: ImageData[];
    featured: ImageData[];
    suits: ImageData[];
    weddingGowns: ImageData[];
  };
  stats: {
    total: number;
    gallery: number;
    featured: number;
    suits: number;
    weddingGowns: number;
  };
  onUpload: (file: File, target: CollectionType) => Promise<boolean>;
  onDeleteClick: (id: string, url: string, collection: CollectionType) => void;
  uploadTarget: CollectionType;
  onTargetChange: (target: CollectionType) => void;
}

export default function MainContent({
  activeSection,
  images,
  stats,
  onUpload,
  onDeleteClick,
  uploadTarget,
  onTargetChange,
}: MainContentProps) {
  if (activeSection === 'dashboard') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-sm border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">Gallery Images</p>
                <p className="text-3xl font-bold text-blue-900 mt-2">{stats.gallery}</p>
              </div>
              <div className="text-3xl">🖼️</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-sm border border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700">Featured Images</p>
                <p className="text-3xl font-bold text-purple-900 mt-2">{stats.featured}</p>
              </div>
              <div className="text-3xl">⭐</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-sm border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Suits Collection</p>
                <p className="text-3xl font-bold text-green-900 mt-2">{stats.suits}</p>
              </div>
              <div className="text-3xl">👔</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl shadow-sm border border-pink-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-pink-700">Wedding Gowns</p>
                <p className="text-3xl font-bold text-pink-900 mt-2">{stats.weddingGowns}</p>
              </div>
              <div className="text-3xl">👰</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              onClick={() => onTargetChange('gallery')}
              className="p-4 rounded-xl border-2 border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-colors text-left"
            >
              <div className="font-medium text-gray-800">Upload to Gallery</div>
              <div className="text-sm text-gray-500 mt-1">Add new gallery images</div>
            </button>
            <button 
              onClick={() => onTargetChange('featured')}
              className="p-4 rounded-xl border-2 border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-colors text-left"
            >
              <div className="font-medium text-gray-800">Add Featured Image</div>
              <div className="text-sm text-gray-500 mt-1">Highlight important images</div>
            </button>
            <button 
              onClick={() => onTargetChange('wedding-gowns')}
              className="p-4 rounded-xl border-2 border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-colors text-left"
            >
              <div className="font-medium text-gray-800">Add Wedding Gown</div>
              <div className="text-sm text-gray-500 mt-1">Expand wedding collection</div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'upload') {
    return (
      <UploadSection
        uploadTarget={uploadTarget}
        onTargetChange={onTargetChange}
        onUpload={onUpload}
      />
    );
  }

  // Render specific section
  const sections: Record<CollectionType, { title: string, images: ImageData[] }> = {
    gallery: { title: 'Gallery Images', images: images.gallery },
    featured: { title: 'Featured Images', images: images.featured },
    suits: { title: 'Suits Collection', images: images.suits },
    'wedding-gowns': { title: 'Wedding Gowns', images: images.weddingGowns },
  };

  const currentSection = sections[activeSection as CollectionType];

  return (
    <ImageGrid
      title={currentSection.title}
      images={currentSection.images}
      collection={activeSection as CollectionType}
      onDeleteClick={(id, url) => onDeleteClick(id, url, activeSection as CollectionType)}
    />
  );
}