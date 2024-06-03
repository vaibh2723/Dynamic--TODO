import React, { useState } from 'react';
import './TodoForm.css'

const TodoForm = ({ setTask }) => {

    const [taskData, setTaskData] = useState({
        text: '',
        subText: '',
        status: 'TODO'
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setTaskData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("this is clicked")
        setTask((prev) => {
            return [...prev, taskData]
        })
    }



    return (
        <div className='todoFormContainer'>
            <form className='formContainer' onSubmit={handleSubmit}>
                <input type="text" className='input' name='text' placeholder='Enter the Task' onChange={handleInputChange} />
                <input type="text" className='input' name='subText' placeholder='Enter task Description' onChange={handleInputChange} />
                <button type='submit' className='button'> + Add Task</button>
            </form>
        </div >
    )
}

export default TodoForm