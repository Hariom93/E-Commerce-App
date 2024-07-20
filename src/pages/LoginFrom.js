import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import logo from "../d mart.png"

const LoginFrom = () => {

  const navigate = useNavigate();

  const [formData, setformData] = useState({ email: " ", showpassword: " ", signed: "false" })

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
    navigate("/")
    toast.success("Account Created")

    const accountdata = {
      ...formData
    }

    console.log("printing account data");
    console.log(accountdata)
  }


  return (
    <div className="flex flex-col items-center mt-4">
      <div>
        <img src={logo} height="150" width="150px" alt="img"></img>
      </div>
      <form onSubmit={submithandler} className="border-2  mt-6 p-7 min-w-64 rounded-lg">
        <div>
          <h1 className="text-3xl"> Sign in</h1>
          <label>
            <p className="font-semibold text-sm mt-4">Email or mobile phone number</p>
            <input type="email"
              required
              className="border-2 border-slate-400 px-2 mt-1 py-1 rounded-md w-72 text-sm "
              name="email"
              value={formData.email}
              onChange={changehandler}
            />
          </label>
          <label>
            <div className="flex mt-4 space-x-28">
              <p className="font-semibold text-sm">Password</p>
              <a href="#" className="text-blue-800 text-sm hover:underline hover:text-red-700 cursor-pointer">Forgot Password</a>
            </div>
            <input type="password"
              required
              name="password"
              onChange={changehandler}
              className="border-2 border-slate-400 px-2 mt-1 py-1 rounded-md w-72 text-sm "
              placeholder="Enter Password"></input>
          </label>
          <div>
            <button className="bg-yellow-300 px-32 py-1.5 rounded-lg mt-4 text-sm">Sign in</button>
          </div>
          <p className="text-xs mt-6 w-72">By continuing, you agree to Amazon's <span className="text-blue-800 hover:underline hover:text-red-700 cursor-pointer "> Conditions of use</span>
            and <span className="text-blue-700 text-blue-800 hover:underline hover:text-red-700 cursor-pointer"> Privacy Notice.</span></p>
          <div>

            <label >
              <input type="checkbox"
                name="signed"
                value={formData.signed}
                onChange={changehandler}
                className="mt-5"
              />
              <span className=" ml-2 text-sm">Keep me signed in. </span>
            </label>
          </div>
        </div>
        <div className="flex mt-6">
          <div className="  border-b-2 w-24 m-2"></div>
          <div className="text-xs text-gray-700">New to Shop?</div>
          <div className="  border-b-2 w-24 m-2"></div>
        </div>
        <button className="border-2  mt-3 py-1 rounded-md w-72 shadow text-sm hover:bg-gray-100">Create your account</button>
      </form>
    </div>
  )
}
export default LoginFrom;