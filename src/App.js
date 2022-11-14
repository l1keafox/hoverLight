import { useEffect,useState, CSSProperties } from 'react';
import './App.css';

function App() {
  const [mousePos, setMousePos] = useState({});
  let style1;
  function updateMouse(e){
    const {currentTarget: target} = e;
    console.log('enter');
    console.log(target,mousePos);
    console.log(e.nativeEvent);
    setMousePos({
      ...mousePos,
      "x":e.nativeEvent.screenX,
      "y":e.nativeEvent.screenY,
    });
    target.style.setProperty("--mouse-y",e.nativeEvent.screenY);
    target.style.setProperty("--mouse-x",e.nativeEvent.screenX);
    console.log("AFDESF",target);
  }
  

  return (
    <div id="cards">
        <div className = 'card' onMouseMove={updateMouse} style = {style1}></div>
        <div className = 'card' onMouseMove={updateMouse} ></div>
        <div className = 'card' onMouseMove={updateMouse}></div>
        <div className = 'card' onMouseMove={updateMouse}></div>
        <div className = 'card' onMouseMove={updateMouse}></div>
        <div className = 'card' onMouseMove={updateMouse}></div>


    </div>
  );
}

export default App;
