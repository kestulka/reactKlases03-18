import React, {useState} from 'react'

const ChangeTextSize = () => {

    const [txt, setTxt] = useState([])

    // setTxt((prev) => [...prev, 0]) // prideda naujas reiksmes prie jau esanciu
    // setTxt((prev) => ({...prev, name: e.target.value}))

  return (
    <div>ChangeTextSize</div>
  )
}

export default ChangeTextSize