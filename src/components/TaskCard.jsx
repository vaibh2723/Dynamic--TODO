import React from 'react';
import "./TaskCard.css"

const TaskCard = ({ title, description }) => {
    return (
        <div className='taskCardContainer'>
            <p className='taskCardHeading'>{title}</p>
            <p className='taskCardSubHeading'>{description}</p>

            <div className='taskCardButtonContainer'>
                <button className='taskCardDeleteButton taskCardButton'>Delete Task</button>
                <button className='taskCardMoveButton taskCardButton'>Move Task</button>
            </div>
        </div>
    )
}

export default TaskCard