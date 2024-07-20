import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import logo from "../d mart.png"

const SigninFrom = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({ email: "" })

  function changehandler(event) {
    setformData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value
      }
    ))
  }
  function submithandler(event) {
    event.preventDefault();
    navigate("/login")

    const accountdata = {
      ...formData
    }

    console.log("printing account data");
    console.log(accountdata)
  }


  return (
    <div className="flex flex-col items-center mt-4 w-fit lg:w-full">
      <div className="">
        <img src={logo} alt="img" className="lg:h-110 lg:w-[10rem] h-30 w-28"></img>
      </div>
      <form onSubmit={submithandler} className="border-2  lg:mt-6 lg:p-7 lg:min-w-64 
            rounded-lg mt-4 p-4 ml-3">
        <div>
          <h1 className="lg:text-3xl text-2xl"> Sign in</h1>
          <label>
            <p className="font-semibold text-sm lg:mt-4 mt-1">Email or mobile phone number</p>
            <input type="email"
              required
              name="email"
              className="border-2 border-slate-400 lg:px-2 mt-1 py-1 rounded-md w-72 text-sm px-1"
              value={formData.email}
              onChange={changehandler}
            />
          </label>
          <div>
            <button className="bg-yellow-300 px-28 py-1.5 rounded-lg mt-4 text-sm ">Continue</button>
          </div>
          <p className="text-xs lg:mt-6 mt-3 w-72">By continuing, you agree to Amazon's
            <span className="text-blue-800 hover:underline hover:text-red-700 cursor-pointer ">
              Conditions of Use </span>
            and <span className="text-blue-700 text-blue-800 hover:underline hover:text-red-700 
            cursor-pointer"> Privacy Notice.</span></p>
          <div>
            <details className="border-b-2  lg:pb-5 pb-3 text-blue-800 ">
              <summary className="lg:text-sm text:xs lg:mt-6 mt-3 text-blue-800 hover:underline 
           hover:text-red-700 cursor-pointer">Need help?</summary>
              <p><a href="#" className="lg:text-sm text-xs ml-3 text-blue-800 hover:underline hover:text-red-700 
           cursor-pointer">Forgot Password</a></p>
              <p><a href="#" className="lg:text-sm text-xs ml-3 text-blue-800 hover:underline hover:text-red-700 
           cursor-pointer">Other issues with Sign-In</a></p>
            </details>
          </div>
          <div>
            <p className="font-semibold text-sm lg:mt-4 mt-2">Buying for work?</p>
            <p className="text-sm mt-1 text-blue-700 text-blue-800 hover:underline hover:text-red-700
                cursor-pointer">Shop on Amazon Business</p>
          </div>
        </div>
      </form>
      <div className="flex lg:mt-6 mt-4">
        <div className="  border-b-2 w-32 lg:m-2 m-1"></div>
        <div className="text-xs text-gray-700">New to Shop?</div>
        <div className="  border-b-2 w-32 m-2"></div>
      </div>
      <div>
        <button className="border-2  mt-3 py-1 rounded-md w-80 shadow text-sm hover:bg-gray-100">
          Create your account</button>
      </div>
    </div>
  )
}
export default SigninFrom;