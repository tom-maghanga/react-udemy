import { useState } from 'react';
import TaskCard from './TaskCard';


function TaskList() {
    const [tasks, setTasks]=useState([{id: 5460, name: "Learn ReactJs", completed:true},{id: 5470, name: "Design Logo", completed:false},{id:5480, name: "Go to Towncom", completed:false}]);
  function handleDelete(id){
    setTasks(tasks.filter(task => task.id !==id));
  }
  return (
    <>
    <h1>Task List</h1>
    <ul>
      
     {tasks.map( (task) =>(
      <>
      <TaskCard task={task} handleDelete={handleDelete} />
      </>
     ))}
    </ul>
    </>
  )
}

export default TaskList