import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mousePos, setMousePos] = useState({});
  function updateMouse(e) {
    const { currentTarget: target } = e;
    setMousePos({
      ...mousePos,
      x: e.nativeEvent.screenX,
      y: e.nativeEvent.screenY,
    });
    target.style.setProperty("--mouse-y", e.nativeEvent.offsetY + "px");
    target.style.setProperty("--mouse-x", e.nativeEvent.offsetX + "px");
  }

  // function updateAllMouse(e){
  //   for(const card of document.getElementsByClassName("card")) {
  //       console.log('all');
  //       card.style.setProperty("--mouse-y", e.nativeEvent.offsetY + "px");
  //       target.style.setProperty("--mouse-x", e.nativeEvent.offsetX + "px");
  //       }
  // }

  return (
    <div id="cards" >
      <div className="card" onMouseMove={updateMouse}>
        <div className="card-border"> </div>
        <div className="card-content"> </div>
      </div>
      <div className="card" onMouseMove={updateMouse}>
      <div className="card-border"> </div>        
        <div className="card-content"> </div>
      </div>
      <div className="card" onMouseMove={updateMouse}>
      <div className="card-border"> </div>
        <div className="card-content"> </div>
      </div>
      <div className="card" onMouseMove={updateMouse}>
      <div className="card-border"> </div>
        <div className="card-content"> </div>
      </div>
      <div className="card" onMouseMove={updateMouse}>
      <div className="card-border"> </div>
        <div className="card-content"> </div>
      </div>
      <div className="card" onMouseMove={updateMouse}>
      <div className="card-border"> </div>
        <div className="card-content"> </div>
      </div>
    </div>
  );
}

export default App;
