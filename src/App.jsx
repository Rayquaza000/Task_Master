import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import DataAndMenuSection from './components/DataAndMenuSection'

function App() {
  //const [addTaskData,setAddTaskData]=useState(null);
  //const [priorityChecked,setPriorityChecked]=useState(false);
  const [taskData,setTaskData]=useState(null);
  if(localStorage.getItem("completed_tasks")==null)
  {
    localStorage.setItem("completed_tasks","0")
  }
  if(localStorage.getItem("priority_tasks")==null)
  {
    localStorage.setItem("priority_tasks","0")
  }
  if(localStorage.getItem("pending_tasks")==null)
  {
    localStorage.setItem("pending_tasks","0")
  }
  if(localStorage.getItem("current_task_count")==null)
    {
      localStorage.setItem("current_task_count","0");
    }
  return (
    <div className='h-full'>
      {/* <Header setAddTaskData={setAddTaskData} setPriorityChecked={setPriorityChecked}/>
      <DataAndMenuSection addTaskData={addTaskData} setAddTaskData={setAddTaskData} priorityChecked={priorityChecked}/> */}
      <Header setTaskData={setTaskData} taskData={taskData}/>
      <DataAndMenuSection taskData={taskData}/>
    </div>
  )
}

export default App
