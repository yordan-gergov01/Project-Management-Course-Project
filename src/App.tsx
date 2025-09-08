import { useState } from "react";
import NewProject from "./features/projects/NewProject";
import NoProjectSelected from "./features/projects/NoProjectSelected";
import Sidebar from "./ui/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
