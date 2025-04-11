"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
} from "firebase/firestore"; // Adjust path if needed
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "@/firebase/config";

export default function AdminDashboard() {
    const [products, setProducts] = useState<{ id: string; url: string }[]>([]);
    const [gallery, setGallery] = useState<{ id: string; url: string }[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const fetchSection = async (section: "products" | "gallery") => {
                const querySnapshot = await getDocs(collection(db, section));
                return querySnapshot.docs.map((docSnap) => ({
                    id: docSnap.id,
                    url: docSnap.data().url,
                }));
            };

            setProducts(await fetchSection("products"));
            setGallery(await fetchSection("gallery"));
        };

        fetchImages();
    }, []);

    const handleUpload = async (section: "products" | "gallery") => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";

        fileInput.onchange = async () => {
            const file = fileInput.files?.[0];
            if (!file) return;

            const fileRef = ref(storage, `${section}/${uuidv4()}`);
            await uploadBytes(fileRef, file);
            const downloadURL = await getDownloadURL(fileRef);

            const docRef = await addDoc(collection(db, section), {
                url: downloadURL,
            });
            const newEntry = { id: docRef.id, url: downloadURL };

            if (section === "products")
                setProducts((prev) => [newEntry, ...prev]);
            else setGallery((prev) => [newEntry, ...prev]);
        };

        fileInput.click();
    };

    const handleDelete = async (
        index: number,
        section: "products" | "gallery"
    ) => {
        const data = section === "products" ? products : gallery;
        const set = section === "products" ? setProducts : setGallery;

        const item = data[index];
        const imageRef = ref(
            storage,
            decodeURIComponent(
                new URL(item.url).pathname.split("/o/")[1].split("?")[0]
            )
        );

        await deleteObject(imageRef);
        await deleteDoc(doc(db, section, item.id));

        const updated = [...data];
        updated.splice(index, 1);
        set(updated);
    };

    const renderSection = (
        title: string,
        data: { id: string; url: string }[],
        section: "products" | "gallery"
    ) => (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.map(({ id, url }, i) => (
                    <div key={id} className="relative group">
                        <Image
                            src={url}
                            width={300}
                            height={200}
                            className="rounded-lg object-cover w-full h-48"
                            alt={`Item ${i}`}
                        />
                        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                            <button className="px-2 py-1 text-xs bg-yellow-400 text-white rounded">
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(i, section)}
                                className="px-2 py-1 text-xs bg-red-500 text-white rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => handleUpload(section)}
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
                Upload New {title}
            </button>
        </section>
    );

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            {renderSection("Latest Products", products, "products")}
            {renderSection("Gallery", gallery, "gallery")}
        </div>
    );
}
