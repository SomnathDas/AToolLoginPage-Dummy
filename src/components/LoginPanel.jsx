import React from "react";
import { useState } from "react";

function LoginPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gotResponse, setGotResponse] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        console.log(res.json());
        setGotResponse("Success");
      } else {
        setGotResponse("Failed");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className={`flex flex-col justify-center items-center md:w-3/5 w-full p-8 gap-4`}
    >
      <div className={`text-center`}>
        <h1 className={`text-3xl font-bold text-gray-800`}>Welcome Back</h1>
        <h2>Sub-title text goes here</h2>
      </div>

      {gotResponse ? (
        <div className={` bg-gray-800 text-white pl-8 pr-8 pt-2 pb-2`}>
          <h2>{gotResponse}</h2>
        </div>
      ) : (
        ""
      )}

      <form onSubmit={onSubmit} className={`flex flex-col w-full gap-2`}>
        <input
          type="email"
          name=""
          id=""
          placeholder="Email Address*"
          className={`pl-12 pr-12 pt-3 pb-3 border-2`}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password*"
          className={`pl-12 pr-12 pt-3 pb-3 border-2`}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className={`bg-gray-800 text-white pl-12 pr-12 pt-3 pb-3 font-semibold hover:bg-white hover:text-gray-800 border-2 border-gray-800 transition-all`}
        >
          Login
        </button>
        <div className={`flex justify-between items-center`}>
          <div className={`flex gap-2`}>
            <input type="checkbox" name="remPswd" id="remPswd" />
            <label htmlFor="remPswd" className={`text-sm`}>
              Remember Password
            </label>
          </div>

          <div>
            <a href="/" className={`hover:underline text-sm`}>
              Forgot Password?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPanel;
