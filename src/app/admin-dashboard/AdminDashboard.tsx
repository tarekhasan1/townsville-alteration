"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    Timestamp,
} from "firebase/firestore";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import { db } from "@/firebase/config";

type ImageData = { id: string; url: string };

export default function AdminDashboard() {
    const [gallery, setGallery] = useState<ImageData[]>([]);
    const [featured, setFeatured] = useState<ImageData[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const [uploadTarget, setUploadTarget] = useState<"gallery" | "featured">(
        "gallery"
    );
    const [uploading, setUploading] = useState(false);
    const [deleteModal, setDeleteModal] = useState<{
        show: boolean;
        id: string;
        url: string;
        collection: string;
    } | null>(null);

    const fetchImages = async () => {
        const fetchFrom = async (collectionName: string) => {
            const snapshot = await getDocs(collection(db, collectionName));
            return snapshot.docs.map((doc) => ({
                id: doc.id,
                url: doc.data().url,
            }));
        };
        setGallery(await fetchFrom("gallery"));
        setFeatured(await fetchFrom("featured"));
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;
        setUploading(true);
        const storage = getStorage();
        const filePath = `${uploadTarget}/${file.name}`;
        const storageRef = ref(storage, filePath);

        try {
            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);
            await addDoc(collection(db, uploadTarget), {
                url,
                createdAt: Timestamp.now(),
            });
            setFile(null);
            fetchImages();
        } catch (err) {
            console.error("Upload failed:", err);
        } finally {
            setUploading(false);
        }
    };

    const confirmDelete = async () => {
        if (!deleteModal) return;
        const { id, url, collection } = deleteModal;
        const storage = getStorage();
        const filePath = decodeURIComponent(
            new URL(url).pathname.split("/o/")[1].split("?")[0]
        );
        const fileRef = ref(storage, filePath);

        try {
            await deleteObject(fileRef);
            await deleteDoc(doc(db, collection, id));
            fetchImages();
        } catch (err) {
            console.error("Failed to delete:", err);
        } finally {
            setDeleteModal(null);
        }
    };

    const renderImageGrid = (
        images: ImageData[],
        collection: "gallery" | "featured"
    ) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
                <div
                    key={img.id}
                    className="relative group shadow rounded-lg overflow-hidden"
                >
                    <Image
                        src={img.url}
                        alt={`Image ${i}`}
                        width={300}
                        height={200}
                        className="object-cover w-full h-48"
                    />
                    <div className="absolute top-2 right-2 md:opacity-0 group-hover:opacity-100 transition">
                        <button
                            onClick={() =>
                                setDeleteModal({
                                    show: true,
                                    id: img.id,
                                    url: img.url,
                                    collection,
                                })
                            }
                            className="px-2 py-1 text-xs bg-red-600 hover:bg-red-700 text-white rounded"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="p-6 mx-auto space-y-12 text-gray-800">
            {/* Upload Form */}
            <section className="bg-white p-6 rounded-lg shadow space-y-4">
                <h2 className="text-2xl font-semibold">Upload Image</h2>
                <p className="text-sm text-gray-500">
                    Recommended size: <strong>800x600px</strong> for gallery,{" "}
                    <strong>1200x600px</strong> for featured. <br />
                    Only JPEG, PNG formats supported.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <input
                    className="ps-1 mx-auto w-full border border-dotted border-gray-600"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <select
                        value={uploadTarget}
                        onChange={(e) =>
                            setUploadTarget(
                                e.target.value as "gallery" | "featured"
                            )
                        }
                        className="border mx-auto hover:bg-gray-50 rounded px-3 py-2"
                    >
                        <option value="gallery">Gallery</option>
                        <option value="featured">Featured</option>
                    </select>
                    <button
                        onClick={handleUpload}
                        disabled={uploading}
                        className="bg-yellow-300 hover:bg-yellow-400 text-white px-4 py-2 rounded disabled:opacity-50"
                    >
                        {uploading ? "Uploading..." : "Upload"}
                    </button>
                </div>
            </section>

            {/* Featured Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Featured</h2>
                {renderImageGrid(featured, "featured")}
            </section>

            {/* Gallery Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                {renderImageGrid(gallery, "gallery")}
            </section>

            {/* Delete Confirmation Modal */}
            {deleteModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 shadow-lg text-center w-[90%] max-w-md">
                        <h3 className="text-xl font-semibold mb-4">
                            Confirm Deletion
                        </h3>
                        <p className="mb-6 text-gray-600">
                            Are you sure you want to delete this image?
                        </p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => setDeleteModal(null)}
                                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
