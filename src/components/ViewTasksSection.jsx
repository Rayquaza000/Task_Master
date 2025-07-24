import React, { useRef } from 'react'
import Legend from './Legend'
import ToDoList from './ToDoList'

function ViewTasksSection(props) {
    
  return (
    <div className='flex flex-col items-center bg-blue-200 w-full border-2 border-black'>
        <Legend/><br></br>
        <p className='text-2xl font-bold lg:text-[18px]'>
          Double click on any task to mark it as completed.
        </p>
        <ToDoList taskData={props.taskData}/>
    </div>
  )
}

export default ViewTasksSection