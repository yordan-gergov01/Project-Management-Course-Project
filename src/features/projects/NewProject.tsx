import { useRef } from "react";
import Input from "../../ui/Input";

import { NewProjectProps } from "../../types/interfaces";

function NewProject({ onAddProject }: NewProjectProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  function handleSave() {
    const enteredTitle = titleRef.current?.value;
    const enteredDescription = descriptionRef.current?.value;
    const enteredDueDate = dueDateRef.current?.value;

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} label="Title" textarea={false} />
        <Input ref={descriptionRef} label="Description" textarea={true} />
        <Input type="date" ref={dueDateRef} label="Due Date" textarea={false} />
      </div>
    </div>
  );
}

export default NewProject;
