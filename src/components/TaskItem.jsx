import { useState } from "react";

function TaskItem ({ task, toggleTasks, deleteTask, editTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState("");

    function handleEdit(){
        setEditText(task.title);
        setIsEditing(true);
    }

    async function handleSave() {
        if(editText.trim() === "") return;

        await editTask(task.id, editText);
        setIsEditing(false);
    }

    function handleDelete () {
        const confirm = window.confirm(
            "¿Seguro quieres eliminar esta tarea?"
        );

        if(confirm){
            deleteTask(task.id)
        }
    }

    return (
    <li>
        {isEditing ? (
            <>
                <input 
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)} 
                />
                <button onClick={handleSave}>Guardar</button>
            </>
        ) : (
            <>
                {task.title}
                <input 
                    type="checkbox"
                    checked={task.completed} 
                    onChange={() => toggleTasks(task.id)}
                />
                <button onClick={handleEdit}>Editar</button>
                <button type="button" onClick={handleDelete}>
                    Eliminar
                </button>
            </>
        )}
    </li>
    );
}

export default TaskItem;