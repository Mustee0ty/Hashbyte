import React from "react"
import { Link } from "react-router-dom"

// import icons

import heroImage from "../assets/hero-img.jpg"
import logoImage from "../assets/logo.png"
import Eye from "../assets/Eye.png"
import ThumbPrint from "../assets/Thumbprint.png"

function Login() {
  return (
    <section className="flex items-center justify-center mx-auto h-max sm:w-full max-w-screen-sm w-full">
      <div className="w-screen mx-auto h-full justify-center relative">
        <div className="flex flex-col mx-auto justify-center align-middle items-center">
          <div className="flex items-center justify-center mx-auto ">
            <img
              src={logoImage}
              alt="Logo"
              className="rounded-full h-[100px] w-[100px] mb-[31px]"
            />
          </div>
          <div className="text-3xl left-0 flex mb-2 w-[273px] h-[35px] text-[35px] ">
            <p className="font-bold mb-[6px]">Welcome&nbsp;</p> back!
          </div>
          <p className="flex justify-start items-start mx-auto text-gray-600 h-[25px] w-[270px] text-[15px] mb-[30px]">
            Please enter your details to login.
          </p>
        </div>

        <div className="flex flex-col mx-auto w-max">
          <label className="mb-[5px] h-[25px] w-[74px] flex justify-start">
            Username
          </label>
          <input
            type="text"
            className="border  border-[#5B63E6] w-[300px] h-[56px] focus:border-[#5B63E6] py-2 px-3 rounded-3xl mb-[16px]"
          />
          <label className="mb-[5px] flex justify-start items-start">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              className="w-[300px] h-[56px] border border-gray-300 hover:border-[#5B63E6] py-2 px-3 rounded-3xl mb-4 relative"
            />
            <img
              className="absolute top-[32.7%] left-[85%] "
              src={Eye}
              alt=""
            />
          </div>
          <div
            href="#"
            className="text-[13px] flex justify-end pr-[0px] font-semibold text-[#5B63E6] mb-4 whitespace-nowrap"
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
            <Link to={"/home"}>
              <p className="font-normal">Sign In with Biometric</p>
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Login
