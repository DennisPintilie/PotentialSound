import React from "react";

const Login = () => {

  return (
    <div>
      <h1>{"Welcome to Potential Sound"}</h1>
      <div className="Googlelogin">
        <a href="/auth/google">
          <button className="GoogleButton">Sign in with Google</button>
        </a>
      </div>
    </div>
  );
};

export default Login;
