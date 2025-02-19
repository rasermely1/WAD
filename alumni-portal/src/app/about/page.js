import React from 'react'
import Sidebar from '../components/sidebar';

const About = () => {
  return (
    <div className="grid grid-cols-5">
      <Sidebar></Sidebar>
      <div className="col-span-4">
        About
      </div>
    </div>
  )
}

export default About;
