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
    props.setTaskData({id:Date.now(),description:taskValue,isPriority:isPriority,isCompleted:false});
    
    
      localStorage.setItem("current_task_count",(parseInt(localStorage.getItem("current_task_count"))+1).toString());
    
    localStorage.setItem("pending_tasks",(parseInt(localStorage.getItem("pending_tasks"))+1).toString());
    if(isPriority==true)
    {
      localStorage.setItem("priority_tasks",(parseInt(localStorage.getItem("priority_tasks"))+1).toString());
    }
    
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
    const newDataForLS=props.taskData;
    const combinedDataForLS=[...dataFromLS,newDataForLS];
    localStorage.setItem("tasks",JSON.stringify(combinedDataForLS));
    taskInput.current.value="";
    priorityCheckbox.current.checked=false;
    },[props.taskData]);

  return (
    <header className='flex flex-col p-8 h-auto border-2 border-black bg-gray-200  justify-center items-center text-2xl lg:flex lg:flex-row lg:text-[18px] lg:justify-start' id="headerSection">
      <div className='flex flex-col items-center justify-center lg:w-1/3'>
      <h1 className='text-orange-700 text-5xl font-bold mt-3.5 lg:text-3xl '>Task Master</h1>
      <p className='font-bold text-2xl lg:text-[18px]'>Your To-do List</p>
      </div>
      <div className='gap-2 flex flex-col items-center mt-12 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:w-full'>
      <input type='text' className='border-2 border-black text-3xl p-1 bg-white w-100 lg:text-[18px] lg:w-100' placeholder='Enter task' ref={taskInput}></input>
      <div className='inline mt-2 items-center'>
        <label className='text-2xl lg:text-[18px] items-center' >High Priority? </label>
        <input type='checkbox' name="priority_checkbox" className='w-7 h-7 lg:text-[18px] lg:w-4 lg:h-4 sm:w-6 sm:h-6' ref={priorityCheckbox}></input>
      </div>
      <button className='bg-orange-700 text-white px-4 py-2 border-2 border-black lg:text-[18px] hover:bg-orange-800 transition' onClick={()=>handleAddTaskButtonClick()}>Add task</button>
      </div>
    </header>
  )
}

export default Header