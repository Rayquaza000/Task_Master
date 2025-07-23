import React, { useEffect, useLayoutEffect, useRef } from 'react'
import "./Header.css";
const Header = (props) => {
  //let taskInput=document.getElementById("taskInput");
  let taskInput=useRef(null);
  let priorityCheckbox=useRef(null);
  const isMount=useRef(false);
  
  console.log(isMount);
  function handleAddTaskButtonClick(){
    const taskValue= taskInput.current.value.trim();
    //console.log(priorityCheckbox);
    if(taskValue==="")
    {
      return;
    }
    const isPriority=priorityCheckbox.current.checked;
    props.setTaskData({id:Date.now(),description:taskValue,isPriority:isPriority});
    
    
  }  

useEffect(()=>{
    if(!props.taskData)
    {
      return;
    }
    let dataFromLS=JSON.parse(localStorage.getItem("tasks"));
    if(dataFromLS==null)
    {
      dataFromLS=[];
    }
    console.log(props.taskData);
    const newDataForLS=props.taskData;
    console.log(newDataForLS);
    const combinedDataForLS=[...dataFromLS,newDataForLS];
    localStorage.setItem("tasks",JSON.stringify(combinedDataForLS));
    taskInput.current.value="";
    priorityCheckbox.current.checked=false;
    },[props.taskData]);

  return (
    <header className='flex flex-col h-auto bg-gray-200 justify-center items-center text-2xl' id="headerSection">
      <h1 className='text-orange-700 text-5xl font-bold mt-3.5'>Task Master</h1>
      <p className='font-bold text-2xl'>Your To-do List</p>
      <input type='text' className='border-2 border-black text-3xl p-1 bg-white mt-10 w-100'placeholder='Enter task' ref={taskInput}></input>
      <div className='inline mt-2'>
        <label className='text-2xl' >High Priority? </label>
        <input type='checkbox' className='w-7 h-7' ref={priorityCheckbox}></input>
      </div>
      <button className='bg-orange-700 text-white p-3 mt-3.5 mb-7 border-2 border-black' onClick={()=>handleAddTaskButtonClick()}>Add task</button>
    </header>
  )
}

export default Header