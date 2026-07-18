import { BottomNav } from '@/components/BottomNav';
import { Redirect } from '@/components/Redirect';

const MOCK_MESSAGES = [
  { id: '1', name: 'Activity', emoji: '🚩', last: 'Island Holiday Lucky Draw is Li...', date: '15/7/ 2026' },
  { id: '2', name: 'Family', emoji: '👨‍👩‍👧', last: 'Family updates and news' },
  { id: '3', name: 'Feedback', emoji: '💬', last: 'Share your feedback with us' },
];

export default function MessagesPage() {
  return (
    <div className="bg-white min-h-screen">
      <Redirect />

      <div className="max-w-md mx-auto pt-6 pb-8 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Message</h1>
          <button className="text-primary text-2xl">✅</button>
        </div>

        {/* Message List */}
        <div className="space-y-3">
          {MOCK_MESSAGES.map((msg) => (
            <div
              key={msg.id}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors border-l-4 border-orange-400"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-300 to-yellow-300 flex items-center justify-center text-2xl flex-shrink-0">
                {msg.emoji}
              </div>

              {/* Message Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-base">{msg.name}</h3>
                  {msg.date && <span className="text-xs text-gray-500 whitespace-nowrap">{msg.date}</span>}
                </div>
                <p className="text-gray-600 text-sm mt-1 line-clamp-1">{msg.last}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Categories */}
        <div className="mt-8 space-y-3">
          <h2 className="font-bold text-sm text-gray-600">More Channels</h2>
          {[
            { name: 'Alice', last: 'Hey, how are you?', emoji: '👩' },
            { name: 'Bob', last: "Let's meet tomorrow.", emoji: '👨' },
            { name: 'Charlie', last: 'Cool!', emoji: '👨‍🔬' },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white text-lg flex-shrink-0">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-gray-600 text-xs line-clamp-1">{item.last}</p>
              </div>
            </div>
          ))}
        </div>

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
