import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../FormInput/FormInput.jsx";
import CustomButton from "../CustomButton/CustomButton.jsx";
//import { auth, signInWithGoogle } from "../../Firebase/fireBaseUtils";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../Redux/UserReducer/userAction";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already got an account 🤠 😎</h2>
      <span>sign-in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          required
          handleChange={handleChange}
          label="Password"
        />

        <div className="buttons">
          <CustomButton type="submit" value="submit ">
            Sign-In
          </CustomButton>

          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSigIn
            value="submit "
          >
            Sign-In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
