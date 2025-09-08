import { SidebarProps } from "../types/interfaces";
import Button from "./Button";

function Sidebar({ onStartAddProject }: SidebarProps) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      {/* TODO: add list with projects */}
    </aside>
  );
}

export default Sidebar;
