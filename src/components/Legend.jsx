import React from 'react'

function Legend() {
  return (
    <div className=' w-full h-auto'>
        <div className='w-auto h-auto mt-7 inline-block ml-7 mr-7'>
            <div className='border-2 border-black bg-gray-200 w-12 h-7 inline-block mr-3'></div>
            <span className='text-2xl m-0 p-0'>Task Pending</span>  
        </div>      
        <div className='w-auto h-auto mt-7 inline-block ml-7 mr-7'>
            <div className='border-2 border-black bg-lime-400 w-12 h-7 inline-block mr-3'></div>
            <span className='text-2xl m-0 p-0'>Task Completed</span>  
        </div>   
        
        <div className='w-auto h-auto mt-7 inline-block ml-7 mr-7'>
            <div className='border-2 border-black bg-red-500 w-12 h-7 inline-block mr-3'></div>
            <span className='text-2xl m-0 p-0'>High Priority Task</span>  
        </div>         
    </div>
  )
}

export default Legend