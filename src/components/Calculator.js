import React, { useState, useRef } from "react";

function Calculator() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  //addition
  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };
  //substraction
  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  //multiplication
  const multiply = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };
  //division
  const division = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
  //reset input
  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };
  //reset result
  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  };
  return (
    <div>
      <div>
        <h1>Working with calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
      </form>
      <button onClick={plus}>Add</button>
      <button onClick={minus}>substraction</button>
      <button onClick={division}>division</button>
      <button onClick={multiply}>multiplication</button>
      <button onClick={resetInput}>Reset Input</button>
      <button onClick={resetResult}>Reset Result</button>
    </div>
  );
}

export default Calculator;
