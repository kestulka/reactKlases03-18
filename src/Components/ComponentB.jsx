import React from 'react'

const ComponentB = ({numberUp, numberDown}) => {
  return (
    <div>
        <button onClick={numberUp}>Plius</button>
        <button onClick={numberDown}>Minus</button>
    </div>
  )
}

export default ComponentB