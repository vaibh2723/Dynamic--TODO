import React from 'react'
import './App.css';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <div className='app'>
      <TodoForm />

      <main className='mainContainer'>
        <section>PENDING</section>
        <section>TODO</section>
        <section>DONE</section>
      </main>
    </div>
  )
}

export default App


