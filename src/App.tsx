import { useState } from "react";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";
import { Task } from "./models/Task";

function App() {
  const message: string = "Gerenciador de Tarefas";
  const [tasks, setTasks] = useState([
    new Task(
      1,
      "Estudar Programação",
      "Estudar programação pra virar um dev full stack",
    ),
    new Task(2, "Estudar ingles", "Estudar ingles para se tornar fluente"),
    new Task(
      3,
      "Estudar Matemática",
      "Estudar Matemática para tirar 10 na prova de álgebra",
    ),
  ]);

  function onTaskClick(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onTaskDelete(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title: string, descripton: string) {
    if (title.trim() == "") {
      alert("Título Inválido");
      return;
    }

    if (descripton.trim() == "") {
      alert("Descrição Inválida");
      return;
    }

    const newTask = new Task(tasks[tasks.length - 1].id + 1, title, descripton);

    setTasks([...tasks, newTask]);
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
