import { useState } from 'react';
import TaskCard from './TaskCard';
import BoxCard from './BoxCard';
import "./TaskList.css";

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
     <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
     ))}
    </ul>

    <BoxCard result="success">
            <p className='title'> Loren ipsum dolor </p>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales tempor augue tristique porttitor. 
            </p>
          </BoxCard>

          <BoxCard result="warning">
            <p className='title'> Loren ipsum dolor </p>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales tempor augue tristique porttitor. 
            </p>
          </BoxCard>
    </>
  )
}

export default TaskList