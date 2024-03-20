import React, {useState} from 'react'
import styles from "../Styles/square.module.css"
import { random } from "../Functions/randInt"

const Squares = () => {

  const [addSquare, setAddSquare] = useState([])

  return (
    <div>
        <button onClick={() => setAddSquare((prev) => [...prev, "red"])}>add red</button>
        <button onClick={() => setAddSquare((prev) => [...prev, "blue"])}>add red</button>
        <button onClick={() => setAddSquare([])}>reset</button>
        {console.log(addSquare)}

        <div>
            {addSquare.map((square, index) => (
        <div key={index} className={styles.square} style={{backgroundColor: square}}>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Squares