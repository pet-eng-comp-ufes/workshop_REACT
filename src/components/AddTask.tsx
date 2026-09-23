import { useState } from "react";

interface AddTaskProps {
  onAddTaskSubmit(title: string, descripton: string): void;
}

function AddTasks({ onAddTaskSubmit }: AddTaskProps) {
  const [title, setTitle] = useState("");
  const [descripton, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="bg-white rounded-md p-2 text-1xl"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="bg-white rounded-md p-2 text-1xl"
        value={descripton}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        className="bg-slate-500 p-2 rounded-md text-white"
        onClick={() => onAddTaskSubmit(title, descripton)}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
