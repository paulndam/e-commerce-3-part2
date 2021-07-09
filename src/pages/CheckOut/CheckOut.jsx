import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../components/CheckoutItem/CheckOutItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/CartReducer/cartSelector";
import StripeButton from "../../components/StripeButton/StripeButton";
import "../../Sass/checkout.styles.scss";

const CheckOut = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>product</span>
      </div>
      <div className="header-block">
        <span>description</span>
      </div>
      <div className="header-block">
        <span>quantity</span>
      </div>
      <div className="header-block">
        <span>price</span>
      </div>
      <div className="header-block">
        <span>remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Total: $🤑 {total} </span>
    </div>
    <div className="test-warning">
      Use this Stripe Test Card For Payments. <br />
      4242 4242 4242 4242 - Exp: 04/24 - CVV:123
    </div>
    <StripeButton className="button" price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
