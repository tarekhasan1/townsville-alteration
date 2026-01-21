// components/Sidebar.tsx
'use client';

import Image from 'next/image';
import { CollectionType } from '../../../actions/admin.action';

interface SidebarProps {
  activeSection: CollectionType | 'dashboard' | 'upload';
  onSectionChange: (section: CollectionType | 'dashboard' | 'upload') => void;
  onLogout: () => void;
  isOpen?: boolean;
  onToggle?: () => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊', section: 'dashboard' as any },
  { id: 'gallery', label: 'Gallery', icon: '🖼️', section: 'gallery' as CollectionType },
  { id: 'featured', label: 'Featured', icon: '⭐', section: 'featured' as CollectionType },
  { id: 'suits', label: 'Suits', icon: '👔', section: 'suits' as CollectionType },
  { id: 'wedding-gowns', label: 'Wedding Gowns', icon: '👰', section: 'wedding-gowns' as CollectionType },
  { id: 'upload', label: 'Upload New', icon: '📤', section: 'upload' as any },
];

export default function Sidebar({ activeSection, onSectionChange, onLogout, isOpen, onToggle }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl">
      <div className="flex flex-col h-full">
        {/* Logo and Close Button */}
        <div className="p-6 border-b border-gray-700 relative">
            <div className='flex flex-1'>
                <Image src="/logo.png" alt="Logo" width={120} height={50} className="mb-2" />
            </div>
          {onToggle && (
            <button
              onClick={onToggle}
              className="lg:hidden absolute top-6 right-6 p-1 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Admin Panel</h1>
              <p className="text-xs text-gray-400">Content Management</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSectionChange(item.section);
                if (window.innerWidth < 1024 && onToggle) {
                  onToggle();
                }
              }}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                transition-all duration-200 hover:bg-gray-700 hover:scale-[1.02]
                ${activeSection === item.section ? 'bg-gray-700 scale-[1.02] shadow-inner' : ''}
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User & Logout */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3 px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center">
              <span className="text-sm">👑</span>
            </div>
            <div className="flex-1">
              <p className="font-medium">Administrator</p>
              <p className="text-xs text-gray-400">Admin Access</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="w-full mt-2 flex items-center space-x-3 px-4 py-3 rounded-lg
              bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
              transition-all duration-200 hover:scale-[1.02]"
          >
            <span className="text-xl">🚪</span>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}