import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { tasks } from './Tasks.json';
import NavBar from './components/NavBar';
import FormTasks from './components/FormTasks';

function App() {
  const [Task, setTask] = useState(tasks);

  console.log(Task);

  return (
    <div className='App'>
      <NavBar Task={Task} />
      <div className='row'>
        <div className='col-md-4'>
          <FormTasks Task={Task} setTask={setTask} />
        </div>

        <div className='col-md-8'>
          <div className='row '>
            {Task.map((Task, i) => (
              <div key={i}>
                <div className='card mt-4 ml-2' style={{ width: '200px' }}>
                  <div className='card-title text-center'>
                    <h3>{Task.title}</h3>

                    <span className='badge badge-pill badge-danger ml-2'>{Task.priority}</span>
                  </div>
                  <div className='card-body'>{Task.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={logo} className='App-logo' alt='logo' />
    </div>
  );
}

export default App;
