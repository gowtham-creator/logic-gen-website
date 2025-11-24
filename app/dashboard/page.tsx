'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';
import ProjectGrid from './components/ProjectGrid';
import CreateWorkspaceModal from './components/CreateWorkspaceModal';
import ViewWorkspaceModal from './components/ViewWorkspaceModal';
import EditWorkspaceModal from './components/EditWorkspaceModal';
import DeleteConfirmationModal from './components/DeleteConfirmationModal';
import WorkspaceView from './workspace/WorkspaceView';

interface Workspace {
  id: string;
  title: string;
  date: string;
}

export default function DashboardPage() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [activeWorkspace, setActiveWorkspace] = useState<Workspace | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState<Workspace | null>(null);

  const handleCreateWorkspace = (name: string) => {
    const newWorkspace: Workspace = {
      id: Date.now().toString(),
      title: name,
      date: new Date().toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      }),
    };
    setWorkspaces([...workspaces, newWorkspace]);
  };

  const handleViewWorkspace = (id: string) => {
    const workspace = workspaces.find((w) => w.id === id);
    if (workspace) {
      setActiveWorkspace(workspace);
    }
  };

  const handleBackToDashboard = () => {
    setActiveWorkspace(null);
  };

  const handleEditWorkspace = (id: string) => {
    const workspace = workspaces.find((w) => w.id === id);
    if (workspace) {
      setSelectedWorkspace(workspace);
      setIsEditModalOpen(true);
    }
  };

  const handleUpdateWorkspace = (newName: string) => {
    if (selectedWorkspace) {
      setWorkspaces(
        workspaces.map((w) =>
          w.id === selectedWorkspace.id ? { ...w, title: newName } : w
        )
      );
      setSelectedWorkspace(null);
    }
  };

  const handleDeleteWorkspace = (id: string) => {
    const workspace = workspaces.find((w) => w.id === id);
    if (workspace) {
      setSelectedWorkspace(workspace);
      setIsDeleteModalOpen(true);
    }
  };

  const confirmDeleteWorkspace = () => {
    if (selectedWorkspace) {
      setWorkspaces(workspaces.filter((w) => w.id !== selectedWorkspace.id));
      setSelectedWorkspace(null);
    }
  };

  // If workspace is active, show workspace view
  if (activeWorkspace) {
    return (
      <WorkspaceView
        workspaceId={activeWorkspace.id}
        workspaceName={activeWorkspace.title}
        onBack={handleBackToDashboard}
      />
    );
  }

  return (
    <>
      <div className="flex h-screen bg-[#F8F8F8]">
        {/* Sidebar */}
        <Sidebar userName="Emaillia Cailin" onCreateWorkspace={() => setIsCreateModalOpen(true)} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Header */}
          <Header />

          {/* Main Content Area with Scroll */}
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <div className="max-w-[1400px] w-full mx-auto px-8 py-8">
              {/* Welcome Section */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-1">Hey, Kumari</h1>
                <p className="text-gray-500">Start working on your workspaces</p>
              </div>

              {/* Stats Section */}
              <DashboardStats workspaceCount={workspaces.length} />

              {/* Workspaces Grid */}
              {workspaces.length > 0 ? (
                <ProjectGrid
                  projects={workspaces}
                  onView={handleViewWorkspace}
                  onEdit={handleEditWorkspace}
                  onDelete={handleDeleteWorkspace}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No workspaces yet</h3>
                    <p className="text-sm text-gray-500 mb-6">
                      Get started by creating your first workspace
                    </p>
                    <button
                      onClick={() => setIsCreateModalOpen(true)}
                      className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors font-medium text-sm"
                    >
                      Create Workspace
                    </button>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Create Workspace Modal */}
      <CreateWorkspaceModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateWorkspace}
      />

      {/* View Workspace Modal */}
      <ViewWorkspaceModal
        isOpen={isViewModalOpen}
        onClose={() => {
          setIsViewModalOpen(false);
          setSelectedWorkspace(null);
        }}
        workspace={selectedWorkspace}
      />

      {/* Edit Workspace Modal */}
      <EditWorkspaceModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedWorkspace(null);
        }}
        onSubmit={handleUpdateWorkspace}
        workspace={selectedWorkspace}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedWorkspace(null);
        }}
        onConfirm={confirmDeleteWorkspace}
        workspaceName={selectedWorkspace?.title || ''}
      />
    </>
  );
}
