import { Button, Input } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="box">
        <h2>Twitter</h2>
        <p>We need your informations in order to check you</p>
        <form>
          <Input
            type="email"
            labelPlaceholder="Write your email"
            name="email"
          />
          <Input
            type="password"
            labelPlaceholder="Write your password"
            name="password"
          />
           <Button type="submit" >
          Submit
        </Button>
        </form>
        <small>
          I don't have account please click <Link to="/register">here</Link>
          <br />
          Please enter a password with 6 or more characters
        </small>
      </div>
    </div>
  );
};

export default Login;
