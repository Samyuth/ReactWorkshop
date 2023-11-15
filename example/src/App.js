import Clicker from "./components/Clicker";
import './App.css'

function App() {

  const onClick = () => console.log("hi")

  const clickerData = [{ "bIndex": 1 }, {"bIndex:": 2}, {"exclamation": true}]
  const clicked = false

  return (
    <div className="App">
      <h1>The clickers have assembled</h1>
      {clicked &&
        <p>A button has been clicked</p>
      }
      {clickerData.map((e, i) => 
        <Clicker 
          buttonIndex={i+1}
          exclamation={e.exclamation}
          onClick={onClick}
        />)
      }
    </div>
  );
}

export default App;
