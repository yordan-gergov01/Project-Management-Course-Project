import NewProject from "./features/projects/NewProject";
import Sidebar from "./ui/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NewProject />
    </main>
  );
}

export default App;
