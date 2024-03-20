import React from "react";
 
const Bgen = ({ chNumber, addSquare, sqArr }) => {
  return (
    <div>
      <button onClick={chNumber}>+1</button>
      <button onClick={addSquare}>{sqArr.length}</button>
    </div>
  );
};

export default Bgen