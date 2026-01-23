/* eslint-disable react-hooks/exhaustive-deps */
// components/admin/MessagesDashboard.tsx
'use client';

import { useState, useEffect } from 'react';
import { ContactMessage, fetchMessages, updateMessage, deleteMessage, markAsResponded, getMessageStats } from '../../../actions/contact.action';

export default function MessagesDashboard() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'new' | 'responded' | 'archived'>('new');
  const [stats, setStats] = useState({ total: 0, new: 0, responded: 0, archived: 0 });
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [adminName, setAdminName] = useState('');
  const [adminNotes, setAdminNotes] = useState('');

  useEffect(() => {
    loadMessages();
    loadStats();
  }, [selectedStatus]);

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
      const stats = await getMessageStats();
      setStats(stats);
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const handleMarkAsResponded = async (messageId: string) => {
    if (!adminName.trim()) {
      alert('Please enter your name before marking as responded');
      return;
    }

    try {
      await markAsResponded(messageId, adminName, adminNotes);
      await loadMessages();
      await loadStats();
      setSelectedMessage(null);
      setAdminNotes('');
      alert('Message marked as responded');
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
      alert('Message archived');
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
      alert('Message deleted');
    } catch (error) {
      console.error('Error deleting message:', error);
      alert('Failed to delete message');
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>
      
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold">{stats.total}</div>
          <div className="text-gray-600">Total Messages</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <div className="text-2xl font-bold text-blue-600">{stats.new}</div>
          <div className="text-gray-600">New</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow">
          <div className="text-2xl font-bold text-green-600">{stats.responded}</div>
          <div className="text-gray-600">Responded</div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <div className="text-2xl font-bold text-gray-600">{stats.archived}</div>
          <div className="text-gray-600">Archived</div>
        </div>
      </div>

      {/* Status Filter */}
      <div className="mb-6">
        <div className="flex space-x-2">
          {(['all', 'new', 'responded', 'archived'] as const).map(status => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded-lg capitalize ${selectedStatus === status ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Admin Name Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Name (Admin)
        </label>
        <input
          type="text"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter your name for tracking responses"
        />
      </div>

      {/* Messages List */}
      {loading ? (
        <div className="text-center py-8">Loading messages...</div>
      ) : messages.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No messages found</div>
      ) : (
        <div className="space-y-4">
          {messages.map(message => (
            <div key={message.id} className="bg-white p-4 rounded-lg shadow border">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{message.name}</h3>
                  <p className="text-gray-600">{message.email}</p>
                  {message.phone && <p className="text-gray-600">{message.phone}</p>}
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    message.status === 'new' ? 'bg-blue-100 text-blue-800' :
                    message.status === 'responded' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {message.status}
                  </span>
                  <div className="text-sm text-gray-500 mt-1">
                    {formatDate(message.createdAt)}
                  </div>
                </div>
              </div>
              
              {message.service && (
                <div className="mb-2">
                  <span className="text-sm font-medium">Service: </span>
                  <span className="text-sm text-gray-600 capitalize">{message.service}</span>
                </div>
              )}
              
              <p className="mb-4 whitespace-pre-wrap">{message.message}</p>
              
              {message.status === 'responded' && (
                <div className="bg-gray-50 p-3 rounded mb-3">
                  <div className="text-sm">
                    <span className="font-medium">Responded by: </span>
                    <span>{message.adminResponder}</span>
                    {message.respondedAt && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{formatDate(message.respondedAt)}</span>
                      </>
                    )}
                  </div>
                  {message.adminNotes && (
                    <div className="mt-2 text-sm">
                      <span className="font-medium">Notes: </span>
                      <span className="text-gray-700">{message.adminNotes}</span>
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex space-x-2">
                {message.status === 'new' && (
                  <>
                    <button
                      onClick={() => setSelectedMessage(message)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
                    >
                      Respond
                    </button>
                    <button
                      onClick={() => handleArchive(message.id!)}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
                    >
                      Archive
                    </button>
                  </>
                )}
                <button
                  onClick={() => handleDelete(message.id!)}
                  className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Response Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Respond to {selectedMessage.name}</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Response Notes (Optional)
              </label>
              <textarea
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                rows={4}
                placeholder="Add any notes about your response..."
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setSelectedMessage(null);
                  setAdminNotes('');
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleMarkAsResponded(selectedMessage.id!)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Mark as Responded
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}