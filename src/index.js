import React from "react";
import ReactDOM from "react-dom";

const fName = "Sukrit";
const lName = "Xuto";
const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Learn JSX Expressions</h1>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
    <br />
    <p>Created by {fName + " " + lName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
