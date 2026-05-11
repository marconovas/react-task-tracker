
function TaskFilter ({ setFilter }) {
    return(
        <div>
        <button onClick={() => setFilter("all")}>
          Todas
        </button>

        <button onClick={() => setFilter("completed")}>
          Completadas
        </button>

        <button onClick={() => setFilter("pending")}>
          Pendientes
        </button>
      </div>
    )
}

export default TaskFilter;