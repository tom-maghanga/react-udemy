
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks]=useState([{id: 5460, name: "Learn ReactJs", completed:true},{id: 5470, name: "Design Logo", completed:false},{id:5480, name: "Go to Towncom", completed:false}]);
  function handleDelete(id){
    setTasks(tasks.filter(task => task.id !==id));
  }

  return (
    <div className="App">
        <h1>Task List</h1>
      <ul>
        
       {tasks.map( (task) =>(
        <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
          <span>{task.id} - {task.name} helo- {task.completed}</span>
        <button onClick={() => handleDelete(task.id)} className='delete'> Delete</button>
        </li>
       ))}
      </ul>

    </div>
  );
}

export default App;
