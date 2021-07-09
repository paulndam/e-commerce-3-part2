import React, { Component } from "react";
import FormInput from "../FormInput/FormInput.jsx";
import CustomButton from "../CustomButton/CustomButton.jsx";
import { auth, signInWithGoogle } from "../../Firebase/fireBaseUtils";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already got an account 🤠 😎</h2>
        <span>sign-in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          />

          <div className="buttons">
            <CustomButton type="submit" value="submit ">
              Sign-In
            </CustomButton>

            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSigIn
              value="submit "
            >
              Sign-In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
