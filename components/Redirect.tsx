'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export function Redirect() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    // Redirect to login if not logged in
    if (!isLoggedIn && typeof window !== 'undefined') {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  return null;
}
