import './Work.css'
import React, { useEffect, useState } from 'react'
import {Link } from "react-router-dom";

function Work(props) {
  const [from,setfrom] = useState('')
  const [aligntext,setaligntext] = useState('')
  useEffect(() => {
    //Runs only on the first render
    if (props.direction === 'rtl'){
      setfrom('flex-start')
      setaligntext('left')
  }
  else {
    setfrom('flex-end')
    setaligntext('right')
  }
  }, [props.direction]);
  return (
    <div className={`${props.direction} Workcard`}>
      <div className='imgcard' style={{background: `url(${props.background}) no-repeat`, backgroundSize:'cover'}}>
        <img src= {`${props.img}`} alt={`${props.heading}`} />
      </div>
      <div className='ContentText' style={{alignItems: from , textAlign:aligntext}}>
        <p className='workheading'>{props.heading}</p>
        <p className='worktext'>{props.text} </p>
        <div className='submit padd'>
          <Link to='/Contact-Us'>Have some work</Link> </div>
      </div>
    </div>
  )
}

export default Work
