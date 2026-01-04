import React, { useState } from "react";

export default function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");

  async function onSubmitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF6EC] px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white border border-black/10 rounded-2xl p-8 shadow-sm"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-2xl font-semibold text-black">
            {currentState}
          </p>
          <div className="w-12 h-1 bg-purple-600 mx-auto mt-2 rounded"></div>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          {currentState !== "Login" && (
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:border-purple-600"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:border-purple-600"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:border-purple-600"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <p className="text-gray-600 cursor-pointer hover:underline">
            Forgot Password?
          </p>

          {currentState === "Sign Up" ? (
            <p
              onClick={() => setCurrentState("Login")}
              className="text-purple-600 cursor-pointer hover:underline"
            >
              Login
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="text-purple-600 cursor-pointer hover:underline"
            >
              Create account
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full mt-8 bg-black text-white py-3 rounded-md text-sm hover:bg-purple-700 transition"
        >
          {currentState === "Login" ? "Login" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
