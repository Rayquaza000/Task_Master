import React from 'react'
import ViewTasksSection from './ViewTasksSection'
import StatisticsSection from './StatisticsSection'

function DataSection(props) {
  return (
    <div>
    {
        props.vtv ? <ViewTasksSection taskData={props.taskData} /> : <StatisticsSection/>
    }
    </div>
  )
}

export default DataSection