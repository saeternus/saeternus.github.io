import React, { useEffect, useState } from 'react'
import './Contact.css'

function Contact() {
  const [mail,setmail] = useState('')
  const [text,settext] = useState('')
  useEffect(()=>{
    
  },[mail,text])
  return (
    <div className='box'> 
    <div className='contact'>
      <div className='Info'>
        <p className='contheading'>
          Contact Us
        </p>
        <p className='conttext'>
        Lörem ipsum intrajira elektrolog och monovis inte bör.
            Sen mytofas agnostitism autod, odenade bining.
        </p>
        <div className='inputs'>
          <input type="text" placeholder='your email' onChange={e=>setmail(e.target.value)}/>
          <input type="text" placeholder='your text' onChange={e=>settext(e.target.value)}/>
      </div>

      <div className='submit'><p>Send</p></div>
      </div>
      <div className='graphics'></div>
    </div>
    </div>
  )
}

export default Contact
