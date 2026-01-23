'use client';

import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:0421929683" // <-- replace with real number
      aria-label="Call us now"
      className="
        fixed
        bottom-5
        right-5
        z-50
        flex
        items-center
        justify-center
        w-14
        h-14
        rounded-full
        bg-green-600
        text-white
        shadow-lg
        hover:bg-green-700
        active:scale-95
        transition
      "
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
