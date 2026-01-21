// AdminDashboard.tsx
'use client';

import { useEffect, useState } from "react";
import { fetchAllImages, uploadImage, deleteImage, validateFile } from "../../../actions/admin.action";
import type { ImageData, CollectionType } from "../../../types/admin.types";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import MainContent from "./MainContent";

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<CollectionType | 'dashboard' | 'upload'>('dashboard');
  const [gallery, setGallery] = useState<ImageData[]>([]);
  const [featured, setFeatured] = useState<ImageData[]>([]);
  const [suits, setSuits] = useState<ImageData[]>([]);
  const [weddingGowns, setWeddingGowns] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadTarget, setUploadTarget] = useState<CollectionType>("gallery");
  const [deleteModal, setDeleteModal] = useState<{
    show: boolean;
    id: string;
    url: string;
    collection: CollectionType;
  } | null>(null);
  const [stats, setStats] = useState({
    total: 0,
    gallery: 0,
    featured: 0,
    suits: 0,
    weddingGowns: 0,
  });

  const loadImages = async () => {
    setLoading(true);
    try {
      const { gallery, featured, suits, weddingGowns } = await fetchAllImages();
      setGallery(gallery);
      setFeatured(featured);
      setSuits(suits);
      setWeddingGowns(weddingGowns);
      setStats({
        total: gallery.length + featured.length + suits.length + weddingGowns.length,
        gallery: gallery.length,
        featured: featured.length,
        suits: suits.length,
        weddingGowns: weddingGowns.length,
      });
    } catch (error) {
      console.error("Failed to load images:", error);
      alert("Failed to load images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleUpload = async (file: File, target: CollectionType): Promise<boolean> => {
    const validationError = validateFile(file);
    if (validationError) {
      alert(validationError);
      return false;
    }

    try {
      await uploadImage(file, target);
      await loadImages();
      alert(`Image uploaded successfully to ${target}!`);
      return true;
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload image");
      return false;
    }
  };

  const handleDelete = async () => {
    if (!deleteModal) return;
    
    try {
      await deleteImage(
        deleteModal.id,
        deleteModal.url,
        deleteModal.collection
      );
      await loadImages();
      setDeleteModal(null);
      alert("Image deleted successfully!");
    } catch (error) {
      alert("Failed to delete image");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin-authenticated');
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-[80px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
            </div>
          </div>
          <p className="mt-4 text-gray-600 font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex">
        <Sidebar 
          activeSection={activeSection as CollectionType}
          onSectionChange={(section) => setActiveSection(section)}
          onLogout={handleLogout}
        />
        
        <main className="flex-1 lg:ml-64">
          <div className="p-4 md:p-6 lg:p-8">
            <DashboardHeader
              activeSection={activeSection}
              onUploadClick={() => setActiveSection('upload')}
              stats={stats}
            />
            
            <MainContent
              activeSection={activeSection}
              images={{ gallery, featured, suits, weddingGowns }}
              stats={stats}
              onUpload={handleUpload}
              onDeleteClick={(id, url, collection) =>
                setDeleteModal({ show: true, id, url, collection })
              }
              uploadTarget={uploadTarget}
              onTargetChange={setUploadTarget}
            />
          </div>
        </main>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 shadow-2xl w-full max-w-md">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.196 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Delete Image
              </h3>
              <p className="text-gray-600 mb-6">
                This image will be permanently removed from {deleteModal.collection}. This action cannot be undone.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setDeleteModal(null)}
                  className="px-6 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
                >
                  Delete Image
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}