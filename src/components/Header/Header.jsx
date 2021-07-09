import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> a7eb74b (added styled components)
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../Firebase/fireBaseUtils";
import "../../Sass/header.styles.scss";
import { ReactComponent as Logo } from "../../assets/zendonki-1-logo.svg";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { selectCartHidden } from "../../Redux/CartReducer/cartSelector";
import { selectCurrentUser } from "../../Redux/UserReducer/userSelector";
<<<<<<< HEAD

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Log-Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign-In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
=======
import {
  HeaderConatiner,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./HeaderStyles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderConatiner>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            Log-Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign-In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderConatiner>
>>>>>>> a7eb74b (added styled components)
  );
};
// connect allow us to get access of our currentuser in the reducer.
//it is a high order function.

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
