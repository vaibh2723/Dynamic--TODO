import React from 'react'
import "./TaskColumn.css";
import TaskCard from './TaskCard'

const TaskColumn = ({ title, task, status }) => {

    return (
        <div className='taskColumn'>
            <h2>{title}</h2>
            {
                task?.map((taskValue, index) => {
                    if (taskValue.status === status) {
                        return <TaskCard title={taskValue.text} description={taskValue.subText} />
                    }
                })
            }
        </div>

    )
}

export default TaskColumn