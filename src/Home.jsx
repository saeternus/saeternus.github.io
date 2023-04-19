import React from 'react'
import * as Components from './components';

function Home() {
  return (
    <>
      <Components.MainSection />
      <div className="cards">
        <Components.Cards heading='24x7 Support' text='hello world'/>
        <Components.Cards heading='Daily Reports' text='hello world'/>
        <Components.Cards heading='Daily Reports' text='hello world'/>
        <Components.Cards heading='24x7 Support' text='hello world'/>
      </div>
      <Components.Targets/>
      <Components.Why />
      <Components.Contact/>     
    </>
  )
}

export default Home
