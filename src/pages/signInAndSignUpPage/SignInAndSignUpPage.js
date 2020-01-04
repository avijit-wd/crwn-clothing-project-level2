import React from "react";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";

import "./SignInAndSignUpPage.styles.scss";
const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
