import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import logo from './img/BeeSpotLogo.svg';


const STRIPE_KEY = "pk_test_2ebgBxWoxXDOGr0M5uOuyCVe";


class PaymentForm extends React.Component {
  onToken = (token) => {
    console.log("Got token: ", token);
  };

  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey={STRIPE_KEY}
        name="BeeSpot"
        description="Locations data payment"
        image={logo}
        amount={7500}
        currency="EUR"
      />
    )
  }
}


export default PaymentForm;
