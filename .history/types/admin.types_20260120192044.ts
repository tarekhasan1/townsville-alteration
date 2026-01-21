// types/admin.types.ts
import { Timestamp } from "firebase/firestore";

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