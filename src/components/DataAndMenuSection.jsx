import React, { useState } from 'react'
import MenuSection from './MenuSection'
import DataSection from './DataSection'

function DataAndMenuSection(props) {
    const [viewTasksVisible,setViewTasksVisible]=useState(true);
    const [statisticsVisible,setStatisticsVisible]=useState(false);
  return (
    <div >
        <MenuSection  svtv={setViewTasksVisible} ssv={setStatisticsVisible}/>
        <DataSection vtv={viewTasksVisible}  sv={statisticsVisible} taskData={props.taskData}/>
    </div>
  )
}

export default DataAndMenuSection