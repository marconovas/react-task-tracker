import TaskItem from "./TaskItem"

function TaskList ({ tasks, toggleTasks, deleteTask, editTask }) {
    return(
        <ul>
          {tasks.map((task, index) => (
            <TaskItem 
              key={index} 
              task={task} 
              toggleTasks={toggleTasks} 
              deleteTask={deleteTask}
              editTask={editTask} 
            />
          ))}
        </ul>
    )
}

export default TaskList