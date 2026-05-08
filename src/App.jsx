import { useTasks } from "./hooks/useTasks";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const {
    tasks, 
    isLoading,
    input,
    addTask,
    toggleTask,
    setInput,
    editTask,
    deleteTask
  } = useTasks();

  if(isLoading) return <p>Cargando...</p>;


  return (
    <div>
      <h1>Task Tracker</h1>

      <TaskInput input={input} setInput={setInput} handleTask={addTask}/>

      {
        tasks.length === 0 ? (
          <h2>No hay tareas actualmente</h2>
        ) : (
          <TaskList tasks={tasks} toggleTasks={toggleTask} deleteTask={deleteTask} editTask={editTask}/>
        )
      }

    </div>
  )
}

export default App
