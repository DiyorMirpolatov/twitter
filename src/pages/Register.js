import { Button, Input } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";
import axios from "axios";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("data:", data);
    if (data.password.length < 6) {
      alert("You should write at least 6 character to password");
    }
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
     axios
       .post("/api/users", {
         body: body,
       })
       .then((res) => {
         console.log(res.data);
       });
    // fetch("https://twitter-albison.herokuapp.com/api/users", {
    //   method: "POST",
    //   body: body,
    // })
    //   .then((res) => res.data)
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  return (
    <div className="register">
      <div className="box">
        <h2>Twitter</h2>
        <p>We need your informations in order to check you</p>
        <form onSubmit={handleSubmit}>
          <Input type="text" labelPlaceholder="Write your name" name="name" />
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
          <Button type="submit">Submit</Button>
        </form>
        <small>
          I have an account! <Link to="/login">login</Link> <br />
          Please enter a password with 6 or more characters
        </small>
      </div>
    </div>
  );
};

export default Register;
