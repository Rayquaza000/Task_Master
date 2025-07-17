import React from 'react'

function MenuSection(props) {

    function handleViewTasksButtonClick()
    {
        props.svtv(true);
        props.ssv(false);
    }
    function handleStatisticsButtonClick()
    {
        props.ssv(true);
        props.svtv(false);
    }

  return (
    <div className='w-full h-20 bg-gray-200 border-2 border-black flex flex-row'>
        <div className='w-1/2 h-full border-2 border-black flex flex-col justify-center items-center text-2xl bg-white font-bold' onClick={()=>handleViewTasksButtonClick()}>View Tasks</div>
        <div className='w-1/2 h-full border-2 border-black flex flex-col justify-center items-center text-2xl bg-white font-bold' onClick={()=>handleStatisticsButtonClick()}>Statistics</div>
    </div>
  )
}

export default MenuSection