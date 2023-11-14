import Clicker from "./components/Clicker";
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>The clickers have assembled</h1>
      <Clicker buttonIndex={1} />
      <Clicker buttonIndex={2} />
      <Clicker buttonIndex={3} exclamation/>
    </div>
  );
}

export default App;
