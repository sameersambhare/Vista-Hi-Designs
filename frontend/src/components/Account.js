import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Account = () => {
  const Sucess = (msg) => {
    toast.success(msg);
  };
  const Error = (msg) => {
    toast.error(msg);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const postDetails = () => {
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          Error(data.error);
        } else {
          Sucess(data.message);
          console.log(data);
          localStorage.setItem("Token", data.token);
          localStorage.setItem("LocalUser", JSON.stringify(data.localuser));
        }
      });
  };
  return (
    <div className="w-full h-screen bg-white">
      <div className="Account w-full h-screen items-center justify-center flex flex-col font-['Inter']">
        <div className="w-1/2 mt-[4vw] p-[4vw] flex flex-col gap-[3vw]">
          <h1 className="text-[2.5vw] font-semibold text-center">Login</h1>
          <div className="">
            <input
              className="px-[2vw] py-[0.8vw] border-[0.12vw] w-full border-black"
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="">
            <input
              className="px-[2vw] py-[0.8vw] border-[0.12vw] w-full border-black"
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <a href="#" className="text-right underline text-[1vw] text-gray-600">
            Forgot your Password?
          </a>

          <div className="buttons flex gap-3">
            <button
              className="px-[2vw] py-[0.5vw] bg-[#333333] text-white rounded-full font-semibold"
              onClick={() => {
                postDetails();
              }}
            >
              Sign In
            </button>
            <Link to="/createaccount">
              <p className="px-[2vw] py-[0.5vw]  border-[0.1vw] border-black rounded-full font-semibold ">
                Create Account
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
