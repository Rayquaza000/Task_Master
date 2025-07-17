import React, { useState } from 'react'
import MenuSection from './MenuSection'
import DataSection from './DataSection'

function DataAndMenuSection() {
    const [viewTasksVisible,setViewTasksVisible]=useState(true);
    const [statisticsVisible,setStatisticsVisible]=useState(false);
    console.log(viewTasksVisible)
  return (
    <div >
        <MenuSection  svtv={setViewTasksVisible} ssv={setStatisticsVisible}/>
        <DataSection vtv={viewTasksVisible}  sv={statisticsVisible} />
    </div>
  )
}

export default DataAndMenuSection