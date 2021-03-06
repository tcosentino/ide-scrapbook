import classNames from "classnames";
import isArray from "lodash/isArray";
import React, { useState } from "react";
import FlexBox from "./FlexBox";
import FlexBoxFill from "./FlexBoxFill";
import TabViewTab from "./TabViewTab";

const TabView = ({
  children,
  horizontal = false,
  collapsible = false,
  closeable = false,
  onCloseClicked = () => {},
  ...props
}) => {
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
          onClick={() => {
            let toSet = index;
            if (collapsible && index === activeTab) {
              toSet = -1;
            }

            return setActiveTab(toSet);
          }}
        >
          {child.props.title}
          {closeable && (
            <button onClick={() => onCloseClicked(index)}>
              <i className="fa fa-close" />
            </button>
          )}
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
      {content[activeTab] && (
        <FlexBoxFill className="csg-tab-content">
          {content[activeTab]}
        </FlexBoxFill>
      )}
    </FlexBox>
  );
};

export default TabView;
