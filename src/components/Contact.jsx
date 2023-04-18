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
        If you have any questions, comments, or inquiries, please don't hesitate to contact us.
        {/* We're available Monday to Friday, 9am - 6pm IST to answer any questions you may have. You can also fill out the contact form on our website, and one of our team members will get back to you as soon as possible.

We look forward to hearing from you and helping you achieve your business goals. */}
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
