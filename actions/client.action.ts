// lib/client.actions.ts
'use client';

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export type CollectionType = 'gallery' | 'featured' | 'suits' | 'wedding-gowns';

export interface ImageData {
  id: string;
  url: string;
  fileName?: string;
  fileSize?: number;
  uploadedAt?: Date;
}

// Fetch images from a specific collection
export const fetchCollectionImages = async (collectionName: CollectionType): Promise<ImageData[]> => {
  try {
    const snapshot = await getDocs(collection(db, collectionName));
    const images = snapshot.docs.map((doc) => ({
      id: doc.id,
      url: doc.data().url as string,
      fileName: doc.data().fileName as string,
      fileSize: doc.data().fileSize as number,
      uploadedAt: doc.data().uploadedAt?.toDate() as Date,
    }));
    return images;
  } catch (error) {
    console.error(`Error fetching ${collectionName} images:`, error);
    throw new Error(`Failed to fetch ${collectionName} images`);
  }
};

// Fetch all images from all collections
export const fetchAllImages = async (): Promise<{
  gallery: ImageData[];
  featured: ImageData[];
  suits: ImageData[];
  weddingGowns: ImageData[];
}> => {
  try {
    const [gallery, featured, suits, weddingGowns] = await Promise.all([
      fetchCollectionImages('gallery'),
      fetchCollectionImages('featured'),
      fetchCollectionImages('suits'),
      fetchCollectionImages('wedding-gowns'),
    ]);
    
    return { gallery, featured, suits, weddingGowns };
  } catch (error) {
    console.error('Error fetching all images:', error);
    throw new Error('Failed to fetch images');
  }
};

// Fetch images with pagination
export const fetchPaginatedImages = async (
  collectionName: CollectionType,
  page: number,
  itemsPerPage: number
): Promise<{
  images: ImageData[];
  total: number;
  totalPages: number;
}> => {
  try {
    const allImages = await fetchCollectionImages(collectionName);
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedImages = allImages.slice(startIndex, endIndex);
    const totalPages = Math.ceil(allImages.length / itemsPerPage);
    
    return {
      images: paginatedImages,
      total: allImages.length,
      totalPages,
    };
  } catch (error) {
    console.error(`Error fetching paginated ${collectionName} images:`, error);
    throw new Error(`Failed to fetch paginated ${collectionName} images`);
  }
};