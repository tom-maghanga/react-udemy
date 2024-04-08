import './App.css';
import BoxCard from './components/BoxCard';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  

  return (

    <div className="App">
          <Header/>
          <TaskList/>
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
    </div>
  );
}

export default App;
