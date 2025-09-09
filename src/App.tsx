import { useState } from "react";

import NewProject from "./features/projects/NewProject";
import NoProjectSelected from "./features/projects/NoProjectSelected";
import Sidebar from "./ui/Sidebar";
import { ProjectsState } from "./types/types";

function App() {
  const [projectsState, setProjectsState] = useState<ProjectsState>({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData: any) {
    setProjectsState((prevState) => {
      const newProject = {
        id: Math.random(),
        ...projectData,
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
