export type ProjectsState = {
  selectedProjectId: null | undefined | number;
  projects: any[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
};

export type ModalHandle = {
  open: () => void;
};
