import React from 'react'
import './Team.css'

function CharacterCard(props) {
  return (
    <div className='Charactercard'>
      <div className='Character'></div>
      <div className='AboutCharacter'>
        <p className='Charname'>{props.name}</p>
        <p className='Chardesignation'>{props.designation}</p>
      </div>
    </div>
  )
}

export default CharacterCard
