import React, {useState} from "react"
import TextButton from './Components/TextButton';
import NumberState from "./Components/NumberState";
import Squares from "./Components/Squares";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";

const App = () => {
  const [number, setNumber] = useState(0);

  const numberUp = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const numberDown = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  return (
    <div className="App">
      <>
        < ComponentA number={number} /> 
        < ComponentB numberUp={numberUp} numberDown={numberDown}/> 
      </>
    </div>
  );
};


export default App;
