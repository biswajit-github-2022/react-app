import React, { useState } from 'react'

export default function TetxForm(props) {

  const handleOnChange = (event) => {
    setText(event.target.value); //new text is set in "text" using settext as it is a state variable
  }
  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "success")
  }
  const handledownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success")
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared", "success")
  }

  const [text, setText] = useState('Enter text here!');//state variable
  return (
    <>
      <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === "light" ? "white" : "#343a30", color: props.mode === "light" ? "black" : "white" }}></textarea>
          <button className='btn btn-primary my-3' onClick={handleupClick}>Convert to UPPERCASE</button>
          <button className='btn btn-primary mx-3' onClick={handledownClick}>Convert to Lowercase</button>
          <button className='btn btn-primary mx-3' onClick={handleClearClick}>Convert to Clear text</button>
        </div>
        <div className="container">
          <h1>Your text summery</h1>
          <p>{text.split(" ").length}words and {text.length}characters</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter Somethhing To Preview Here"}</p>
        </div>
      </div>
    </>
  )
}