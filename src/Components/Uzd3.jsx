import React, {useState} from "react"

const NumberState = () => {

    const [sk, changeSk] = useState(0)

    const plius = () => {
        changeSk(sk => sk + 1)
    }
    const minus = () => {
        changeSk(sk => sk - 3)
    }
    const reset = () => {
        changeSk(0)
    }



  return (
    <div>
        <button onClick={plius}>Pliusinam</button> 
        <button onClick={minus}>Minusinam</button> 
        <button onClick={reset}>Resetinam</button> 
        <p>{sk}</p>
        </div>

  )
}

export default NumberState
