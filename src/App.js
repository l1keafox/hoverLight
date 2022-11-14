import './App.css';

function App() {
  function updateMouse(e){
    const {currentTarget: target} = e;
    console.log(target);
    console.log(e.nativeEvent);
    console.log('enter');
    target.style.setProperty("--mouse-x",e.nativeEvent.screenX);
    target.style.setProperty("--mouse-y",e.nativeEvent.screenY);
  }
  return (
    <div id="cards">
        <div className = 'card' onMouseEnter={ updateMouse } ></div>
        <div className = 'card'></div>
        <div className = 'card'></div>
        <div className = 'card'></div>
        <div className = 'card'></div>
        <div className = 'card'></div>


    </div>
  );
}

export default App;
