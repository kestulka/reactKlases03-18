import React, {useState} from 'react'
import NumberStateVaikas from './NumberStateVaikas'

const NumberState = () => {

    const [sk, changeSk] = useState(123)

    const plius = () => {
        changeSk(sk => sk + 1)
    }
    const minus = () => {
        changeSk(sk => sk - 1)
    }
    const reset = () => {
        changeSk(123)
    }



  return (
    <div>
        <button onClick={plius}>Pliusinam</button> 
        <button onClick={minus}>Minusinam</button> 
        <button onClick={reset}>Resetinam</button> 
        < NumberStateVaikas sk={sk} />
        </div>

  )
}

export default NumberState