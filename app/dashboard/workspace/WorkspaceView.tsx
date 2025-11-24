'use client';

import { useState } from 'react';
import WorkspaceSidebar from './WorkspaceSidebar';
import ChatInterface from './ChatInterface';

interface FileItem {
  id: string;
  name: string;
  size: number;
  uploadedAt: string;
}

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
  const [files, setFiles] = useState<FileItem[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleUpload = (uploadedFiles: File[]) => {
    const newFiles: FileItem[] = uploadedFiles.map((file) => ({
      id: Date.now().toString() + Math.random(),
      name: file.name,
      size: file.size,
      uploadedAt: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }));

    setFiles([...files, ...newFiles]);

    // Add AI message about uploaded files
    const fileNames = newFiles.map(f => f.name).join(', ');
    const aiMessage: Message = {
      id: Date.now().toString(),
      content: `I've received ${newFiles.length} file(s): ${fileNames}. I can help you analyze these documents, extract information, or create workflows based on their content. What would you like me to do?`,
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const handleDeleteFile = (id: string) => {
    setFiles(files.filter((f) => f.id !== id));
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

  return (
    <div className="flex h-screen bg-[#F8F8F8] animate-in fade-in slide-in-from-right-4 duration-300">
      <WorkspaceSidebar
        workspaceName={workspaceName}
        files={files}
        onBack={onBack}
        onUpload={handleUpload}
        onDeleteFile={handleDeleteFile}
      />
      <ChatInterface
        workspaceName={workspaceName}
        messages={messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}
