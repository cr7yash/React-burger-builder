import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    render() {
      return (
        <Aux>
          <Modal show>Something is wrong </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
