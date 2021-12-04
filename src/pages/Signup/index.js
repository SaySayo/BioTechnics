import React from "react";
import "./style.css";

export const Signup = () => {
  return (
      <div className="loginBox">
        <img
          className="user"
          src="https://i.ibb.co/yVGxFPR/2.png"
          height="100px"
          width="100px"
        />
        <h3>BioTechnics</h3>
        <form action="#" method="post">
          <div className="inputBox">
            <input
              id="uname"
              type="text"
              name="Username"
              placeholder="Username"
            />
            <input
              id="pass"
              type="password"
              name="Password"
              placeholder="Password"
            />
          </div>
          <input type="submit" name="" value="Sign In" />
        </form>
        <a href="#">
          Forget Password
          <br />{" "}
        </a>
        <div className="text-center">
          <button className="sign-up-btn" style={{color: '#23708f'}}>Sign-Up</button>
        </div>
      </div>
  );
};
