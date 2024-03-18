import React, {useState} from 'react'

const TextButton = () => {

    const [prevSize, setPrevSize] = useState(20)
   
    const setSize = () => {
        setPrevSize(prevSize => (prevSize === 20 ? 25 : 20 ))
    }
    
  return (
    <div>
        <button onClick={setSize}>Didinam</button>
    <p style={{fontSize: prevSize}}>sample text</p>
    </div>
  )
}

export default TextButton