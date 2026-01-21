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
        buttonText="Contact to Buy"
        showCallButton={true}
        phoneNumber="+61412345678" // Replace with actual number
        callButtonText="Call to Buy"
      />
    </section>
  );
}