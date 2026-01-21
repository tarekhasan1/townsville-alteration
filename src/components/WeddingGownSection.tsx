// components/WeddingGownsSection.tsx
'use client';

import ImageGallery from "@/components/ImageGallery";

export default function WeddingGownsSection() {
  return (
    <section id="wedding-gowns">
      <ImageGallery
        collection="wedding-gowns"
        title="Wedding Gowns Collection"
        description="Discover our exquisite collection of wedding gowns for your special day."
        itemsPerPage={6}
        showContactButton={true}
        contactEmail="weddings@townsvillealterationsformalwear.com"
        contactSubject="Inquiry about Wedding Gowns"
        buttonText="Inquire Now"
        showCallButton={true}
        phoneNumber="+04 219 29683" // Replace with actual number
        callButtonText="Call for Wedding Gowns"
      />
    </section>
  );
}