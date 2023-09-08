import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Uppercase", "success")
  };

  const handleLoClick = () => {
    // console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lowercase", "success")
  };

  const handleCamelClick = () => {
    // console.log("Lowercase was clicked");
    let newText = text.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
    setText(newText);
    props.showAlert("Coverted to Camelcase", "success")
  }



  const handleClearClick = () => {
    // console.log("Lowercase was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("All Cleared!", "success")
  };

  const handleCopyClick = () => {
    // console.log("Copy was clicked");
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard", "success")
  };

  const handlePasteClick = async () => {
    // console.log("Copy was clicked");
    setText(await navigator.clipboard.readText());
    props.showAlert("Paste Successful", "success")
  };

  const handleDelSpaceClick = () => {
    // console.log("Copy was clicked");
    setText(text.split(/\s{2,}/g).join(" "));
    props.showAlert("Extra Spaces Cleared", "success")
  };

  const handleOnChange = (event) => {
    // console.log("handleOnChange was clicked");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container mb-2">
        <h1 style={{ color: `${props.mode === 'light' ? '#52555a' : '#fff'}` }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{ backgroundColor: `${props.mode === 'light' ? '#fff' : '#52555a'}`, color: `${props.mode === 'light' ? '#52555a' : '#fff'}` }}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} disabled={text.length === 0}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} disabled={text.length === 0}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCamelClick} disabled={text.length === 0}>
          Convert to Camel Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} disabled={text.length === 0}>
          Click to Copy
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlePasteClick} disabled={text.length === 0}>
          Click to Paste
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDelSpaceClick} disabled={text.length === 0}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2 style={{ color: props.mode === 'light' ? '#52555a' : '#fff' }}>Your text summary</h2>
        <p style={{ color: `${props.mode === 'light' ? '#52555a' : '#fff'}` }}><b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> words and <b>{text.length}</b> characters</p>
        <p style={{ color: `${props.mode === 'light' ? '#52555a' : '#fff'}` }}><b>{(text.split(/\s+/).filter((element) => { return element.length !== 0 }).length) * 0.008}</b> minutes read</p>
        <h2 style={{ color: `${props.mode === 'light' ? '#52555a' : '#fff'}` }}>Preview</h2>
        <p style={{ color: `${props.mode === 'light' ? '#52555a' : '#fff'}` }}>{text.length !== 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
