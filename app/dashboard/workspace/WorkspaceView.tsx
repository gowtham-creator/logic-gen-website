'use client';

import { useState, useEffect } from 'react';
import WorkspaceTopNav from './WorkspaceTopNav';
import WorkspaceSidebar from './WorkspaceSidebar';
import ChatInterface from './ChatInterface';
import CanvasContainer from './CanvasContainer';
import DiagramsView from './DiagramsView';
import CodePanel from './CodePanel';

type Tab = 'chat' | 'diagrams' | 'code';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

interface WorkspaceViewProps {
  workspaceId: string;
  workspaceName: string;
  onBack: () => void;
}

export default function WorkspaceView({ workspaceId, workspaceName, onBack }: WorkspaceViewProps) {
  const [activeTab, setActiveTab] = useState<Tab>('chat');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isCodePanelOpen, setIsCodePanelOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle tab changes with transitions
  useEffect(() => {
    if (activeTab === 'code') {
      // Open code panel when switching to code tab
      setTimeout(() => setIsCodePanelOpen(true), 300);
    } else {
      // Close code panel when switching away from code tab
      setIsCodePanelOpen(false);
    }
  }, [activeTab]);

  const handleTabChange = (tab: Tab) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
    }, 150);
  };

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you want to "${content}". I'm analyzing your documents and will help you create the workflow. Based on the files you've uploaded, I can generate business rules, decision tables, and process flows. Would you like me to proceed with a specific format or framework?`,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1500);
  };

  const renderCanvasContent = () => {
    // For code tab, show chat interface (code panel slides in separately)
    if (activeTab === 'code') {
      return (
        <div className={`h-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <ChatInterface messages={messages} onSendMessage={handleSendMessage} isCodePanelOpen={isCodePanelOpen} />
        </div>
      );
    }

    // For other tabs, render the appropriate content
    switch (activeTab) {
      case 'chat':
        return (
          <div className={`h-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <ChatInterface messages={messages} onSendMessage={handleSendMessage} isCodePanelOpen={false} />
          </div>
        );
      case 'diagrams':
        return null; // Diagrams view is rendered separately, not in CanvasContainer
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white animate-in fade-in slide-in-from-right-4 duration-300">
      <WorkspaceTopNav
        workspaceName={workspaceName}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onBack={onBack}
      />
      <div className="flex-1 overflow-hidden relative">
        <WorkspaceSidebar onAddClick={() => {}} onSavedClick={() => {}} />

        {/* Diagrams tab renders separately with its own canvas */}
        {activeTab === 'diagrams' ? (
          <div className={`h-full w-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <DiagramsView />
          </div>
        ) : (
          /* Canvas Container for chat and code tabs */
          <div className={`h-full transition-all duration-300 ${
            isCodePanelOpen ? 'w-3/5' : 'w-full'
          }`}>
            <CanvasContainer>
              {renderCanvasContent()}
            </CanvasContainer>
          </div>
        )}

        {/* Code Panel - slides in from right when code tab is active */}
        <CodePanel
          isOpen={isCodePanelOpen}
          onClose={() => setActiveTab('chat')}
        />
      </div>
    </div>
  );
}
