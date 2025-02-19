import React from 'react'
import Sidebar from '../../components/sidebar';

const Events = () => {
  return (
    <div className="grid grid-cols-5">
      <Sidebar></Sidebar>
      <div className="col-span-4">
        EVENTS
      </div>
    </div>
  )
}

export default Events;
