import React from 'react'
import * as Components from './components/index'

function Courses() {
  return (
    <div className='Coursespage'>
      <div className='empty darkblue'></div>
      <Components.Coursesheader/>
      <Components.Aboutcourse/>
      <Components.Courseplan/>
    </div>
  )
}

export default Courses
