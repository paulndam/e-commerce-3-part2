import React from "react";
import SignIn from "../../components/SignIn/SignIn.jsx";
import SignUp from "../../components/SignUp/SignUp.jsx";

import "../../Sass/sign-in-and-sign-up.scss";
import "../../Sass/sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
