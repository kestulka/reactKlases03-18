import React, {useState} from 'react'
import styles from "../Styles/square.module.css"
import {random} from "../Functions/randInt"

const Squares = () => {
  const [squareList, setSquares] = useState([])

  const makeSquare = () => {setSquares(prevSquare => [...prevSquare, prevSquare])}
  console.log(squareList)

  return (
    <div>
      <button onClick={makeSquare}>Sukurti kvadrateli</button>
      <div>
        {squareList.map((el, index) => (
          <div key={index} className={styles.square}>{el}</div>
        ))}
      </div>
    </div>
  );
};

export default Squares