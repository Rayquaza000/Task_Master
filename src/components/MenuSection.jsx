import React, { useRef } from 'react'

function MenuSection(props) {

    const viewTaskButton=useRef(null);
    const statisticsButton=useRef(null);

    function handleViewTasksButtonClick()
    {
        props.svtv(true);
        props.ssv(false);
        viewTaskButton.current.style.backgroundColor="#BFDBFE";
        statisticsButton.current.style.backgroundColor="white";
    }
    function handleStatisticsButtonClick()
    {
        props.ssv(true);
        props.svtv(false);
        statisticsButton.current.style.backgroundColor="#BFDBFE";
        viewTaskButton.current.style.backgroundColor="white";
    }

  return (
    <div className='w-full h-20 bg-gray-200 border-2 border-black flex flex-row lg:flex lg:flex-col lg:w-1/3 lg:h-full lg:text-[18px]'>
        <div className='w-1/2 h-full border-2 border-black flex flex-col justify-center items-center text-2xl bg-blue-200 font-bold lg:w-full lg:h-10 lg:text-[18px]' ref={viewTaskButton} onClick={()=>handleViewTasksButtonClick()}>View Tasks</div>
        <div className='w-1/2 h-full border-2 border-black flex flex-col justify-center items-center text-2xl bg-white font-bold lg:w-full lg:h-10 lg:text-[18px]' ref={statisticsButton} onClick={()=>handleStatisticsButtonClick()}>Statistics</div>
    </div>
  )
}

export default MenuSection