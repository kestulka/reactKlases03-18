import React, {useState} from "react"
import TextButton from './Components/TextButton';
import NumberState from "./Components/NumberState";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import Agen from "./Components/Agen";
import Bgen from "./Components/Bgen"
import Cgen from "./Components/Cgen"
import RenderCompA from "./Components/RenderCompA";
import RenderCompC from "./Components/RenderCompC";
import RenderCompB from "./Components/RenderCompB";
import Uzd1 from "./Components/Uzd1";
import Uzd2 from "./Components/Uzd2";
import Uzd3 from "./Components/Uzd3";
import Uzd4 from "./Components/Uzd4";
import Uzd5 from "./Components/Uzd5";


const App = () => {
  // const [number, changeNumber] = useState(0);
  // const [sqArr, setArr] = useState([]);
 
  // const addSquare = () => {
  //   setArr((prevSquare) => [...prevSquare, sqArr.length - 1 + 1]);
  // };
  // const chNumber = () => {
  //   changeNumber((number) => number + 1);
  // };

  const [letter, setLetterC] = useState("")
  const [letter2, setLetterA] = useState("")
  const [letter3, setLetterB] = useState("B")

  const handleClick = () => {
    // setLetterC("CCCCCCCC")
    // setLetterA("AAAAAAAA")
    // setLetterB("")
  };

  const shuffle = () => {
    setLetterA = (letter === "C" ? "A" : "C");
    setLetterC = (letter2 === "A" ? "C" : "A")
  }

  return (
    <div className="App">
      {/* <Cgen number={number} />
      <Bgen chNumber={chNumber} addSquare={addSquare} sqArr={sqArr} />
      <Agen sqArr={sqArr} number={number} /> */}
      {/* <RenderCompA letterA={letterA} handleClick={handleClick} /> */}
      {/* <RenderCompA letterC={letter} handleClick={handleClick} letterA={letter2} shuffle={shuffle} /> */}
      {/* <RenderCompB letterB={letter3} handleClick={handleClick} /> */}
      < Uzd1 />
      < Uzd2 />
      < Uzd3 />
      < Uzd4 />
      < Uzd5 />
    </div>
  );
}




export default App;
