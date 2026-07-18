'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  username: string | null;
  isLoggedIn: boolean;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Restore login state from localStorage on mount
  useEffect(() => {
    const savedUsername = localStorage.getItem('hawa_username');
    if (savedUsername) {
      setUsername(savedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (newUsername: string) => {
    setUsername(newUsername);
    setIsLoggedIn(true);
    localStorage.setItem('hawa_username', newUsername);
  };

  const logout = () => {
    setUsername(null);
    setIsLoggedIn(false);
    localStorage.removeItem('hawa_username');
  };

  return (
    <AuthContext.Provider value={{ username, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
