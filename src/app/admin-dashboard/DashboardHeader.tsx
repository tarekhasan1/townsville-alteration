// components/DashboardHeader.tsx
'use client';

import { CollectionType } from '../../../actions/admin.action';

interface DashboardHeaderProps {
  activeSection: CollectionType | 'dashboard' | 'upload';
  onUploadClick: () => void;
  stats?: {
    total: number;
    gallery: number;
    featured: number;
    suits: number;
    weddingGowns: number;
  };
}

const sectionTitles: Record<string, string> = {
  dashboard: 'Dashboard Overview',
  gallery: 'Gallery Management',
  featured: 'Featured Images',
  suits: 'Suit Collection',
  'wedding-gowns': 'Wedding Gowns',
  upload: 'Upload New Image',
};

export default function DashboardHeader({ activeSection, onUploadClick, stats }: DashboardHeaderProps) {
  return (
    <header className="bg-white rounded-2xl shadow-sm p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {sectionTitles[activeSection] || 'Admin Panel'}
          </h1>
          <p className="text-gray-600 mt-1">
            Manage and organize your website content efficiently
          </p>
        </div>
        
        {activeSection !== 'upload' && (
          <button
            onClick={onUploadClick}
            className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Upload New
          </button>
        )}
      </div>

      {activeSection === 'dashboard' && stats && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
            <div className="text-2xl font-bold text-blue-700">{stats.total}</div>
            <div className="text-sm text-blue-600 mt-1">Total Images</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
            <div className="text-2xl font-bold text-purple-700">{stats.gallery}</div>
            <div className="text-sm text-purple-600 mt-1">Gallery</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl">
            <div className="text-2xl font-bold text-yellow-700">{stats.featured}</div>
            <div className="text-sm text-yellow-600 mt-1">Featured</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
            <div className="text-2xl font-bold text-green-700">{stats.suits}</div>
            <div className="text-sm text-green-600 mt-1">Suits</div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl">
            <div className="text-2xl font-bold text-pink-700">{stats.weddingGowns}</div>
            <div className="text-sm text-pink-600 mt-1">Wedding Gowns</div>
          </div>
        </div>
      )}
    </header>
  );
}