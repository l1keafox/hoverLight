import { useEffect,useState } from 'react';
import './App.css';

function App() {
  const [mousePos, setMousePos] = useState({});
  function updateMouse(e){
    const {currentTarget: target} = e;
    setMousePos({
      ...mousePos,
      "x":e.nativeEvent.screenX,
      "y":e.nativeEvent.screenY,
    });
    target.style.setProperty("--mouse-y",e.nativeEvent.offsetY+"px");
    target.style.setProperty("--mouse-x",e.nativeEvent.offsetX+"px");
  }
  

  return (
    <div id="cards">
        <div className = 'card' onMouseMove={updateMouse}></div>
        <div className = 'card' onMouseMove={updateMouse} ></div>
        <div className = 'card' onMouseMove={updateMouse}></div>
        <div className = 'card' onMouseMove={updateMouse}></div>
        <div className = 'card' onMouseMove={updateMouse}></div>
        <div className = 'card' onMouseMove={updateMouse}></div>


    </div>
  );
}

export default App;
