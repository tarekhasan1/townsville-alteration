// components/LatestCollection.tsx
'use client';

import ImageGallery from "@/components/ImageGallery";

export default function LatestCollection() {
  return (
    <section id="latest-collection">
      <ImageGallery
        collection="featured"
        title="Latest Collection"
        description="Explore our freshest styles and most popular looks—handpicked for your standout moments."
        itemsPerPage={6}
        showExploreButton={true}
      />
    </section>
  );
}