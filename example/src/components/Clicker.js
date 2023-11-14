import '../App.css'

export default function Clicker() {
    const text = "Click me"
    return (
      <>
        <button className="btn" style={{color: 'blue'}}>{text}</button>
      </>
    );
  }