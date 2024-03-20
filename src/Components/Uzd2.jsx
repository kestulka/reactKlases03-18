import React, {useState} from 'react'
import styles1 from "../Styles/circle.module.css"
import styles2 from "../Styles/square.module.css"
import { random } from "../Functions/randInt"

const Circle = ({ number }) => <div className={styles1.circle}>{number}</div>;
const Square = ({ number }) => <div className={styles2.square}>{number}</div>;
const Uzd2 = () => {
    const [isCircle, setIsCircle] = useState(true);

    const [number, setNumber] = useState(random(5, 25))

    const toggleShape = () => {
        setIsCircle(prevState => !prevState);
    };

    const changeNum = () => {
        setNumber(random(5, 25))
    }

    return (
        <div>
            <button onClick={toggleShape}>Change</button>
            <button onClick={changeNum}>Random</button>
            {isCircle ? <Circle number={number} /> : <Square number={number} />}
        </div>
    );
};

export default Uzd2;