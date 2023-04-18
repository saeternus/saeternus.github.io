import React from 'react'
import './ContactInfo.css'

function ContactInfo() {
  return (
    <div className='DetailsBox'>
        <div className='DetailsCard'>
            <div className='Details'></div>
            <div className='content'>
                <p className='saeturnus'>Saeternus Innovations</p>
                <div className='flex'>
                <div className='fullwidth'>
                  <p className='textdet'>Adress : - IIT bhilai Sejbhar Campus</p>
                  <p className='textdet'>
                    Mobile : - 1010101010
                  </p>
                </div>
                <div className='fullwidth'>
                  <p className='textdet'>Email : - abcdefgh@gmail.com</p>
                  <p className='textdet'>Website : - www.saeternus.com</p>
                </div>
                </div>
            </div>
            <div className='detaillogo'>
                <div className='logodet'></div>
            </div>

        </div>
      <p className='copyright'>Copyright @ 2003 Lorem Ipsum</p>
    </div>
  )
}

export default ContactInfo
