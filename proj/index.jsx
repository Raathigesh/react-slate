import {Button, Alert} from "@blueprintjs/core";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SampleComp from './SampleComp.jsx';
import "@blueprintjs/core/dist/blueprint.css";

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <Button text="Hello Worl 12d" disabled={false} />
        <Alert confirmButtonText="OK Man" isOpen={false} />
        <SampleComp /> 
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));