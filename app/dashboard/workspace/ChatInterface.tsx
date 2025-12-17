'use client';

import { Send, Microphone, Layout, FileText, Code } from '@mynaui/icons-react';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  isCodePanelOpen?: boolean;
  isFloating?: boolean;
}

export default function ChatInterface({ messages, onSendMessage, isCodePanelOpen = false, isFloating = false }: ChatInterfaceProps) {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const newHeight = Math.min(textarea.scrollHeight, 120); // Max 5 lines (~120px)
      textarea.style.height = `${newHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [input]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');

      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }

      // Simulate AI typing
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const actionCards = [
    {
      icon: <Layout className="w-8 h-8 text-blue-600" />,
      title: 'Create DMN tables of the insurance flaws in the Guidelines for claims which helps company in the revenue boost.',
    },
    {
      icon: <FileText className="w-8 h-8 text-pink-600" />,
      title: 'Analyze the documents and help me summarize the context.',
    },
    {
      icon: <Code className="w-8 h-8 text-blue-700" />,
      title: 'Generate DMN code to update the existing bank coverage claim policy code to faster the approval process.',
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white relative h-full">
      {/* Messages Area */}
      <div className={`flex-1 overflow-y-auto transition-all duration-300 ${
        isFloating
          ? 'px-4 py-4 pb-24'
          : isCodePanelOpen
            ? 'pl-[120px] pr-8 py-8 pb-32'
            : 'px-8 py-8 pb-32'
      }`}>
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center max-w-5xl mx-auto">
            <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-4xl font-semibold bg-linear-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-3">
                Welcome! Make your
              </h3>
              <h3 className="text-4xl font-semibold bg-linear-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-6">
                decision making simple and fast.
              </h3>
              <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
                Select sources and help me curate and analyze your documents and chat with ease and rule based decisions.
              </p>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-3 gap-5 w-full max-w-5xl">
              {actionCards.map((card, i) => (
                <button
                  key={i}
                  onClick={() => setInput(card.title)}
                  className="bg-white hover:bg-linear-to-br hover:from-gray-50 hover:to-white border border-gray-200 hover:border-blue-300 rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:shadow-blue-100 hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <div className="w-14 h-14 bg-linear-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300 shadow-sm">
                    {card.icon}
                  </div>
                  <p className="text-[15px] text-gray-700 leading-relaxed font-normal">
                    {card.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6 max-w-4xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-5 py-4 transition-all duration-200 ${
                    message.sender === 'user'
                      ? 'bg-white text-gray-800 border'
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}
                >
                  <p className="text-[15px] leading-relaxed whitespace-pre-wrap font-normal">
                    {message.content}
                  </p>
                  <span
                    className={`text-[11px] mt-3 block font-medium ${
                      message.sender === 'user' ? 'text-gray-400' : 'text-gray-400'
                    }`}
                  >
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="bg-white border border-gray-200 rounded-2xl px-5 py-4 max-w-[75%] shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    <span className="text-xs font-medium text-gray-500">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Floating Input Area */}
      <div className={`${isFloating ? 'absolute' : 'fixed'} bottom-0 left-0 right-0 bg-linear-to-t from-white via-white/95 to-transparent pointer-events-none z-10 transition-all duration-300 ${
        isFloating
          ? 'px-4 py-4'
          : isCodePanelOpen
            ? 'pl-[120px] pr-8 py-6'
            : 'px-8 py-6'
      }`}>
        <div className={`${isFloating ? 'w-full' : 'max-w-4xl mx-auto'} pointer-events-auto`}>
          <div className={`flex items-end gap-3 bg-white rounded-2xl border px-5 py-3.5 transition-all duration-300 ${
            isFocused
              ? 'border-blue-400 shadow-[0_8px_30px_rgb(0,0,0,0.12)] scale-[1.02]'
              : 'border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_6px_25px_rgb(0,0,0,0.1)]'
          }`}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Ask AI to help with workflows, business logic, or document analysis..."
              rows={1}
              className="flex-1 bg-transparent outline-none text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 resize-none overflow-y-auto max-h-[120px] leading-6"
              style={{ minHeight: '24px' }}
            />
            <button
              className="text-gray-400 hover:text-blue-600 transition-all duration-200 hover:scale-110 active:scale-95 mb-0.5"
              title="Voice input"
            >
              <Microphone className="w-5 h-5" />
            </button>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className={`transition-all duration-200 mb-0.5 ${
                input.trim()
                  ? 'text-blue-600 hover:text-blue-700 hover:scale-110 active:scale-95'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
              title="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
