/* eslint-disable react-hooks/exhaustive-deps */
// components/admin/MessagesDashboard.tsx
'use client';

import { useState, useEffect } from 'react';
import { ContactMessage, fetchMessages, updateMessage, deleteMessage, markAsResponded, getMessageStats } from '../../../actions/contact.action';

interface MessagesDashboardProps {
  messages: ContactMessage[];
  onMessageUpdate: () => void;
}

export default function MessagesDashboard({ messages: initialMessages, onMessageUpdate }: MessagesDashboardProps) {
  const [messages, setMessages] = useState<ContactMessage[]>(initialMessages);
  const [loading, setLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'new' | 'responded' | 'archived'>('new');
  const [stats, setStats] = useState({ total: 0, new: 0, responded: 0, archived: 0 });
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [adminName, setAdminName] = useState('');
  const [adminNotes, setAdminNotes] = useState('');

  useEffect(() => {
    loadStats();
  }, []);

  const loadMessages = async () => {
    try {
      setLoading(true);
      const result = selectedStatus === 'all' 
        ? await fetchMessages()
        : await fetchMessages(selectedStatus);
      setMessages(result.messages);
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const messageStats = await getMessageStats();
      setStats(messageStats);
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  useEffect(() => {
    loadMessages();
  }, [selectedStatus]);

  const handleMarkAsResponded = async (messageId: string) => {
    if (!adminName.trim()) {
      alert('Please enter your name before marking as responded');
      return;
    }

    try {
      await markAsResponded(messageId, adminName, adminNotes);
      await loadMessages();
      await loadStats();
      onMessageUpdate();
      setSelectedMessage(null);
      setAdminNotes('');
    } catch (error) {
      console.error('Error marking as responded:', error);
      alert('Failed to update message');
    }
  };

  const handleArchive = async (messageId: string) => {
    try {
      await updateMessage(messageId, { status: 'archived' });
      await loadMessages();
      await loadStats();
      onMessageUpdate();
    } catch (error) {
      console.error('Error archiving message:', error);
      alert('Failed to archive message');
    }
  };

  const handleDelete = async (messageId: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      await deleteMessage(messageId);
      await loadMessages();
      await loadStats();
      onMessageUpdate();
    } catch (error) {
      console.error('Error deleting message:', error);
      alert('Failed to delete message');
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Contact Messages</h2>
        <div className="text-sm text-gray-500">
          <span className="font-medium">Last updated:</span> {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
          <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
          <div className="text-sm text-blue-800 font-medium">Total</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl border border-yellow-200">
          <div className="text-2xl font-bold text-yellow-600">{stats.new}</div>
          <div className="text-sm text-yellow-800 font-medium">New</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
          <div className="text-2xl font-bold text-green-600">{stats.responded}</div>
          <div className="text-sm text-green-800 font-medium">Responded</div>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
          <div className="text-2xl font-bold text-gray-600">{stats.archived}</div>
          <div className="text-sm text-gray-800 font-medium">Archived</div>
        </div>
      </div>

      {/* Admin Name Input */}
      <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200">
        <label className="block text-sm font-medium text-yellow-800 mb-2">
          Your Admin Name (Required for responses)
        </label>
        <input
          type="text"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          className="w-full max-w-md px-4 py-2.5 bg-white border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-800"
          placeholder="Enter your name"
        />
        <p className="text-xs text-yellow-700 mt-2">
          This will be recorded when marking messages as responded.
        </p>
      </div>

      {/* Status Filter */}
      <div className="mb-6">
        <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
          {(['all', 'new', 'responded', 'archived'] as const).map(status => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all ${
                selectedStatus === status 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {status} {status === 'new' && stats.new > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center w-5 h-5 bg-yellow-500 text-white text-xs rounded-full">
                  {stats.new}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-yellow-500 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Loading messages...</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-xl">
            <div className="text-5xl mb-4">📭</div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No messages found</h3>
            <p className="text-gray-600">No {selectedStatus} messages available</p>
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-yellow-300 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{message.name}</h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 mt-1">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {message.email}
                    </span>
                    {message.phone && (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {message.phone}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    message.status === 'new' ? 'bg-yellow-100 text-yellow-800' :
                    message.status === 'responded' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {message.status === 'new' ? '📨 New' : message.status === 'responded' ? '✅ Responded' : '📁 Archived'}
                  </span>
                  <div className="text-xs text-gray-500 mt-1">
                    {formatDate(message.createdAt)}
                  </div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-medium mb-2">
                  <span className="mr-1">📋</span>
                  Service: <span className="ml-1 font-semibold capitalize">{message.service || 'Not specified'}</span>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap bg-white p-3 rounded-lg border border-gray-200">
                  {message.message}
                </p>
              </div>
              
              {message.status === 'responded' && (
                <div className="mb-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center text-sm text-green-800 mb-1">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Responded by {message.adminResponder}</span>
                    {message.respondedAt && (
                      <span className="ml-2 text-green-700">
                        • {formatDate(message.respondedAt)}
                      </span>
                    )}
                  </div>
                  {message.adminNotes && (
                    <p className="text-sm text-green-700 mt-1">
                      <span className="font-medium">Notes:</span> {message.adminNotes}
                    </p>
                  )}
                </div>
              )}
              
              <div className="flex space-x-2 pt-3 border-t border-gray-200">
                {message.status === 'new' && (
                  <>
                    <button
                      onClick={() => setSelectedMessage(message)}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all text-sm font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                      Mark as Responded
                    </button>
                    <button
                      onClick={() => handleArchive(message.id!)}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all text-sm font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                      Archive
                    </button>
                  </>
                )}
                <button
                  onClick={() => handleDelete(message.id!)}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all text-sm font-medium ml-auto"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Response Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Respond to {selectedMessage.name}</h2>
              <button
                onClick={() => {
                  setSelectedMessage(null);
                  setAdminNotes('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Response Notes (Optional)
              </label>
              <textarea
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                rows={4}
                placeholder="Add any notes about your response..."
              />
              <p className="text-xs text-gray-500 mt-1">
                This will be saved with the message record
              </p>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setSelectedMessage(null);
                  setAdminNotes('');
                }}
                className="px-5 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleMarkAsResponded(selectedMessage.id!)}
                className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all shadow-md"
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Mark as Responded
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}