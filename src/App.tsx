import { useEffect, useState } from "react";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";
import { Task } from "./models/Task";

function App() {
  const message: string = "Gerenciador de Tarefas";
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (!savedTasks) return [];

    return JSON.parse(savedTasks) as Task[];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId: number): void {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onTaskDelete(taskId: number): void {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title: string, descripton: string): boolean {
    if (title.trim() == "") {
      alert("Título Inválido");
      return false;
    }

    if (descripton.trim() == "") {
      alert("Descrição Inválida");
      return false;
    }

    const newTask = new Task(
      tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      descripton,
    );

    setTasks([...tasks, newTask]);

    return true;
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center">
      <div className="w-125 space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          {message}
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
