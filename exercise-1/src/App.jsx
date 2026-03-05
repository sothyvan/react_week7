import React, { useState } from "react";

function App() {
  /* You will need to use a boolean state to manage the weather */
  const [raining, notRaining] = useState(false);

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    notRaining(false);
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    notRaining(true);
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    if (raining){
      return (
        <>
          <h1>RAIN TIME!</h1>
        </>
      )
    } else{
      return (
        <>
          <h1>SUN TIME!</h1>
        </>
      )
    }
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    if (raining){
      return "rainy";
    }else{
      return "sunny";
    }
  }

  return (
    <main className={getBackgroundColor()}>
      {getTitle()}
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
