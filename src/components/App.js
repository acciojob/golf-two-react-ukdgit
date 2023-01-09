import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
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
    // initiate the event handler
    window.addEventListener("keydown", (e) => {
      if (e.key === 'ArrowRight') {
        setBallPosition({ left: x + 5 + "px", top: y + "px" });
        setX(x + 5)
      }
      if (e.key === 'ArrowUp') {
        setBallPosition({ left: x + "px", top: y - 5 + "px" });
        setY(y - 5)
      }
      if (e.key === 'ArrowLeft') {
        setBallPosition({ left: x - 5 + "px", top: y + "px" });
        setX(x - 5)
      }
      if (e.key === 'ArrowDown') {
        setBallPosition({ left: x + "px", top: y + 5 + "px" });
        setY(y + 5)
      }
    },  false);

    
  });

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
