// components/LayoutShell.tsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import DevelopedBy from '@/components/DevelopedBy';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && (
        <>
          <ContactSection />
          <DevelopedBy />
        </>
      )}
    </>
  );
}
