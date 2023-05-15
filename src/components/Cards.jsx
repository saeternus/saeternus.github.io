import React from 'react'
import './Cards.css'

function Cards(props) {
  return (
    <div className='card' style={{background: `url(${props.background})`, backgroundSize: 'contain', backgroundPosition:"Center", backgroundRepeat:'no-repeat'}}>
        <div className='text' style={{color:`${props.color}`}}>
            <p className='heading' >{props.heading}</p>
            <p className='content'>{props.text}</p>
        </div>
      
    </div>
  )
}

export default Cards
