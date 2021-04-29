import React from "react";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

import "./Modal.css";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.state.show;
  }

  componentDidUpdate() {
    console.log("[Modal] is updating");
  }
  render() {
    return (
      <Aux>
        <Backdrop clicked={this.props.modalClosed} show={this.props.show} />
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
          className="Modal"
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
