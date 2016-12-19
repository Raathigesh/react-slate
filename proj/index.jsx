import {Button} from "@blueprintjs/core";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import "@blueprintjs/core/dist/blueprint.css";

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <Button text="Word" disabled={false} />
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));