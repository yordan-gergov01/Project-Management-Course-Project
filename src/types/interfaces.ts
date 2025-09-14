import { Project } from "./types";

export interface InputProps {
  textarea: boolean;
  label: string;
  type?: string;
}

export interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export interface NoProjectSelectedProps {
  onStartAddProject: () => void;
}

export interface SidebarProps {
  projects: Project[];
  onStartAddProject: () => void;
  onSelectProject: (id: number) => void;
  selectedProjectId?: number;
}

export interface NewProjectProps {
  onAddProject: (projectData: any) => void;
  onCancel: () => void;
}

export interface ModalProps {
  children: React.ReactNode;
  buttonCaption: string;
}

export interface SelectedProjectProps {
  project: Project;
  onDelete: () => void;
}
