import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../Firebase/fireBaseUtils";
import "../../Sass/header.styles.scss";
import { ReactComponent as Logo } from "../../assets/zendonki-1-logo.svg";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { selectCartHidden } from "../../Redux/CartReducer/cartSelector";
import { selectCurrentUser } from "../../Redux/UserReducer/userSelector";
import { signOutStart } from "../../Redux/UserReducer/userAction";
import {
  HeaderConatiner,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./HeaderStyles";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderConatiner>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            Log-Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign-In</OptionLink>
        )}

        {currentUser ? (
          <OptionLink as="div" to="/shop">
            {currentUser.displayName}
          </OptionLink>
        ) : null}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderConatiner>
  );
};
// connect allow us to get access of our currentuser in the reducer.
//it is a high order function.

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
