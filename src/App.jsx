import OperationChoice from "./components/OperationChoice";
import Result from "./components/Result";
import logo from "./images/logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const numbersOne = (num) => {
    setOne(num);
  };
  const numbersTwo = (num2) => {
    setTwo(num2);
  };
  return (
    <>
      <div className="background-color">
        <img src={logo} className="logo-app" alt="logo" />
        <div className="grid-calculator">
          <OperationChoice numbersOne={numbersOne} numbersTwo={numbersTwo} />
          <Result one={one} two={two} setOne={setOne} setTwo={setTwo} />
        </div>
      </div>
    </>
  );
}

export default App;
