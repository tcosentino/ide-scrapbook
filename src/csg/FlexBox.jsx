import React from "react";

export default ({ children, rows = false, fill = false, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: rows ? "column" : "row",
        flex: fill ? 1 : 0
      }}
      {...props}
    >
      {children}
    </div>
  );
};
