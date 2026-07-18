'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    setError('');
    if (!username.trim()) {
      setError('Please enter username');
      return;
    }
    if (!password.trim()) {
      setError('Please enter password');
      return;
    }
    
    // Simulate login
    login(username);
    router.push('/home');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Hawa Chat
        </h1>
        
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
            />
          </div>

          {error && (
            <div className="text-danger text-sm font-medium">{error}</div>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors mt-6"
          >
            Log in
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm mt-6">
          Demo mode: Enter any username and password to continue
        </p>
      </div>
    </div>
  );
}
