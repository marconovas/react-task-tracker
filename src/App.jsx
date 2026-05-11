import { useTasks } from "./hooks/useTasks";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

function App() {
  const {
    tasks, 
    isLoading,
    input,
    filteredTasks,
    setFilter,
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

      <TaskFilter setFilter={setFilter}/>

      {
        tasks.length === 0 ? (
          <h2>No hay tareas actualmente</h2>
        ) : (          
          <TaskList tasks={filteredTasks} toggleTasks={toggleTask} deleteTask={deleteTask} editTask={editTask}/>
        )
      }

    </div>
  )
}

export default App
