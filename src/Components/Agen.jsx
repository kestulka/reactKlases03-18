import React from "react";
import styles from "../Styles/square.module.css";
 
const Agen = ({ sqArr, number }) => {
  return (
    <div>
      {sqArr.map((_, index) => (
        <div key={index} className={styles.square}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default Agen