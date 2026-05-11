import { useState, useEffect } from "react";
import { 
    getTasks, 
    createTask, 
    updateTask,
    removeTask
} from "../services/taskService";

export function useTasks () {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        async function fetchTasks() {
          try{
            const data = await getTasks();
            console.log(data);
            setTasks(data);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        }
    
        fetchTasks();
    }, []);
    
    const filteredTasks = tasks.filter(task => {
      if(filter === "completed") return task.completed;
      if(filter === "pending") return !task.completed;

      return true;
    })

    //CRUD
    async function addTask() {
        if(input.trim() === "") return;
    
        const res = await createTask({
          title: input,
          completed: false
        });
    
        const newTask = await res.json();
        setTasks(prev => [...prev, newTask]);
        console.log(tasks);
        setInput("");
    }
    
    async function toggleTask (id) {
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
    
        setTasks(prev => 
          prev.map( task => 
          task.id === id ? updatedTask : task
        ));
    }
    
    async function deleteTask (id) {
        await removeTask(id);
    
        setTasks(tasks.filter(task => task.id !== id));
    }
    
    return {
        tasks,
        input, 
        isLoading,
        filteredTasks,
        setFilter,
        setInput,
        addTask,
        editTask,
        toggleTask,
        deleteTask
    };
}
