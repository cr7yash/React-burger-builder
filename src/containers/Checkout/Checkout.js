import React from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends React.Component {
  state = {
    ingredients: {
      bacon: 1,
      meat: 1,
      salad: 1,
      cheese: 1
    }
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  checkoutCancelleddHandler = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelleddHandler}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default Checkout;
