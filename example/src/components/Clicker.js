import '../App.css'

export default function Clicker({defaultText="Click me", buttonIndex, ...props}) {
    const text = defaultText
    return (
      <>
        <button onClick={props.onClick} className="btn" style={{color: 'blue'}}>
          {text + 
            (props.exclamation ? "!" : "")
            + " " + buttonIndex}
        </button>
      </>
    );
  }