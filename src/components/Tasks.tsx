import { ChevronRightIcon } from "lucide-react";
import { Trash } from "lucide-react";
import { Task } from "../models/Task";

interface TasksProps {
  tasks: Task[];

  onTaskClick(taskId: number): void;
  onTaskDelete(taskId: number): void;
}

function Tasks({ tasks, onTaskClick, onTaskDelete }: TasksProps) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task: Task) => {
        return (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 w-full text-left text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}
            >
              {task.title}
            </button>
            <button className="bg-slate-400 text-white p-2 rounded-md">
              <ChevronRightIcon />
            </button>

            <button
              onClick={() => onTaskDelete(task.id)}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <Trash />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Tasks;
