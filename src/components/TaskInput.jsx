function TaskInput ({ input, setInput, handleTask }) {
    return(
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe una Tarea"
            />
    
          <button onClick={handleTask}>Agregar</button>
        </div>
    )
}

export default TaskInput