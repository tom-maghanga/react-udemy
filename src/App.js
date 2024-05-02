import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AddTask from "./components/AddTask";
import {TaskList} from './components/TaskList';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});


  return (

    <div className="App">
          <Header/>
          <main>
            <AddTask tasks = {tasks} setTasks = {setTasks} task = {task} setTask={setTask}/>
            <TaskList tasks = {tasks} setTasks = {setTasks} task = {task} setTask={setTask}/>
          </main>
          <Footer/>
    </div>
  );
}

export default App;
