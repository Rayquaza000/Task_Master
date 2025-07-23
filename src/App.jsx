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
  return (
    <>
      {/* <Header setAddTaskData={setAddTaskData} setPriorityChecked={setPriorityChecked}/>
      <DataAndMenuSection addTaskData={addTaskData} setAddTaskData={setAddTaskData} priorityChecked={priorityChecked}/> */}
      <Header setTaskData={setTaskData} taskData={taskData}/>
      <DataAndMenuSection taskData={taskData}/>
    </>
  )
}

export default App
