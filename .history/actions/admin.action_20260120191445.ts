// admin.action.ts - Add wedding gowns collection
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  Timestamp,
  query,
  orderBy,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db } from "@/firebase/config";

export type ImageData = {
  id: string;
  url: string;
  createdAt?: Timestamp;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  storagePath?: string;
};

export type CollectionType = "gallery" | "featured" | "suits" | "wedding-gowns";

// Authentication
export const authAdmin = async (email: string, password: string) => {
  try {
    const snapshot = await getDocs(collection(db, "admin"));
    const credentials = snapshot.docs.map((doc) => doc.data());

    const isMatch = credentials.some(
      (cred) => cred.email === email && cred.password === password
    );

    return isMatch;
  } catch (error) {
    console.error("Authentication error:", error);
    throw new Error("Authentication failed");
  }
};

// Fetch images from any collection
export const fetchImages = async (collectionName: CollectionType): Promise<ImageData[]> => {
  try {
    const q = query(
      collection(db, collectionName),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      url: doc.data().url,
      createdAt: doc.data().createdAt,
      fileName: doc.data().fileName,
      fileSize: doc.data().fileSize,
      fileType: doc.data().fileType,
      storagePath: doc.data().storagePath,
    }));
  } catch (error) {
    console.error(`Error fetching ${collectionName}:`, error);
    throw error;
  }
};

// Upload image
export const uploadImage = async (
  file: File,
  targetCollection: CollectionType
): Promise<string> => {
  try {
    const storage = getStorage();
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop();
    const fileName = `${timestamp}_${file.name.replace(/\s+/g, '_')}`;
    const filePath = `${targetCollection}/${fileName}`;
    const storageRef = ref(storage, filePath);

    // Upload to storage
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    // Save to Firestore
    await addDoc(collection(db, targetCollection), {
      url,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      createdAt: Timestamp.now(),
      storagePath: filePath,
    });

    return url;
  } catch (error) {
    console.error("Upload failed:", error);
    throw new Error("Failed to upload image");
  }
};

// Delete image
export const deleteImage = async (
  imageId: string,
  imageUrl: string,
  collectionName: CollectionType
): Promise<void> => {
  try {
    const storage = getStorage();
    
    // Extract file path from URL
    let filePath = "";
    try {
      filePath = decodeURIComponent(
        new URL(imageUrl).pathname.split("/o/")[1].split("?")[0]
      );
    } catch {
      // If URL parsing fails, try to get path from Firestore
      const imageDoc = await getDocs(query(
        collection(db, collectionName),
        orderBy("createdAt", "desc")
      ));
      const imageData = imageDoc.docs.find(doc => doc.id === imageId);
      filePath = imageData?.data()?.storagePath || "";
    }

    // Delete from storage if path exists
    if (filePath) {
      const fileRef = ref(storage, filePath);
      await deleteObject(fileRef);
    }

    // Delete from Firestore
    await deleteDoc(doc(db, collectionName, imageId));
  } catch (error) {
    console.error("Failed to delete:", error);
    throw new Error("Failed to delete image");
  }
};

// Fetch all collections at once
export const fetchAllImages = async () => {
  try {
    const [gallery, featured, suits, weddingGowns] = await Promise.all([
      fetchImages("gallery"),
      fetchImages("featured"),
      fetchImages("suits"),
      fetchImages("wedding-gowns"),
    ]);
    return { gallery, featured, suits, weddingGowns };
  } catch (error) {
    console.error("Error fetching all images:", error);
    throw error;
  }
};

// Validate file
export const validateFile = (file: File | null): string | null => {
  if (!file) return "No file selected";
  
  const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!validTypes.includes(file.type)) {
    return "Only JPEG, PNG, WebP, and GIF formats are supported";
  }
  
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    return "File size must be less than 5MB";
  }
  
  return null;
};