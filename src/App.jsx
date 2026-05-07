import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { createTask, getTasks, updateTask, removeTask } from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchTasks() {
      const data = await getTasks();
      console.log(data);
      setTasks(data);
    }

    fetchTasks();
  }, []);

  async function handleTask() {
    if(input.trim() === "") return;

    const res = await createTask({
      title: input,
      completed: false
    });

    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    console.log(tasks);
    setInput("");
  }

  async function toggleTasks (id) {
    const toggleTask = tasks.find(t => t.id === id);

    const updatedTask = {
      ...toggleTask, 
      completed: !toggleTask.completed,
    };

    await updateTask(id, updatedTask);

    setTasks(
      tasks.map(task => 
        task.id === id ? updatedTask : task
      )
    );
  }

  async function editTask (id, text) {
    const editedTask = tasks.find(task => task.id === id);

    const updatedTask = {
      ...editedTask,
      title: text,
    }

    await updateTask(id, updatedTask);

    setTasks(
      tasks.map( task => 
      task.id === id ? updatedTask : task
    ));
  }

  async function deleteTask (id) {
    await removeTask(id);

    setTasks(tasks.filter(task => task.id !== id));
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
