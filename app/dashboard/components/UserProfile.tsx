'use client';

interface UserProfileProps {
  name: string;
  status?: string;
  avatar?: string;
  isCollapsed?: boolean;
}

export default function UserProfile({ name, status = 'Free', avatar, isCollapsed = false }: UserProfileProps) {
  return (
    <div className={`absolute bottom-6 ${isCollapsed ? 'left-2 right-2' : 'left-4 right-4'}`}>
      <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer`} title={isCollapsed ? name : ''}>
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shrink-0">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-white font-semibold text-sm">
              {name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </span>
          )}
        </div>

        {/* User Info */}
        {!isCollapsed && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
            <p className="text-xs text-gray-500">{status}</p>
          </div>
        )}
      </div>
    </div>
  );
}
