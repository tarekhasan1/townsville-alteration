// AdminDashboard.tsx
'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ImageData,
  CollectionType,
  fetchAllImages,
  uploadImage,
  deleteImage,
  validateFile,
} from "../../../actions/admin.action";
import UploadSection from "./UploadSection";
import ImageGrid from "./ImageGrid";

export default function AdminDashboard() {
  const [gallery, setGallery] = useState<ImageData[]>([]);
  const [featured, setFeatured] = useState<ImageData[]>([]);
  const [suits, setSuits] = useState<ImageData[]>([]);
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
  });

  const loadImages = async () => {
    setLoading(true);
    try {
      const { gallery, featured, suits } = await fetchAllImages();
      setGallery(gallery);
      setFeatured(featured);
      setSuits(suits);
      setStats({
        total: gallery.length + featured.length + suits.length,
        gallery: gallery.length,
        featured: featured.length,
        suits: suits.length,
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

  const handleUpload = async (file: File, target: CollectionType) => {
    const validationError = validateFile(file);
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      await uploadImage(file, target);
      await loadImages();
      return true;
    } catch (error) {
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
    } catch (error) {
      alert("Failed to delete image");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading images...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-gray-800">{stats.total}</div>
          <div className="text-sm text-gray-600 mt-1">Total Images</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-gray-800">{stats.gallery}</div>
          <div className="text-sm text-gray-600 mt-1">Gallery Images</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-gray-800">{stats.featured}</div>
          <div className="text-sm text-gray-600 mt-1">Featured Images</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-gray-800">{stats.suits}</div>
          <div className="text-sm text-gray-600 mt-1">Suit Images</div>
        </div>
      </div>

      {/* Upload Section */}
      <UploadSection
        uploadTarget={uploadTarget}
        onTargetChange={setUploadTarget}
        onUpload={handleUpload}
      />

      {/* Sections */}
      <div className="space-y-12">
        <ImageGrid
          title="Featured Images"
          images={featured}
          collection="featured"
          onDeleteClick={(id, url) =>
            setDeleteModal({ show: true, id, url, collection: "featured" })
          }
        />
        
        <ImageGrid
          title="Gallery Images"
          images={gallery}
          collection="gallery"
          onDeleteClick={(id, url) =>
            setDeleteModal({ show: true, id, url, collection: "gallery" })
          }
        />
        
        <ImageGrid
          title="Suit Images"
          images={suits}
          collection="suits"
          onDeleteClick={(id, url) =>
            setDeleteModal({ show: true, id, url, collection: "suits" })
          }
        />
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
                This image will be permanently removed. This action cannot be undone.
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