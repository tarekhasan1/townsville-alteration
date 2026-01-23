// components/DashboardHeader.tsx
'use client';

import { CollectionType } from '../../../actions/admin.action';

interface DashboardHeaderProps {
  activeSection: CollectionType | 'dashboard' | 'upload' | 'messages';
  onUploadClick: () => void;
  stats?: {
    total: number;
    gallery: number;
    featured: number;
    suits: number;
    weddingGowns: number;
    messages?: {
      total: number;
      new: number;
      responded: number;
      archived: number;
    };
  };
}

const sectionTitles: Record<string, string> = {
  dashboard: 'Dashboard Overview',
  gallery: 'Gallery Management',
  featured: 'Featured Images',
  suits: 'Suit Collection',
  'wedding-gowns': 'Wedding Gowns',
  upload: 'Upload New Image',
  messages: 'Contact Messages',
};

const sectionDescriptions: Record<string, string> = {
  dashboard: 'Overview of your website content and messages',
  gallery: 'Manage your general gallery images',
  featured: 'Manage featured/hero section images',
  suits: 'Manage suit collection images',
  'wedding-gowns': 'Manage wedding gown collection images',
  upload: 'Upload new images to any collection',
  messages: 'View and respond to customer inquiries',
};

export default function DashboardHeader({ activeSection, onUploadClick, stats }: DashboardHeaderProps) {
  // Check if there are new messages to show badge
  const hasNewMessages = stats?.messages?.new && stats.messages.new > 0;
  
  return (
    <header className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-gray-900">
              {sectionTitles[activeSection] || 'Admin Panel'}
            </h1>
            {activeSection === 'messages' && hasNewMessages && (
              <span className="relative">
                <span className="animate-ping absolute -top-1 -right-1 h-2 w-2 rounded-full bg-yellow-500 opacity-75"></span>
                <span className="relative inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                  {stats?.messages.new} new
                </span>
              </span>
            )}
          </div>
          <p className="text-gray-600">
            {sectionDescriptions[activeSection] || 'Manage and organize your website content efficiently'}
          </p>
        </div>
        
        {activeSection !== 'upload' && activeSection !== 'messages' && (
          <button
            onClick={onUploadClick}
            className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Upload New
          </button>
        )}
        
        {activeSection === 'messages' && (
          <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Updated: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        )}
      </div>

      {activeSection === 'dashboard' && stats && (
        <>
          {/* Images Stats */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800">Image Collections</h3>
              <div className="text-sm text-gray-500">
                Total: <span className="font-bold text-blue-600">{stats.total}</span> images
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-700">{stats.gallery}</div>
                    <div className="text-sm text-blue-600 mt-1">Gallery</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-blue-200 flex items-center justify-center">
                    <span className="text-blue-700">🖼️</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-purple-700">{stats.featured}</div>
                    <div className="text-sm text-purple-600 mt-1">Featured</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-purple-200 flex items-center justify-center">
                    <span className="text-purple-700">⭐</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-700">{stats.suits}</div>
                    <div className="text-sm text-green-600 mt-1">Suits</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-green-200 flex items-center justify-center">
                    <span className="text-green-700">👔</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-pink-700">{stats.weddingGowns}</div>
                    <div className="text-sm text-pink-600 mt-1">Wedding Gowns</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-pink-200 flex items-center justify-center">
                    <span className="text-pink-700">👰</span>
                  </div>
                </div>
              </div>
              
              {/* Upload Stats */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl border border-yellow-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-yellow-700">{stats.total}</div>
                    <div className="text-sm text-yellow-600 mt-1">Total</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-yellow-200 flex items-center justify-center">
                    <span className="text-yellow-700">📊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Messages Stats (if available) */}
          {stats.messages && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800">Customer Messages</h3>
                <div className="text-sm text-gray-500">
                  Total: <span className="font-bold text-blue-600">{stats.messages.total}</span> messages
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl border border-yellow-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-yellow-700">{stats.messages.new}</div>
                      <div className="text-sm text-yellow-600 mt-1">New</div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-yellow-200 flex items-center justify-center">
                      <span className="text-yellow-700">📨</span>
                    </div>
                  </div>
                  {stats.messages.new > 0 && (
                    <div className="mt-2 text-xs text-yellow-700 bg-yellow-200 px-2 py-1 rounded-full inline-block">
                      Needs attention
                    </div>
                  )}
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-green-700">{stats.messages.responded}</div>
                      <div className="text-sm text-green-600 mt-1">Responded</div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-green-200 flex items-center justify-center">
                      <span className="text-green-700">✅</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-700">{stats.messages.archived}</div>
                      <div className="text-sm text-gray-600 mt-1">Archived</div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-700">📁</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-blue-700">{stats.messages.total}</div>
                      <div className="text-sm text-blue-600 mt-1">Total</div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-blue-200 flex items-center justify-center">
                      <span className="text-blue-700">💬</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      
      {activeSection === 'messages' && stats?.messages && (
        <div className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`p-4 rounded-xl border ${
              stats.messages.new > 0 
                ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200' 
                : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className={`text-2xl font-bold ${stats.messages.new > 0 ? 'text-yellow-700' : 'text-gray-700'}`}>
                    {stats.messages.new}
                  </div>
                  <div className={`text-sm ${stats.messages.new > 0 ? 'text-yellow-600' : 'text-gray-600'} mt-1`}>
                    New Messages
                  </div>
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  stats.messages.new > 0 ? 'bg-yellow-200' : 'bg-gray-200'
                }`}>
                  <span className={stats.messages.new > 0 ? 'text-yellow-700' : 'text-gray-700'}>📨</span>
                </div>
              </div>
              {stats.messages.new > 0 && (
                <div className="mt-2 text-xs text-yellow-700 bg-yellow-200 px-2 py-1 rounded-full inline-block">
                  Requires your attention
                </div>
              )}
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-green-700">{stats.messages.responded}</div>
                  <div className="text-sm text-green-600 mt-1">Responded</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-green-200 flex items-center justify-center">
                  <span className="text-green-700">✅</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-700">{stats.messages.archived}</div>
                  <div className="text-sm text-gray-600 mt-1">Archived</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-700">📁</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-blue-700">{stats.messages.total}</div>
                  <div className="text-sm text-blue-600 mt-1">Total</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-200 flex items-center justify-center">
                  <span className="text-blue-700">💬</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}