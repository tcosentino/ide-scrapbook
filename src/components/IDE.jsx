import React, { useState } from "react";
import FlexBox from "../csg/FlexBox";
import TabView from "../csg/TabView";
import TabViewTab from "../csg/TabViewTab";

const IDE = ({ title }) => {
  const [openTabs, setOpenTabs] = useState([
    { title: "Open Process 1", content: "fasdf" },
    { title: "Second Open Process", content: "fdsfas" },
    { title: "third Open Process", content: "5468413" }
  ]);

  return (
    <FlexBox rows className="contuit-ide">
      <div className="contuit-ide-titlebar">
        <h1>{title}</h1>
      </div>
      <FlexBox fill>
        {/* Sidebar */}
        <TabView horizontal collapsible className="contuit-ide-sidebar">
          <TabViewTab title="Processes">List of processes</TabViewTab>
          <TabViewTab title="Vault Structures">List of structures</TabViewTab>
        </TabView>
        {/* Main Editor */}
        <TabView
          closeable
          onCloseClicked={closedIndex => {
            setOpenTabs([
              ...openTabs.slice(0, closedIndex),
              ...openTabs.slice(closedIndex + 1)
            ]);
          }}
          className="contuit-ide-main"
          fill
        >
          {openTabs.map(openTab => (
            <TabViewTab title={openTab.title}>{openTab.content}</TabViewTab>
          ))}
        </TabView>
      </FlexBox>
    </FlexBox>
  );
};

export default IDE;
