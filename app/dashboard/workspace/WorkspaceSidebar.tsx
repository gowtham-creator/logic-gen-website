'use client';

import { Plus, Archive, Upload, Link, X, FileText, Image as ImageIcon, Code, Swatches, ClockCircle } from '@mynaui/icons-react';
import { useState, useEffect, useRef } from 'react';

type PanelType = 'add' | 'saved' | 'documents' | 'images' | 'code' | 'templates' | 'history' | null;

interface WorkspaceSidebarProps {
  onAddClick: () => void;
  onSavedClick: () => void;
}

interface SidebarItem {
  id: PanelType;
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  iconColor: string;
  tooltip: string;
}

export default function WorkspaceSidebar({
  onAddClick,
  onSavedClick,
}: WorkspaceSidebarProps) {
  const [activePanel, setActivePanel] = useState<PanelType>(null);
  const [hoveredItem, setHoveredItem] = useState<PanelType>(null);
  const [showTooltip, setShowTooltip] = useState<PanelType>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextPanel, setNextPanel] = useState<PanelType>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const sidebarItems: SidebarItem[] = [
    {
      id: 'add',
      icon: <Plus className="w-5 h-5" />,
      label: 'Add',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      tooltip: 'Add new sources and files'
    },
    {
      id: 'saved',
      icon: <Archive className="w-5 h-5" />,
      label: 'Saved',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
      tooltip: 'Your saved items and bookmarks'
    },
    {
      id: 'documents',
      icon: <FileText className="w-5 h-5" />,
      label: 'Docs',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      tooltip: 'View and manage documents'
    },
    {
      id: 'images',
      icon: <ImageIcon className="w-5 h-5" />,
      label: 'Images',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      tooltip: 'Browse uploaded images'
    },
    {
      id: 'code',
      icon: <Code className="w-5 h-5" />,
      label: 'Code',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      tooltip: 'Code snippets and examples'
    },
    {
      id: 'templates',
      icon: <Swatches className="w-5 h-5" />,
      label: 'Templates',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      tooltip: 'Pre-built workflow templates'
    },
    {
      id: 'history',
      icon: <ClockCircle className="w-5 h-5" />,
      label: 'History',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      tooltip: 'View conversation history'
    },
  ];

  const handleItemClick = (itemId: PanelType) => {
    setShowTooltip(null); // Hide tooltip on click
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    // If clicking the same item, just close it
    if (activePanel === itemId) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActivePanel(null);
        setIsTransitioning(false);
      }, 200);
      return;
    }

    // If switching to a different panel, fade out current then slide in new
    if (activePanel && activePanel !== itemId) {
      setIsTransitioning(true);
      setNextPanel(itemId);

      // Fade out current panel (quick)
      setTimeout(() => {
        setActivePanel(null);

        // Wait a bit then slide in new panel
        setTimeout(() => {
          setActivePanel(itemId);
          setNextPanel(null);
          setIsTransitioning(false);
        }, 100);
      }, 200);
    } else {
      // No current panel, just show the new one
      setActivePanel(itemId);
    }

    if (itemId === 'add') onAddClick();
    if (itemId === 'saved') onSavedClick();
  };

  const handleMouseEnter = (itemId: PanelType) => {
    setHoveredItem(itemId);
    // Show tooltip after 800ms hover
    hoverTimeoutRef.current = setTimeout(() => {
      setShowTooltip(itemId);
    }, 800);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setShowTooltip(null);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  return (
    <div className="absolute left-2 top-2 z-10 flex gap-4">
      {/* Main Widget */}
      <div className="bg-white rounded-lg p-3 flex flex-col items-center gap-3 shadow-[0_5px_35px_3px_rgba(0,0,0,0.1)]">
        {sidebarItems.map((item) => {
          const isActive = activePanel === item.id;
          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => handleItemClick(item.id)}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                className="flex flex-col items-center gap-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? `${item.bgColor} ${item.iconColor}`
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}>
                  {item.icon}
                </div>
                <span className={`text-[10px] font-medium transition-colors duration-300 ${
                  isActive ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {item.label}
                </span>
              </button>

              {/* Tooltip */}
              {showTooltip === item.id && (
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 pointer-events-none animate-in fade-in slide-in-from-left-2 duration-200">
                  <div className="bg-gray-900 text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                    {item.tooltip}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dynamic Panels */}
      {activePanel && (
        <div className={`bg-white rounded-2xl shadow-xl p-6 w-80 ${
          isTransitioning
            ? 'animate-out fade-out duration-200'
            : 'animate-in slide-in-from-left-4 fade-in duration-300'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900">
              {activePanel === 'add' && 'Add Sources'}
              {activePanel === 'documents' && 'Documents'}
              {activePanel === 'images' && 'Images'}
              {activePanel === 'code' && 'Code Snippets'}
              {activePanel === 'templates' && 'Templates'}
              {activePanel === 'history' && 'History'}
              {activePanel === 'saved' && 'Saved Items'}
            </h3>
            <button
              onClick={() => setActivePanel(null)}
              className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            {/* Add Panel Content */}
            {activePanel === 'add' && (
              <>
                <button className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-all duration-200 text-left group">
                  <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <Upload className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Upload Files</p>
                    <p className="text-xs text-gray-500">Add documents from your device</p>
                  </div>
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-purple-50 rounded-xl transition-all duration-200 text-left group">
                  <div className="w-10 h-10 bg-purple-50 group-hover:bg-purple-100 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <Link className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Connect Source</p>
                    <p className="text-xs text-gray-500">Link external data sources</p>
                  </div>
                </button>
              </>
            )}

            {/* Documents Panel Content */}
            {activePanel === 'documents' && (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-green-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">No documents yet</p>
                <p className="text-xs text-gray-400 mt-1">Upload documents to get started</p>
              </div>
            )}

            {/* Images Panel Content */}
            {activePanel === 'images' && (
              <div className="text-center py-8">
                <ImageIcon className="w-12 h-12 text-purple-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">No images yet</p>
                <p className="text-xs text-gray-400 mt-1">Upload images to analyze them</p>
              </div>
            )}

            {/* Code Panel Content */}
            {activePanel === 'code' && (
              <div className="text-center py-8">
                <Code className="w-12 h-12 text-orange-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">No code snippets</p>
                <p className="text-xs text-gray-400 mt-1">Save code snippets for quick access</p>
              </div>
            )}

            {/* Templates Panel Content */}
            {activePanel === 'templates' && (
              <div className="text-center py-8">
                <Swatches className="w-12 h-12 text-pink-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Browse templates</p>
                <p className="text-xs text-gray-400 mt-1">Pre-built workflows coming soon</p>
              </div>
            )}

            {/* History Panel Content */}
            {activePanel === 'history' && (
              <div className="text-center py-8">
                <ClockCircle className="w-12 h-12 text-indigo-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">No history yet</p>
                <p className="text-xs text-gray-400 mt-1">Your conversation history will appear here</p>
              </div>
            )}

            {/* Saved Panel Content */}
            {activePanel === 'saved' && (
              <div className="text-center py-8">
                <Archive className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">No saved items yet</p>
                <p className="text-xs text-gray-400 mt-1">Save important documents and workflows here</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
