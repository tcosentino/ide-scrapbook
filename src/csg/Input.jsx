import React from "react";

export default ({ name, display, placeholder }) => {
  return [
    <label htmlFor={name} style={{ display: "block", marginBottom: "0" }}>
      {display}
    </label>,
    <input id={name} placeholder={placeholder} type="text" />
  ];
};
