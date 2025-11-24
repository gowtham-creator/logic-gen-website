'use client';

import { Home, Users, ChartPie, PanelRightClose } from '@mynaui/icons-react';
import { useState } from 'react';
import Image from 'next/image';
import CreateDMNButton from './CreateDMNButton';
import UserProfile from './UserProfile';

interface SidebarProps {
  className?: string;
  userName?: string;
  onCreateWorkspace?: () => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'usage', label: 'Usage', icon: ChartPie },
];

export default function Sidebar({ className = '', userName = 'Emaillia Cailin', onCreateWorkspace }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`${isCollapsed ? 'w-[72px]' : 'w-[200px]'} bg-white border-r border-gray-100 flex flex-col relative transition-all duration-300 ${className}`}>
      {/* Logo & Toggle */}
      <div className="h-[80px] flex items-center justify-between px-4">
        <div className={`flex items-center gap-2 ${isCollapsed ? 'justify-center w-full' : ''}`}>
          {isCollapsed ? (
            <div className=" relative shrink-0">
              <Image
                src="/images/lg-logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          ) : (
            <div className="size-10 relative">
              <Image
                src="/images/lg-logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          )}
        </div>
        {!isCollapsed && (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
            title="Collapse sidebar"
          >
            <PanelRightClose className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>

      {/* Collapse Button (when collapsed) */}
      {isCollapsed && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center py-2 hover:bg-gray-50 transition-colors"
          title="Expand sidebar"
        >
          <PanelRightClose className="w-5 h-5 text-gray-600 rotate-180" />
        </button>
      )}

      {/* Create Workspace Button */}
      <CreateDMNButton isCollapsed={isCollapsed} onClick={onCreateWorkspace} />

      {/* Navigation */}
      <nav className={`flex-1 pt-2 ${isCollapsed ? 'px-2' : 'px-4'}`}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center px-3' : 'gap-3 px-4'} py-3 rounded-xl mb-1 transition-all duration-200 ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              title={isCollapsed ? item.label : ''}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <UserProfile name={userName} isCollapsed={isCollapsed} />
    </aside>
  );
}
