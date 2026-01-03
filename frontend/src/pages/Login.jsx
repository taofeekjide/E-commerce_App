import React, { useState } from "react";

export default function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");

  async function onSubmitHandler (e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} >
      <div>
        <p>{currentState}</p>
        <hr />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input type="text" placeholder="Name" required />
      )}
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <div>
        <p>Forgot Password?</p>
        {currentState === "Sign Up" ? (
          <p onClick={() => setCurrentState("Login")}>Login</p>
        ) : (
          <p onClick={() => setCurrentState("Sign Up")}>Create account</p>
        )}
      </div>
      <button>{currentState === "Login" ? "Login" : "Sign Up"}</button>
    </form>
  );
}
