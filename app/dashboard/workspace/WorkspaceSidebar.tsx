'use client';

import { ArrowLeft } from '@mynaui/icons-react';
import Image from 'next/image';
import UploadDocuments from './UploadDocuments';
import FileList from './FileList';

interface FileItem {
  id: string;
  name: string;
  size: number;
  uploadedAt: string;
}

interface WorkspaceSidebarProps {
  workspaceName: string;
  files: FileItem[];
  onBack: () => void;
  onUpload: (files: File[]) => void;
  onDeleteFile: (id: string) => void;
}

export default function WorkspaceSidebar({
  workspaceName,
  files,
  onBack,
  onUpload,
  onDeleteFile,
}: WorkspaceSidebarProps) {
  return (
    <aside className="w-[280px] bg-white border-r border-gray-100 flex flex-col">
      {/* Header */}
      <div className="h-20 border-b border-gray-100 flex items-center px-4 gap-3">
        <button
          onClick={onBack}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
          title="Back to Dashboard"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="h-8 relative">
          <Image
            src="/images/lg-logo.png"
            alt="Logo"
            width={100}
            height={32}
            className="object-contain"
          />
        </div>
      </div>

      {/* Workspace Info */}
      <div className="px-4 py-4 border-b border-gray-100">
        <h2 className="text-base font-bold text-gray-900 truncate">{workspaceName}</h2>
        <p className="text-xs text-gray-500 mt-1">AI-powered workflow assistant</p>
      </div>

      {/* Upload Documents */}
      <div className="pt-4">
        <UploadDocuments onUpload={onUpload} />
      </div>

      {/* File List */}
      <FileList files={files} onDelete={onDeleteFile} />
    </aside>
  );
}
