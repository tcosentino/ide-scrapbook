import React, { useState } from "react";

export default ({
  children,
  rows = false,
  fill = false,
  resizable = false,
  // only when resizable?
  defaultWidth = 200,
  minWidth = 200,
  ...props
}) => {
  const [lastDrag, setLastDrag] = useState(0);
  const [width, setWidth] = useState(defaultWidth);
  const style = {
    display: "flex",
    flexDirection: rows ? "column" : "row"
  };

  if (resizable) {
    style.width = `${width}px`;
  } else if (fill) {
    style.flex = 1;
  }

  return (
    <div style={style} {...props}>
      {children}
      {resizable && (
        <button
          className="csg-resize-border"
          draggable
          onDrag={e => {
            const moveRight = lastDrag === 0 ? 0 : e.screenX - lastDrag;
            setLastDrag(e.screenX);

            // this is when we let go
            if (e.screenX === 0) {
              return;
            }

            setWidth(Math.max(minWidth, width + moveRight));
          }}
        />
      )}
    </div>
  );
};
