import React from 'react'
import Sidebar from '../../components/sidebar';

const Resources = () => {
  return (
    <div className="grid grid-cols-5">
      <Sidebar></Sidebar>
      <div className="col-span-4">
        RESOURCES
      </div>
    </div>
  )
}

export default Resources;
