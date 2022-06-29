import React from "react";
import "./Result.css";
function Result({ one, two, setOne, setTwo }) {
  const handleReset = (e) => {
    setOne(0);
    setTwo(0);
  };
  return (
    <div className="result">
      <div className="grid-result">
        <div className="result-child">
          <div className="text-result">
            <h4>Tip Amount</h4>
            <p>/ person</p>
          </div>
          <div className="price-result">
            <h3>${one == 0 ? "0.00" : one}</h3>
          </div>
        </div>
        <div className="result-child">
          <div className="text-result">
            <h4>Total</h4>
            <p>/ person</p>
          </div>
          <div className="price-result">
            <h3>${two == 0 ? "0.00" : two}</h3>
          </div>
        </div>
        <div className="buttonForReset">
          <button onClick={handleReset}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default Result;
