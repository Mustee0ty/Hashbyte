import React from "react"
import { Link } from "react-router-dom"

// import icons

import heroImage from "../assets/hero-img.jpg"
import logoImage from "../assets/logo.png"
import Eye from "../assets/Eye.png"
import ThumbPrint from "../assets/Thumbprint.png"

function Login() {
  return (
    <div className="flex items-center justify-center mx-auto h-screen max-w-screen-sm">
      <div className="bg-white w-[360px] h-[800] flex flex-col justify-center mt-[46px]">
        <div>
          <div className="flex items-center justify-center">
            <img
              src={logoImage}
              alt="Logo"
              className="rounded-full h-[100px] w-[100px] mb-[31px]"
            />
          </div>
          <div className="text-3xl left-0 flex mb-2 w-[273px] h-[35px] text-[35px] ">
            <p className="font-bold mb-[6px]">Welcome&nbsp;</p> back!
          </div>
          <p className="flex justify-start items-start text-gray-600 h-[25px] w-[222px] text-[15px] mb-[30px]">
            Please enter your details to login.
          </p>
        </div>

        <div className="flex flex-col">
          <label className="mb-[5px] h-[25px] w-[74px]">Username</label>
          <input
            type="text"
            className="border border-[#5B63E6] w-[300px] h-[56px] focus:border-[#5B63E6] py-2 px-3 rounded-3xl mb-[16px]"
          />
          <label className="mb-[5px]">Password</label>
          <div className="relative">
            <input
              type="password"
              className="w-[300px] h-[56px] border border-gray-300 hover:border-[#5B63E6] py-2 px-3 rounded-3xl mb-4"
            />
            <img
              className="absolute top-[32.7%] left-[73%] "
              src={Eye}
              alt=""
            />
          </div>
          <div
            href="#"
            className="text-[13px] flex justify-end mr-[62px] text-[#5B63E6] mb-4 whitespace-nowrap"
          >
            Forgot password?
          </div>
          <Link to={"/home"}>
            <button className="h-[62px] w-[300px] bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-[31px] mb-2">
              Sign In
            </button>
          </Link>

          <button className="bg-white h-[62px] w-[300px] flex items-center justify-center text-[#303C5B] py-2 px-4 rounded-[31px] border-[1px] border-[#E8E8E8] ">
            <img className="mr-[10px]" src={ThumbPrint} alt="" />
            <p>Sign In with Biometric</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
