// components/Gallery.tsx
'use client';

import ImageGallery from "@/components/ImageGallery";

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading">
      <ImageGallery
        collection="gallery"
        title="Gallery"
        description="A peek into our work, transformations, and the beautiful details we've tailored for real moments."
        itemsPerPage={12}
        showExploreButton={true}
      />
    </section>
  );
}