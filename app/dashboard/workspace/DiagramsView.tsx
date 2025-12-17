'use client';

import { useState } from 'react';
import DiagramCanvas from './DiagramCanvas';
import ChatInterface from './ChatInterface';
import { Plus, Square, Circle, Diamond, ArrowRight, TypeText, Download, Upload } from '@mynaui/icons-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

export default function DiagramsView() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isChatMinimized, setIsChatMinimized] = useState(false);

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
        content: `I'll help you create a diagram for "${content}". Let me suggest some nodes and connections based on your requirements.`,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1500);
  };

  return (
    <div className="relative w-full h-full">
      {/* Diagram Canvas Background */}
      <DiagramCanvas>
        {/* Sample Diagram Nodes - These will be replaced with actual diagram functionality */}
        <div className="absolute top-40 left-60">
          <div className="bg-white border-2 border-blue-500 rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-shadow cursor-move">
            <div className="flex items-center gap-2 mb-1">
              <Circle className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-semibold text-blue-600">INPUT</span>
            </div>
            <p className="text-sm font-medium text-gray-900">Customer Data</p>
          </div>
        </div>

        <div className="absolute top-40 left-[500px]">
          <div className="bg-white border-2 border-orange-500 rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-shadow cursor-move">
            <div className="flex items-center gap-2 mb-1">
              <Square className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-semibold text-orange-600">DECISION</span>
            </div>
            <p className="text-sm font-medium text-gray-900">Eligibility Check</p>
          </div>
        </div>

        <div className="absolute top-40 left-[800px]">
          <div className="bg-white border-2 border-green-500 rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-shadow cursor-move">
            <div className="flex items-center gap-2 mb-1">
              <Diamond className="w-4 h-4 text-green-500" />
              <span className="text-xs font-semibold text-green-600">OUTPUT</span>
            </div>
            <p className="text-sm font-medium text-gray-900">Approval Status</p>
          </div>
        </div>
      </DiagramCanvas>

      {/* Diagram Toolbar */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg border border-gray-200 p-2 flex items-center gap-1">
        <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group" title="Add Input Node">
          <Circle className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
        </button>
        <button className="p-2 hover:bg-orange-50 rounded-lg transition-colors group" title="Add Decision Node">
          <Square className="w-5 h-5 text-gray-600 group-hover:text-orange-600" />
        </button>
        <button className="p-2 hover:bg-green-50 rounded-lg transition-colors group" title="Add Output Node">
          <Diamond className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
        </button>
        <div className="w-px h-6 bg-gray-200 mx-1" />
        <button className="p-2 hover:bg-purple-50 rounded-lg transition-colors group" title="Add Connection">
          <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group" title="Add Text">
          <TypeText className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
        </button>
        <div className="w-px h-6 bg-gray-200 mx-1" />
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group" title="Import">
          <Upload className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group" title="Export">
          <Download className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
        </button>
      </div>

      {/* Floating Chat Interface */}
      <div className={`absolute right-6 top-6 bottom-6 transition-all duration-300 ${
        isChatMinimized ? 'w-14' : 'w-[420px]'
      }`}>
        {isChatMinimized ? (
          <button
            onClick={() => setIsChatMinimized(false)}
            className="w-14 h-14 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <Plus className="w-6 h-6 text-gray-600" />
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 h-full flex flex-col overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-linear-to-r from-blue-50 to-orange-50">
              <h3 className="text-sm font-semibold text-gray-900">AI Diagram Assistant</h3>
              <button
                onClick={() => setIsChatMinimized(true)}
                className="p-1 hover:bg-white/80 rounded-lg transition-colors"
              >
                <span className="text-gray-500 text-xs">−</span>
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <ChatInterface messages={messages} onSendMessage={handleSendMessage} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
