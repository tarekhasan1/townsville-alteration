/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// lib/contact.actions.ts
'use client';

import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  where, 
  Timestamp,
  updateDoc,
  doc,
  deleteDoc,
  DocumentData,
  QuerySnapshot,
  QueryDocumentSnapshot
} from "firebase/firestore";
import { db } from "@/firebase/config";

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
  status: 'new' | 'responded' | 'archived';
  createdAt: Date;
  respondedAt?: Date;
  adminNotes?: string;
  adminResponder?: string;
}

export interface SubmitContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

export interface SubmitResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface FetchMessagesResult {
  messages: ContactMessage[];
  total: number;
}

export interface UpdateMessageData {
  status?: 'new' | 'responded' | 'archived';
  adminNotes?: string;
  adminResponder?: string;
}

// Submit contact form data to database
export const submitContactForm = async (data: SubmitContactFormData): Promise<SubmitResult> => {
  try {
    const messagesRef = collection(db, 'messages');
    
    const messageData = {
      name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone?.trim() || '',
      message: data.message.trim(),
      service: data.service?.toLowerCase() || '',
      status: 'new' as const,
      createdAt: Timestamp.now(),
      respondedAt: null,
      adminNotes: '',
      adminResponder: ''
    };

    const docRef = await addDoc(messagesRef, messageData);
    
    return {
      success: true,
      messageId: docRef.id
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit form'
    };
  }
};

// Fetch all messages with optional filtering and sorting
export const fetchMessages = async (
  status?: ContactMessage['status'],
  limit?: number,
  sortBy: 'createdAt' | 'name' = 'createdAt',
  sortOrder: 'asc' | 'desc' = 'desc'
): Promise<FetchMessagesResult> => {
  try {
    const messagesRef = collection(db, 'messages');
    let q = query(messagesRef, orderBy(sortBy, sortOrder));
    
    if (status) {
      q = query(messagesRef, where('status', '==', status), orderBy(sortBy, sortOrder));
    }
    
    const snapshot = await getDocs(q);
    let messages = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        service: data.service,
        status: data.status,
        createdAt: data.createdAt?.toDate() || new Date(),
        respondedAt: data.respondedAt?.toDate(),
        adminNotes: data.adminNotes,
        adminResponder: data.adminResponder
      };
    });
    
    if (limit) {
      messages = messages.slice(0, limit);
    }
    
    return {
      messages,
      total: snapshot.size
    };
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw new Error('Failed to fetch messages');
  }
};

// Fetch a single message by ID
export const fetchMessageById = async (id: string): Promise<ContactMessage | null> => {
  try {
    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, where('__name__', '==', id));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return null;
    }
    
    const doc = snapshot.docs[0];
    const data = doc.data();
    
    return {
      id: doc.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      service: data.service,
      status: data.status,
      createdAt: data.createdAt?.toDate() || new Date(),
      respondedAt: data.respondedAt?.toDate(),
      adminNotes: data.adminNotes,
      adminResponder: data.adminResponder
    };
  } catch (error) {
    console.error('Error fetching message:', error);
    throw new Error('Failed to fetch message');
  }
};

// Update message (admin response)
export const updateMessage = async (
  messageId: string, 
  updateData: UpdateMessageData
): Promise<boolean> => {
  try {
    const messageRef = doc(db, 'messages', messageId);
    
    const updateObject: any = {};
    
    if (updateData.status) {
      updateObject.status = updateData.status;
      if (updateData.status === 'responded') {
        updateObject.respondedAt = Timestamp.now();
      }
    }
    
    if (updateData.adminNotes !== undefined) {
      updateObject.adminNotes = updateData.adminNotes;
    }
    
    if (updateData.adminResponder !== undefined) {
      updateObject.adminResponder = updateData.adminResponder;
    }
    
    await updateDoc(messageRef, updateObject);
    return true;
  } catch (error) {
    console.error('Error updating message:', error);
    throw new Error('Failed to update message');
  }
};

// Mark message as responded
export const markAsResponded = async (
  messageId: string, 
  adminName: string,
  adminNotes?: string
): Promise<boolean> => {
  try {
    const messageRef = doc(db, 'messages', messageId);
    
    await updateDoc(messageRef, {
      status: 'responded',
      respondedAt: Timestamp.now(),
      adminResponder: adminName,
      adminNotes: adminNotes || ''
    });
    
    return true;
  } catch (error) {
    console.error('Error marking message as responded:', error);
    throw new Error('Failed to mark message as responded');
  }
};

// Delete message
export const deleteMessage = async (messageId: string): Promise<boolean> => {
  try {
    const messageRef = doc(db, 'messages', messageId);
    await deleteDoc(messageRef);
    return true;
  } catch (error) {
    console.error('Error deleting message:', error);
    throw new Error('Failed to delete message');
  }
};

// Archive message
export const archiveMessage = async (messageId: string): Promise<boolean> => {
  try {
    return await updateMessage(messageId, { status: 'archived' });
  } catch (error) {
    console.error('Error archiving message:', error);
    throw new Error('Failed to archive message');
  }
};

// Get message statistics
export const getMessageStats = async (): Promise<{
  total: number;
  new: number;
  responded: number;
  archived: number;
}> => {
  try {
    const messagesRef = collection(db, 'messages');
    const snapshot = await getDocs(messagesRef);
    
    const stats = {
      total: 0,
      new: 0,
      responded: 0,
      archived: 0
    };
    
    snapshot.forEach(doc => {
      const data = doc.data();
      stats.total++;
      
      switch (data.status) {
        case 'new':
          stats.new++;
          break;
        case 'responded':
          stats.responded++;
          break;
        case 'archived':
          stats.archived++;
          break;
      }
    });
    
    return stats;
  } catch (error) {
    console.error('Error fetching message stats:', error);
    throw new Error('Failed to fetch message statistics');
  }
};

// Search messages by name or email
export const searchMessages = async (searchTerm: string): Promise<ContactMessage[]> => {
  try {
    // Note: Firestore doesn't support OR queries directly with different fields
    // We'll fetch all and filter client-side for small datasets
    // For larger datasets, consider using a search index like Algolia
    
    const messagesRef = collection(db, 'messages');
    const snapshot = await getDocs(messagesRef);
    
    const searchLower = searchTerm.toLowerCase();
    
    const messages = snapshot.docs
      .map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          service: data.service,
          status: data.status,
          createdAt: data.createdAt?.toDate() || new Date(),
          respondedAt: data.respondedAt?.toDate(),
          adminNotes: data.adminNotes,
          adminResponder: data.adminResponder
        };
      })
      .filter(message => 
        message.name.toLowerCase().includes(searchLower) ||
        message.email.toLowerCase().includes(searchLower) ||
        message.message.toLowerCase().includes(searchLower)
      );
    
    return messages;
  } catch (error) {
    console.error('Error searching messages:', error);
    throw new Error('Failed to search messages');
  }
};