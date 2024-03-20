import React from 'react'
import RenderCompC from './RenderCompC'


const RenderCompA = ({handleClick, letterC, letterA, shuffle}) => {
  return (
    <div>
        <button onClick={handleClick}>Show CCCCCC</button>
        <button onClick={shuffle}>Shuffle</button>
        <RenderCompC letter={letterC} />
        <p> {letterA} </p>
    </div>
  )
}

export default RenderCompA