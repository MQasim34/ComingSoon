import React, { useState } from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

const Overlay = ({ closeOverlayPorp }) => {
  const [cursorX, setCursorX] = useState(-200);
  const [cursorY, setCursorY] = useState(-200);

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <div onClick={closeOverlayPorp} className="over_lay">
      <div
        className="overlayCursur"
        style={{
          top: cursorY + "px",
          left: cursorX + "px",
        }}
      >
        <CloseTwoToneIcon />
      </div>
    </div>
  );
};

export default Overlay;
