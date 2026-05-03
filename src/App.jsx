import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleTask() {
    if(input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    }

    setTasks([...tasks, newTask]);
    console.log(tasks);
    setInput("");
  }

  function toggleTasks (id) {
    const updatedTasks = tasks.map(task => 
      task.id === id ? 
      {...task, completed: !task.completed}
      : task
    );

    setTasks(updatedTasks);
  }

  function editTask (id, text) {
    const editedTasks = tasks.map(
      task => task.id === id ?
      {...task, text: text}
      : task
    );

    setTasks(editedTasks);
  }

  function deleteTask (id) {
    const filteredTasks = tasks.filter(task => task.id !== id);

    setTasks(filteredTasks);
  }

  return (
    <div>
      <h1>Task Tracker</h1>

      <TaskInput input={input} setInput={setInput} handleTask={handleTask}/>

      {tasks.length === 0 ? (
        <h2>No hay tareas actualmente</h2>
      ) : (
        <TaskList tasks={tasks} toggleTasks={toggleTasks} deleteTask={deleteTask} editTask={editTask}/>
      )}

    </div>
  )
}

export default App
