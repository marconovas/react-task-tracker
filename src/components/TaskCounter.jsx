
function TaskCounter ({total, completed, pending}) {
    return(
        <div>
            <p>Total: {total}</p>
            <p>Completadas: {completed}</p>
            <p>Pendientes: {pending}</p>
        </div>
    )
}

export default TaskCounter;