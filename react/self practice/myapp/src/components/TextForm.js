import React ,{useState}from 'react'

export default function TextForm(props) {


const handleUpClick = () => {
  console.log("Uppercase was clicked");
  setText("You have clicked on handleUpClick");
}
const handleOnChange = () => {
  console.log("On change");
}
const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
