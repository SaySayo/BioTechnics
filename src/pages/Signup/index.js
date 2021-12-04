import React from "react";
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";


export const Signup = () => {
  const { loginWithRedirect } = useAuth0();
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
          <input type="submit" name="" value="Log In"
          onClick={() => loginWithRedirect()}/>
        </form>
        <a href="#">
          Forget Password
          <br />{" "}
        </a>
        <div className="text-center">
          <button className="sign-up-btn" style={{color: '#23708f'}} onClick={() => loginWithRedirect()}>Sign-Up</button>
        </div>
      </div>
  );
};
