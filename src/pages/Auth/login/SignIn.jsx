import React from "react";
import Navbar from "../../../components/navbar/Navbar";
// import Footer from "../../../components/footer/Footer";

import "./signin.css";
import Form from "../../../components/form/Form";

const SignIn = () => {
  return (
    <div className="auth-page">
      <Navbar invi={"none"} />
      <Form isSignin />
      {/* <div className="footsignin">
        <Footer />
      </div> */}
    </div>
  );
};

export default SignIn;
