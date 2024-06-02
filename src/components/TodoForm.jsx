import React from 'react';
import './TodoForm.css'

const TodoForm = () => {
    return (
        <div className='todoFormContainer'>
            <form className='formContainer'>
                <input type="text" className='input' placeholder='Enter the Task' />
                <input type="text" className='input' placeholder='Enter task Description' />
                <button type='submit' className='button'> + Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm