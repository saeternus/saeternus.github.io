import React from 'react'
import './Coursesheader.css'
import Course from '../assets/image.png'
import Check from '../assets/check.png'

function Coursesheader() {
  return (
    <>
    <div className='headerbox darkblue'>
      <div className='headertext'>
        <div className='courseheading'>
        UX & Web Design Master Course: 
        <br />
        Strategy, Design, Development
        </div>
        <div className='coursedes'>
        Learn how to apply User Experience (UX) principles to your website designs, code a variety of sites, and increase sales!
        </div>
        <div className='coursepublish'>
            <div className='circle'></div>
            <div>Published By </div>
            <div className='name'>Joe Natoli</div>
            <div className='checkicon'>
            <img src={Check} alt="" /></div>
        </div>
        <div className='registerbutton'>Register Now</div>
      </div>
      <div className='headerimage'>
        <img src={Course} alt="" />
      </div>
    </div>
    <div className='feturesbox'>
        <div className='eighty'>
    <div className='feturesbox'>
        <div className='coursefeature'>
            <div className='featurenumber'>24+</div>
            <div className='featuretext'>Hourse of Course</div>
        </div>
        <div className='coursefeature'>
            <div className='featurenumber'>18+</div>
            <div className='featuretext'>Total Assignment</div>
            </div>
        <div className='coursefeature'>
            <div className='featurenumber'>20+</div>
            <div className='featuretext'>Video Lessons</div>
            </div>
            </div>
            </div>
    </div>
    </>
  )
}

export default Coursesheader
