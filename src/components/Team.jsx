import React from 'react'
import './Team.css'
import CharacterCard from './CharacterCard'

function Team() {
  return (
    <div className='TeamBox'>
        <p className='Heros'>Our Heros</p>
        <div className='CharContainer'>
            <CharacterCard name='Arnav Prakash' designation='Sr. Developer'/>
            <CharacterCard name='Aditya Singh' designation='Developer' />
            <CharacterCard name='Arnav Prakash' designation='Sr. Developer'/>
            <CharacterCard name='Aditya Singh' designation='Developer' />
        </div>
    </div>
  )
}

export default Team
