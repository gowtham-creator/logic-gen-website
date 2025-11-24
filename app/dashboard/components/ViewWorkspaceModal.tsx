'use client';

import { X } from '@mynaui/icons-react';

interface ViewWorkspaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  workspace: {
    title: string;
    date: string;
  } | null;
}

export default function ViewWorkspaceModal({ isOpen, onClose, workspace }: ViewWorkspaceModalProps) {
  if (!isOpen || !workspace) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Workspace Details</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Workspace Name
            </label>
            <p className="text-base font-semibold text-gray-900">{workspace.title}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Created Date
            </label>
            <p className="text-base text-gray-900">{workspace.date}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Status
            </label>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-900">Active</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
