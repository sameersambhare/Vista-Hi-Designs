import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
const CreateAccount = () => {
  const Sucess = (msg) => {
    toast.success(msg);
  };
  const Error = (msg) => {
    toast.error(msg);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const postDetails = () => {
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: fname,
        lastname: lname,
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
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="Account w-full min-h-screen items-center justify-center flex flex-col font-['Inter']">
        <div className="w-1/2 mt-[4vw] px-[4vw] flex flex-col gap-[3vw] pt-[10vw]">
          <h1 className="text-[2.5vw] font-semibold text-center">
            Create Account
          </h1>
          <div className="">
            <input
              className="px-[2vw] py-[0.7vw] border-[0.12vw] w-full border-black"
              type="text"
              placeholder="First name"
              id="fname"
              name="fname"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
          </div>
          <div className="">
            <input
              className="px-[2vw] py-[0.7vw] border-[0.12vw] w-full border-black"
              type="text"
              placeholder="Last name"
              id="lname"
              name="lname"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </div>
          <div className="">
            <input
              className="px-[2vw] py-[0.7vw] border-[0.12vw] w-full border-black"
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
              className="px-[2vw] py-[0.7vw] border-[0.12vw] w-full border-black"
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

          <div className="flex gap-[1vw]">
            <input type="checkbox" />
            <p>Subscribe to email marketing</p>
          </div>

          <div className="buttons flex gap-3 pb-[6vw]">
            <button
              className="px-[2vw] py-[0.5vw] bg-[#333333] text-white rounded-full font-semibold"
              onClick={() => {
                postDetails();
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
