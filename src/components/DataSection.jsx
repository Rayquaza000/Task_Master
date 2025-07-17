import React from 'react'
import ViewTasksSection from './ViewTasksSection'
import StatisticsSection from './StatisticsSection'

function DataSection(props) {
    console.log(props.vtv)
  return (
    <div>
    {
        props.vtv ? <ViewTasksSection/> : <StatisticsSection/>
    }
    </div>
  )
}

export default DataSection