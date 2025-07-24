import React from 'react'

function StatisticsSection() {
  if(localStorage.getItem("current_task_count")==null)
  {
    localStorage.setItem("current_task_count","0")
  }
  return (
    <div>
      <div className='w-11/12 h-20 m-5 bg-teal-600 border-2 border-black flex justify-between items-center text-3xl text-white'>
        <div className='flex justify-center w-1/3'>Current Tasks</div><div className='flex justify-center w-1/3'>:</div><div className='flex w-1/3 justify-center'>{localStorage.getItem("current_task_count")}</div>
      </div>
    </div>
  )
}

export default StatisticsSection