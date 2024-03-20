import React from 'react'

const RenderCompB = ({letterB, handleClick}) => {
  return (
    <div>
        <button onClick={handleClick}>panaikinam</button>
        <p>{letterB}</p>
    </div>
  )
}

export default RenderCompB