'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export default function RootPage() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/home');
    } else {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <div className="text-center">
        <div className="text-4xl mb-4">Hawa Chat</div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
