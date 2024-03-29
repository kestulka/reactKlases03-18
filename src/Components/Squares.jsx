import React, {useState} from 'react'
import styles from "../Styles/square.module.css"
import random from "../Functions/randInt"

// square gen
const Squares = () => {
  const [squareList, setSquares] = useState([])
  const [counter, setCounter] = useState(0)

  const makeSquare = () => {setSquares(prevSquare => [...prevSquare, squareList.length + 1])}
  console.log(squareList)

  const handleCounter = () => {
    setCounter(prev => prev + 1)
  }

  return (
    <div>
      <button onClick={makeSquare}>Sukurti kvadrateli</button>
      <button onClick={handleCounter}>Count</button>
      <div>
        {squareList.map((el, index) => (
          <div key={index} className={styles.square}>{el}</div>
        ))}
      </div>
    </div>
  );
};


export default Squares