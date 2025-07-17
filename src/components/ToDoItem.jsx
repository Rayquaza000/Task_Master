import React, { useRef } from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";



function ToDoItem() {
  let task_is_completed=false;
  const task_description_ref=useRef(null);
  function markAsCompleted(){
    console.log(task_is_completed);
    if(task_is_completed==false){
      task_is_completed=true;
      
      task_description_ref.current.style.backgroundColor="green";
    }
  }
  return (
    <div className='w-full h-24 p-0 flex text-2xl' >
        <div id="task_description" ref={task_description_ref} className='w-2/3 h-full pt-5 pl-5 pb-2.5 bg-gray-200 border-2 border-black flex justify-center items-center overflow-x-scroll' onDoubleClick={markAsCompleted}>
            Go to the grocery shop and buy milk, asdasdadasdsandk
        </div>
        <div id="task_delete_button" className='w-1/6 h-full p-2.5 bg-gray-100 border-2 border-black flex justify-center items-center text-4xl text-red-700'>
            <AiOutlineDelete />
        </div>
        <div id="task_edit_button" className='w-1/6 h-full p-2.5 bg-gray-100 border-2 border-black flex justify-center items-center text-4xl'>
            <CiEdit />
        </div>
    </div>
  )
}

export default ToDoItem