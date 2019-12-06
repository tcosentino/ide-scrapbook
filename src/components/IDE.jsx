import React, { Component } from "react";
import FlexBox from "../csg/FlexBox";
import TabView from "../csg/TabView";
import TabViewTab from "../csg/TabViewTab";

class IDE extends Component {
  render() {
    return (
      <FlexBox rows className="contuit-ide">
        <div className="contuit-ide-titlebar">
          <h1>{this.props.title}</h1>
        </div>
        <FlexBox fill>
          {/* Sidebar */}
          <TabView horizontal className="contuit-ide-sidebar">
            <TabViewTab title="Processes">List of processes</TabViewTab>
            <TabViewTab title="Vault Structures">List of structures</TabViewTab>
          </TabView>
          {/* Main Editor */}
          <TabView className="contuit-ide-main" fill>
            <TabViewTab title="Open Process 1">First Process</TabViewTab>
            <TabViewTab title="Open Process 2">Second Process</TabViewTab>
          </TabView>
        </FlexBox>
      </FlexBox>
    );
  }
}

export default IDE;
