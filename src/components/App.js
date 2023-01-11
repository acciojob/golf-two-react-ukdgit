import React, { Component, useState } from "react";
import "../styles/App.css";
import { useEffect } from 'react';

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({ left: "0px", top: '0px' })
  };

  const renderChoice = () => {
    if (renderBall === false) {
      return <button onClick={() => setRenderBall(true)} className="start" >Start</button>
    }
    else if (renderBall === true) {
      return <div className="ball" style={ballPosition}></div>
    }
  };
  useEffect(() => {

    const fun = (e) => {
      console.log("x",x,"y",y)
      if (e.keyCode === 39) {
        setBallPosition({ left: (x + 5) + "px", top: y + "px" });
        setX(x + 5)
      }
      if (e.keyCode === 38) {
        setBallPosition({ left: x + "px", top: (y - 5) + "px" });
        setY(y - 5)
      }
      if (e.keyCode === 37) {
        setBallPosition({ left: (x - 5) + "px", top: y + "px" });
        setX(x - 5)
      }
      if (e.keyCode === 40) {
        setBallPosition({ left: x + "px", top: (y + 5) + "px" });
        setY(y + 5)
      }
    }
    // initiate the event handler
    window.addEventListener("keydown",fun,false);

    return (()=>{
      window.removeEventListener("keydown",fun)
    })
  },[x,y]);

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );


}
export default App;
