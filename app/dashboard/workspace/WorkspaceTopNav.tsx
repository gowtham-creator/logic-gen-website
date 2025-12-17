'use client';

import { ChevronRight, Bell, QuestionCircle } from '@mynaui/icons-react';
import Image from 'next/image';
import ChatIcon from './icons/ChatIcon';
import DiagramIcon from './icons/DiagramIcon';
import CodeIcon from './icons/CodeIcon';

type Tab = 'chat' | 'diagrams' | 'code';

interface WorkspaceTopNavProps {
  workspaceName: string;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  onBack: () => void;
}

export default function WorkspaceTopNav({
  workspaceName,
  activeTab,
  onTabChange,
  onBack,
}: WorkspaceTopNavProps) {
  const getTabIcon = (tabId: Tab, isActive: boolean) => {
    const iconClass = "w-6 h-6";

    switch (tabId) {
      case 'chat':
        return (
          <ChatIcon
            className={iconClass}
            primaryColor={isActive ? "#E5ECFF" : "#E8E8E8"}
            secondaryColor={isActive ? "#3C6CEF" : "#888888"}
          />
        );
      case 'diagrams':
        return (
          <DiagramIcon
            className={iconClass}
            color={isActive ? "#FF643A" : "#888888"}
          />
        );
      case 'code':
        return (
          <CodeIcon
            className={iconClass}
            color={isActive ? "#8F89FF" : "#888888"}
          />
        );
      default:
        return null;
    }
  };

  const getTabColors = (tabId: Tab) => {
    switch (tabId) {
      case 'chat':
        return { text: 'text-blue-600', bg: 'bg-blue-50' };
      case 'diagrams':
        return { text: 'text-[#FF643A]', bg: 'bg-orange-50' };
      case 'code':
        return { text: 'text-[#8F89FF]', bg: 'bg-purple-50' };
      default:
        return { text: 'text-gray-700', bg: '' };
    }
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: 'chat', label: 'CHAT' },
    { id: 'diagrams', label: 'DIAGRAMS' },
    { id: 'code', label: 'CODE' },
  ];

  return (
    <div className="h-16 border-b border-gray-100 bg-white flex items-center justify-between px-6 py-10">
      {/* Left: Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <button onClick={onBack} className="hover:text-gray-900 transition-colors" title="Back to Dashboard">
          <Image src="/images/lg-logo.png" alt="Home" width={24} height={24} />
        </button>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">{workspaceName}</span>
      </div>

      {/* Center: Tabs */}
      <div className="flex items-center">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const colors = getTabColors(tab.id);
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center px-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                isActive ? 'scale-100' : 'scale-95'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 ${
                isActive ? 'scale-110 animate-bounce-once' : 'scale-100'
              }`}>
                {getTabIcon(tab.id, isActive)}
              </div>
              <span
                className={`text-xs font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? `${colors.text} ${colors.bg} scale-105`
                    : 'text-gray-700 scale-100'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Right: Icons and Profile */}
      <div className="flex items-center gap-4">
      </div>
    </div>
  );
}
