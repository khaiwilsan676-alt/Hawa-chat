'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { BottomNav } from '@/components/BottomNav';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="flex flex-col h-screen bg-secondary">
      <main className="flex-1 overflow-y-auto pb-24 md:pb-28">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
