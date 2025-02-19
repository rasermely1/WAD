import React from 'react'
import Sidebar from '../../components/sidebar';

const Jobs = () => {
  return (
    <div className="grid grid-cols-5">
      <Sidebar></Sidebar>
      <div className="col-span-4">
        JOBS
      </div>
    </div>
  )
}

export default Jobs;
