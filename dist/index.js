// exports.printMsg = function() {
//   console.log("This is a message from the demo package");
// };

// // export function for file
// //export the name function

// exports.letsAdd = function(a, b) {
//   return a + b;
// };

import React from "react";
import "./coolUI.css";

class CoolUI extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "pop" },
      " hi "
    );
  }
}

export default CoolUI;