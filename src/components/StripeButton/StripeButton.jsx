import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  // stripe will need price to be in cents in order for proper payments.
  const priceForStripe = price * 100;
  const publicKey =
    "pk_test_51IRFj6IznkxfOVO4ned0nxvpxf76v0popRSmthppnIcTlnAT3AN6RR5EVuzhGNlZDjWrsZOpnlLpHw3JXHbXsB2I00FZTgSosk";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Zen-Shop"
      billingAddress
      shippingAddress
      image="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      description={`Your Total is  $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now Please"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeButton;
