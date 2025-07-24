import React from 'react'

function StatisticsSection() {
  if(localStorage.getItem("current_task_count")==null)
  {
    localStorage.setItem("current_task_count","0")
  }
  return (
    <div className='bg-blue-200 p-5 w-full border-2 border-black'>
      <div className='w-11/12 h-20 m-5 bg-cyan-900 border-2 border-black flex justify-center items-center text-3xl text-white'>
        <div className='flex justify-end w-1/3'>Current Tasks</div><div className='flex justify-center w-1/6'>:</div><div className='flex w-1/3 justify-start'>{localStorage.getItem("current_task_count")}</div>
      </div>
      <div className='w-11/12 h-fit m-5 p-3.5 bg-blue-300 border-2 border-black text-3xl'>
        <div className='w-full h-full flex justify-center'>
          <div className='flex justify-end w-1/3'>Completed Tasks</div><div className='flex justify-center w-1/6'>:</div><div className='flex w-1/3 justify-start'>{localStorage.getItem("completed_tasks")}</div>
          </div>
          <br></br>
        <div className='w-full h-full flex justify-center'>
        <div className='flex justify-end w-1/3'>Pending High Priority Tasks</div><div className='flex justify-center w-1/6'>:</div><div className='flex w-1/3 justify-start'>{localStorage.getItem("priority_tasks")}</div>
        </div>
        <br></br>
        <div className='w-full h-full flex justify-center'>
        <div className='flex justify-end w-1/3'>Pending Tasks</div><div className='flex justify-center w-1/6'>:</div><div className='flex w-1/3 justify-start'>{localStorage.getItem("pending_tasks")}</div>
        </div>
      </div>

    </div>
  )
}

export default StatisticsSection