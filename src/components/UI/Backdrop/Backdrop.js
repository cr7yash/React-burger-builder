import React from "react";

import "./Backdrop.css";

export default function Backdrop(props) {
  return props.show ? (
    <div onClick={props.clicked} className="Backdrop" />
  ) : null;
}
