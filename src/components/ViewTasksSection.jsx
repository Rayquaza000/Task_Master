import React, { useRef } from 'react'
import Legend from './Legend'
import ToDoList from './ToDoList'

function ViewTasksSection() {
    
  return (
    <div className='flex flex-col'>
        <Legend/>
        <ToDoList/>
    </div>
  )
}

export default ViewTasksSection