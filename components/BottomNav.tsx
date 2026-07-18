'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-primary' : 'text-gray-500';
  };

  const navItems = [
    { href: '/home', label: 'Home', icon: '😊' },
    { href: '/messages', label: 'Message', icon: '💬' },
    { href: '/me', label: 'Me', icon: '👤' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex justify-around items-center max-w-md mx-auto w-full md:max-w-2xl">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <div className={`flex flex-col items-center gap-1 text-lg transition-colors ${isActive(item.href)}`}>
            <span className="text-2xl">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}
