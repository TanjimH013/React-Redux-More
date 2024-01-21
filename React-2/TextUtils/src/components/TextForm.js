import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked! : " + text);

    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    let newText = " ";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("onChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="py-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-lg-1" onClick={handleUpClick}>
          Convert upper
        </button>

        <button className="btn btn-success mx-1" onClick={handleLowClick}>
          Convert lower
        </button>
        <button className="btn btn-danger" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split("").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it"}</p>
      </div>
    </>
  );
}
