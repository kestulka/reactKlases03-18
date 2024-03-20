import React, {useState} from 'react'
import styles1 from "../Styles/circle.module.css"
import styles2 from "../Styles/square.module.css"

const Circle = () => <div className={styles1.circle}></div>;
const Square = () => <div className={styles2.square}></div>;

const Uzd1 = () => {
    const [isCircle, setIsCircle] = useState(true);

    const toggleShape = () => {
        setIsCircle(prevState => !prevState);
    };

    return (
        <div>
            <button onClick={toggleShape}>Change</button>
            {isCircle ? <Circle /> : <Square />}
        </div>
    );
};

export default Uzd1;