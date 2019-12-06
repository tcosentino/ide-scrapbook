import classNames from "classnames";
import isArray from "lodash/isArray";
import React, { useState } from "react";
import FlexBox from "./FlexBox";
import FlexBoxFill from "./FlexBoxFill";
import TabViewTab from "./TabViewTab";

const TabView = ({ children, horizontal = false, ...props }) => {
  const [activeTab, setActiveTab] = useState(0);
  console.log({ children });
  const titles = [];
  const content = [];
  const childList = isArray(children) ? children : [children];

  childList
    .filter(c => c.type === TabViewTab)
    .forEach((child, index) => {
      titles.push(
        <div
          className={classNames("csg-tab", { active: activeTab === index })}
          key={child.props.title}
          style={{ float: "left" }}
          onClick={() => setActiveTab(index)}
        >
          {child.props.title}
        </div>
      );

      content.push(child.props.children);
    });

  return (
    <FlexBox rows={!horizontal} {...props}>
      {/* Tabs */}
      <FlexBox
        rows={horizontal}
        className={classNames("csg-tab-menu", {
          "csg-tab-menu-horizontal": horizontal
        })}
      >
        {titles}
      </FlexBox>

      {/* Content */}
      <FlexBoxFill className="csg-tab-content">
        {content[activeTab]}
      </FlexBoxFill>
    </FlexBox>
  );
};

export default TabView;
