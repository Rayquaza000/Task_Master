import React, { useEffect, useRef, useState } from 'react'
import ToDoItem from './ToDoItem'

function ToDoList(props) {

  const [toDoItemsArray,setToDoItemsArray]=useState([]);
  const isMounted=useRef(false);
  useEffect(()=>{
    if(!isMounted.current)
    {
      isMounted.current=true
      return;
    }
    if(props.taskData==null || props.taskData.description==="")
    {
      return;
    }
    setToDoItemsArray(prevItems=>[...prevItems,props.taskData])
    console.log(toDoItemsArray);
    
  },[props.taskData])
  
  function deleteThisToDoItem(idtoremove){
    setToDoItemsArray(toDoItemsArray.filter((item)=>item.id!=idtoremove));
  }

  return (
    // <div className='w-full h-fit p-5' ref={todolist}>
    //     <ToDoItem/>
    // </div>
    <div className='w-full h-fit p-5'>
    {toDoItemsArray.map((value,index)=>{
      // console.log(todoitemsarray)
      return <ToDoItem key={value.id} key1={value.id} itemDescription={value.description} deleteThisToDoItem={(idtoremove)=>deleteThisToDoItem(idtoremove)} priorityChecked={value.isPriority}/>})}
    </div>
  )
}

export default ToDoList