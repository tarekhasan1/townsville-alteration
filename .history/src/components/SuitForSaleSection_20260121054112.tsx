// components/SuitsForSaleSection.tsx
'use client';

import ImageGallery from "@/components/ImageGallery";

export default function SuitsForSaleSection() {
  return (
    <section id="suits-for-sale">
      <ImageGallery
        collection="suits"
        title="Suits – Available to Buy"
        description="Own your look — browse our premium suits crafted for fit, comfort, and standout style."
        itemsPerPage={6}
        showContactButton={true}
        contactEmail="sales@townsvillealterationsformalwear.com"
        contactSubject="Interested in Buying a Suit"
        showCallButton={true}
        phoneNumber="+04 219 29683" // Replace with actual number
        callButtonText="Call to Buy"
      />
    </section>
  );
}