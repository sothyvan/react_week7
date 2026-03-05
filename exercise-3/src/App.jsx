import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA(event){
    setA(event.target.value);
  }

  function onB(event){
    setB(event.target.value);
  }

  function compute(){
    //Check if the inputs are empty or not number
    if (!a.trim() || !b.trim() || Number.isNaN(Number(a)) || Number.isNaN(Number(b))){
      setResult("A and B shall be numbers!");
      setIsError(true);
      return;
    }

    const sum = Number(a) + Number(b);
    setResult(sum);
    setIsError(false);
  }

  function getTextColor() {
    return isError ? "error" : "";
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} className={getTextColor()}/>
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;
