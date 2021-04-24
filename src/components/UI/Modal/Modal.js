import React from "react";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

import "./Modal.css";

export default function Modal(props) {
  return (
    <Aux>
      <Backdrop clicked={props.modalClosed} show={props.show} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
        className="Modal"
      >
        {props.children}
      </div>
    </Aux>
  );
}
