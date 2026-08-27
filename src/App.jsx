import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      // chamar a api
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        },
      );

      // pegar os dados que ela retorna
      const data = await response.json();

      // armazenar/persistir os dados no state
      setTasks(data);
    };

    //se quiser pode chamar a função fetchTasks() aqui, mas não é necessário, pois já estamos pegando do localStorage
     // fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        //preciso atualizar essa tarefa
        return { ...task, iscomplete: !task.iscomplete };
      }
      //não preciso atualizar essa tarefa
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSunmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      iscomplete: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center ">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSunmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
