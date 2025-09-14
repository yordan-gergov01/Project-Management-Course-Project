import { Project, Task } from "./types";

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
  selectedProjectId?: number | null;
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
  tasks: Task[];
  onDelete: () => void;
  onAddTask: (text: string) => void;
  onDeleteTask: (id: number) => void;
}

export interface TasksProps {
  tasks: Task[];
  onAdd: (text: string) => void;
  onDelete: (id: number) => void;
}

export interface NewTaskProps {
  onAdd: (enteredTask: string) => void;
}
