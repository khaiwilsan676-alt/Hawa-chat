import { BottomNav } from '@/components/BottomNav';
import { Redirect } from '@/components/Redirect';

const mockContent = [
  {
    id: 1,
    title: 'Magic Box King',
    category: 'Game',
    emoji: '✨',
    time: '18/07-19/07 23:59',
  },
  {
    id: 2,
    title: 'Ranking',
    category: 'Ranking',
    emoji: '🏆',
  },
  {
    id: 3,
    title: 'CP',
    category: 'Family',
    emoji: '👑',
  },
  {
    id: 4,
    title: 'Family',
    category: 'Family',
    emoji: '👨‍👩‍👧‍👦',
  },
];

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <Redirect />
      
      <div className="max-w-md mx-auto pt-6 pb-8 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Home</h1>
          <button className="text-gray-600 text-xl">📊</button>
        </div>

        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-6 mb-6 text-white">
          <h2 className="text-xl font-bold mb-2">Magic Box King</h2>
          <p className="text-sm">18/07-19/07 23:59</p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {['🏆 Popular', '🎮 Game', '🎵 Video/Music'].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 bg-blue-400 text-white rounded-full text-sm font-medium whitespace-nowrap"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-4">
          {mockContent.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <h3 className="font-bold text-sm">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.category}</p>
              {item.time && <p className="text-xs text-gray-500 mt-1">{item.time}</p>}
            </div>
          ))}
        </div>

        {/* Popular Section */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Popular Users</h2>
          <div className="space-y-4">
            {[
              { name: 'JIYA', country: '🇮🇳' },
              { name: 'Ginni', country: '🇮🇳' },
              { name: 'new_user_gui...', country: '🇮🇳' },
            ].map((user) => (
              <div
                key={user.name}
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center text-white font-bold">
                    {user.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{user.name}</p>
                    <p className="text-xs text-gray-600">{user.country}</p>
                  </div>
                </div>
                <span className="text-xl">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
