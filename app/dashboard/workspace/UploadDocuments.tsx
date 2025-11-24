'use client';

import { Upload, File } from '@mynaui/icons-react';
import { useState, useRef } from 'react';

interface UploadDocumentsProps {
  onUpload: (files: File[]) => void;
}

export default function UploadDocuments({ onUpload }: UploadDocumentsProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onUpload(files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      onUpload(files);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="px-4 mb-6">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Upload Documents</h3>
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl p-6 transition-all cursor-pointer ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
        }`}
      >
        <div className="flex flex-col items-center text-center">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
            isDragging ? 'bg-blue-100' : 'bg-white'
          }`}>
            <Upload className={`w-6 h-6 ${isDragging ? 'text-blue-600' : 'text-gray-400'}`} />
          </div>
          <p className="text-sm font-medium text-gray-900 mb-1">
            {isDragging ? 'Drop files here' : 'Click or drag files'}
          </p>
          <p className="text-xs text-gray-500">
            PDF, DOC, DOCX, TXT up to 10MB
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    </div>
  );
}
