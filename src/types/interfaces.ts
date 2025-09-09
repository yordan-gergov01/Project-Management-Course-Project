import { Project } from "./types";

export interface InputProps {
  textarea: boolean;
  label: string;
  type?: string;
}

export interface ButtonProps {
  children: string;
  onClick: () => void;
}

export interface NoProjectSelectedProps {
  onStartAddProject: () => void;
}

export interface SidebarProps {
  projects: Project[];
  onStartAddProject: () => void;
}

export interface NewProjectProps {
  onAddProject: (projectData: any) => void;
}
