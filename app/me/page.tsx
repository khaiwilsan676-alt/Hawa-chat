'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { BottomNav } from '@/components/BottomNav';
import { Redirect } from '@/components/Redirect';

const PROFILE_STATS = [
  { label: 'Followers', count: '1' },
  { label: 'Following', count: '0' },
  { label: 'Visitors', count: '1' },
];

const PROFILE_ITEMS = [
  { icon: '👜', label: 'Wallet', arrow: true },
  { icon: '💰', label: 'Invite Friends', badge: '💎', badgeLabel: 'Earn Coins' },
  { icon: '🏅', label: 'Medal', arrow: true },
  { icon: '♦️', label: 'SVIP', action: 'Join now', arrow: true },
  { icon: '👑', label: 'Level', badge: '🛡️', badgeLabel: 'Lv.0' },
  { icon: '💕', label: 'CP / Friend', arrow: true },
  { icon: '🐻', label: 'Family', action: 'Join Now', arrow: true },
  { icon: '🛒', label: 'Store', arrow: true },
  { icon: '👕', label: 'My Items', arrow: true },
];

export default function MePage() {
  const { username, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="bg-secondary min-h-screen">
      <Redirect />

      <div className="max-w-md mx-auto pt-6 pb-8 px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
          {/* Avatar & Username */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              {username?.[0]?.toUpperCase() || 'K'}
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900">{username || 'Khai Wilsan'}</h1>
              <p className="text-gray-600 text-sm">id:{Math.floor(Math.random() * 100000000)}</p>
              <button className="text-gray-500 text-sm mt-1">→</button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-around border-t border-gray-200 pt-4">
            {PROFILE_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-lg font-bold text-gray-900">{stat.count}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Menu Items */}
        <div className="space-y-2">
          {PROFILE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-gray-900">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && (
                  <div className="bg-yellow-100 px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                    <span>{item.badge}</span>
                    <span className="text-gray-700">{item.badgeLabel}</span>
                  </div>
                )}
                {item.action && (
                  <span className="text-primary text-sm font-medium">{item.action}</span>
                )}
                {item.arrow && <span className="text-gray-400 text-xl">→</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full mt-8 bg-danger text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          Sign Out
        </button>

        {/* Recharge Event Banner */}
        <div className="mt-8 p-4 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-lg text-center">
          <div className="text-4xl mb-2">🎁</div>
          <p className="font-bold text-sm">Recharge Event</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
