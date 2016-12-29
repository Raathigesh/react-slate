import {Button, Alert, Collapse, Tabs, TabList, Tab, TabPanel, ProgressBar} from "@blueprintjs/core";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SampleComp from "./SampleComp.jsx";
import "@blueprintjs/core/dist/blueprint.css";

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <Button text="Hello Worl 12d" disabled={false} />
        <Alert confirmButtonText="OK Man" isOpen={false} />
        <SampleComp />
        <Collapse isOpen={true}>hello</Collapse>
        <Tabs>
          <TabList>
            <Tab>First tab</Tab>
            <Tab>Second tab</Tab>
            <Tab isDisabled={false}>Third tab</Tab>
            <Tab isDisabled={true}>Fourth tab</Tab>
          </TabList>
          <TabPanel>First panel</TabPanel>
          <TabPanel>Second panel</TabPanel>
          <TabPanel>Third panel</TabPanel>
          <TabPanel>Fourth panel</TabPanel>
        </Tabs>
        <ProgressBar intent="3" value={0.7557} />
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));