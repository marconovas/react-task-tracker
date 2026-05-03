import { useState } from "react";

function TaskItem ({ task, toggleTasks, deleteTask, editTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState("");

    function handleEdit(){
        setIsEditing(true);
    }

    function handleSave() {
        if(editText.trim() === "") return;

        editTask(task.id, editText);
        setIsEditing(false);
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
                {task.text}
                <input 
                    type="checkbox"
                    checked={task.completed} 
                    onChange={() => toggleTasks(task.id)}
                />
                <button onClick={handleEdit}>Editar</button>
                <button type="button" onClick={() => deleteTask(task.id)}>Eliminar</button>
            </>
        )}
    </li>
    );
}

export default TaskItem;