import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HyaVzJdjbbnF1GvNJ1n9c8pv8zS7vkZWJfFU3B4OBJmxfhMR0l1c7FE4WKUqBRV8iQcRaazmXBi2nYvCCgvRcdT00wgnp9qxE";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="JFB Gallery"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
