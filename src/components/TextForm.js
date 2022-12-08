// import React from "react";
import React, { useState } from "react";

export default function TextForm(props) {
  

  const handleupClick = () => {
    setText(text.toUpperCase());
    props.showAlert("coverted to upper case");
  };
  const handledownClick = () => {
    setText(text.toLowerCase());
    props.showAlert("coverted to lower case");
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("text copied");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed");
  };
  const handleclear = () => {
    setText("");
    props.showAlert("field cleared");
  };

  const [text, setText] = useState("");

  return (
    <div>
      <div className="mb-3 my-4">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h3>{props.heading}</h3>
        </label>
        <textarea
          className="form-control givenText"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          placeholder="Enter your text here........"
          onChange={handleonchange}
        ></textarea>
      </div>
      <div>
        <button disabled={text.length===0} className="btn btn-primary m-2 " onClick={handleupClick}>
          Covert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handledownClick}>
          Covert to LowerCase
        </button>

        <button  disabled={text.length===0}  className="btn btn-primary m-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div>
        <button  disabled={text.length===0} className="btn btn-primary m-2" onClick={handlecopy}>
          Copy to clickboard
        </button>
        <button  disabled={text.length===0} className="btn btn-primary m-2" onClick={handleclear}>
          Clear
        </button>
      </div>

      <div className="container my-3">
        <h3>Your Word Summary </h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read (approximation).
        </p>
      </div>
    </div>
  );
}
