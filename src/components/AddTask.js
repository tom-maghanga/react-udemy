import { useState } from "react"
import "./AddTask.css"

function AddTask({tasks, setTasks, task, setTask}) {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState();

  const handleReset = () =>{
    setTaskValue("");
    setProgress(false);
  }

  const handleChange = (event) => {
    setTaskValue(event.target.value);
}

  const handleSubmit = (event) =>{
    event.preventDefault();

    if(task.id){
      const date = new Date();
      const updateTask = tasks.map((todo) => (todo.id == task.id) ? {id : task.id, name : task.name, time : `${date.toLocaleTimeString()} ${date.toDateString()}` } : todo )
      setTasks(updateTask)
    }else{
      const date = new Date();
    const task  = {
      id : Math.floor(Math.random() * 10000),
      name : event.target.task.value,
      time : `${date.toLocaleTimeString()} ${date.toDateString()}`
    }
  }

    setTasks([...tasks, task]);

    handleReset();
  }
  return (
    <section className='addtask'>
      <form>
      <label htmlFor='task'>Task name : </label>
        <input type='text' onChange={handleChange} value={task.name} name ="task" id='task' autoComplete="off"></input>
        <select onChange={(event) =>setProgress(event.target.value)} value={progress}>
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
        <button onClick={handleSubmit} type='submit'>Add Task</button>
        <button onClick={handleReset} className="reset">Reset</button>
      </form>
      <p>{taskValue}</p>
    </section>
  )
}

export default AddTask