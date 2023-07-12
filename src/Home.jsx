import React from 'react'
import * as Components from './components';
import background1 from './assets/Shape1.png'
import background2 from './assets/Shape2.png'
import background3 from './assets/Shape3.png'

function Home() {
  return (
    <>
      <Components.MainSection />
      <div className="cards">
        <Components.Cards heading='24x7 Support' background={background3}/>
        <Components.Cards heading='Custom Solution' background={background2} color='white'/>
        <Components.Cards heading='High Customer Engagement' background={background1}/>
      </div>
      <Components.Mind/>
      <Components.Solution/>
      <Components.Why />
      <Components.Targets/>
      <Components.Contact/>     
    </>
  )
}

export default Home
