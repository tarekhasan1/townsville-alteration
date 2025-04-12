'use client';

import { useState, useEffect } from 'react';
import AdminDashboard from './AdminDashboard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config'; // Adjust the path if needed

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('admin-authenticated');
    if (isAuth === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'admin'));
      const credentials = snapshot.docs.map((doc) => doc.data());

      const isMatch = credentials.some(
        (cred) => cred.email === email && cred.password === password
      );

      if (isMatch) {
        setIsLoggedIn(true);
        localStorage.setItem('admin-authenticated', 'true');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching credentials:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('admin-authenticated');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-yellow-400 text-white py-2 rounded hover:bg-yellow-500"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="text-sm bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Logout
        </button>
      </div>

      <div className="space-y-8">
        <AdminDashboard />
      </div>
    </div>
  );
}
