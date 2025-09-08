export interface InputProps {
  textarea: boolean;
  label: string;
}

export interface ButtonProps {
  children: string;
  onClick: () => void;
}

export interface NoProjectSelectedProps {
  onStartAddProject: () => void;
}

export interface SidebarProps {
  onStartAddProject: () => void;
}
