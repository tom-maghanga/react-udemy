import { useState } from "react"
import "./AddTask.css"

function AddTask({tasks, setTasks}) {
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
    const task  = {
      id : Math.floor(Math.random() * 10000),
      name : taskValue,
      completed : Boolean(progress)
    }

    setTasks([...tasks, task]);

    console.log(task); 
    handleReset();
  }
  return (
    <section className='addtask'>
      <form>
      <label htmlFor='task'>Task name : </label>
        <input type='text' onChange={handleChange} value={taskValue} name ="task" id='task' autoComplete="off"></input>
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