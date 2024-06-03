import React, { useState } from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import TaskColumn from './components/TaskColumn';

const App = () => {
  const [task, setTask] = useState([])

  console.log("this is my task", task)
  return (
    <div className='app'>
      <TodoForm setTask={setTask} />

      <main className='taskContainer'>
        <TaskColumn title={"TODO"} status={"TODO"} task={task} />
        <TaskColumn title={"IN PROGRESS"} status={"IN PROGRESS"} task={task} />
        <TaskColumn title={"DONE"} status={"DONE"} task={task} />

      </main>
    </div>
  )
}

export default App


