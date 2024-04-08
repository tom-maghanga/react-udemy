

function TaskCard({task, handleDelete}) {
  return (
    <>
    <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
        <span>{task.id} - {task.name} helo- {task.completed}</span>
      <button onClick={() => handleDelete(task.id)} className='delete'> Delete</button>
      </li>
    </>
  )
}

export default TaskCard