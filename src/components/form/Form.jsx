import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../api/movies"; // Importing the login function

const Form = ({ isSignUp }) => {
  const navigate = useNavigate();
  const initialvalue = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initialvalue);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isSignUp) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.username === user.username &&
        storedUser.password === user.password
      ) {
        navigate("/home");
      } else {
        alert("Invalid Email and Password. Try Again.");
      }
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      alert("Signed up successfully!");
      navigate("/signin");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="sign-text">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <Input
              name="username"
              type="text"
              label="Email or Phone Number"
              value={user.username}
              onChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              label="Password"
              value={user.password}
              onChange={handleChange}
            />
            <div className="button-align">
              <Button
                content={"SUBMIT"} bg={"red"} color={"white"} height={"40px"} width={"310px"} br={"5px"} border={"none"} fs={"15px"} fw={"600"} 
                value={isSignUp ? "Sign Up" : "Sign In"}
              />
            </div>
          </div>
        </form>
        <div>
          <Link to="#" className="forgotpassword">
            Forgot Password?
          </Link>
        </div>
        <div className="checkbox">
          <div className="remember">
            <Input type="checkbox" className="check" />
            <p>Remember me</p>
          </div>
        </div>
        {isSignUp ? (
          <>
            <div className="new">
              <p>Already subscribed to Netflix?</p>
              <Link to="/signin">Signin</Link>
            </div>
          </>
        ) : (
          <>
            <div className="new">
              <p>New to Netflix?</p>
              <Link to="/signup">Sign up now</Link>
            </div>
            <div className="para">
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <span>Learn More.</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
