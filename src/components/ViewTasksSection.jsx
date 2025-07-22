import React, { useRef } from 'react'
import Legend from './Legend'
import ToDoList from './ToDoList'

function ViewTasksSection(props) {
    
  return (
    <div className='flex flex-col items-center'>
        <Legend/><br></br>
        <p className='text-2xl font-bold'>
          Double click on any task to mark it as completed.
        </p>
        <ToDoList taskData={props.taskData}/>
    </div>
  )
}

export default ViewTasksSection