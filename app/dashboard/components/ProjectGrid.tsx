'use client';

import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  date: string;
}

interface ProjectGridProps {
  projects: Project[];
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ProjectGrid({ projects, onView, onEdit, onDelete }: ProjectGridProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Workspaces</h2>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            date={project.date}
            onView={() => onView(project.id)}
            onEdit={() => onEdit(project.id)}
            onDelete={() => onDelete(project.id)}
          />
        ))}
      </div>
    </div>
  );
}
