import { useState } from 'react';
import TaskCard from './TaskCard';
import "./TaskList.css";
import "./AddTask.css";

export const TaskList = ({tasks, setTasks, task, setTask}) => {
    
    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

    function handleEdit(id){
        const selectedTask = tasks.find(task => task.id === id);
        setTask(selectedTask)
    }

  return (
    <section className='tasklist'>
        <ul>
            <div className='header'>
                <h1>TaskList</h1>
            </div>
            { tasks.map((task) => (
                <TaskCard key={task.id} task={task} handleDelete={handleDelete} handleEdit={handleEdit} />
            )) }
        </ul>
    </section>
  )
}