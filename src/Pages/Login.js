import React from "react";
import "tailwindcss/tailwind.css";
import heroImage from "../Assets/hero-img.jpg";
import logoImage from "../Assets/logo.png";
import Eye from "../Assets/Eye.png";
import ThumbPrint from "../Assets/Thumbprint.png";

function Login() {
  return (
    <div className="flex flex-row h-screen"> 
      {/* Left section with logo and text */}
      <div className="bg-gray-200 w-full md:w-1/2 flex flex-col items-center justify-center">
        <img src={logoImage} alt="Logo" className="rounded-full h-16 w-16 mb-4" />
        <h1 className="text-3xl flex mb-2"><p className="font-bold">Welcome&nbsp;</p> back!</h1>
        <p className="text-gray-600 text-lg mb-6">Please enter your details to login.</p>
        <div className="flex flex-col w-1/2">
          <label className="mb-2">Username</label>
          <input type="text" className="border border-gray-300 hover:border-[#5B63E6] w-full focus:border-[#5B63E6] py-2 px-3 rounded-3xl mb-4"/>
          <label className="mb-2">Password</label>
            <div className="relative">
            <input type="password" className="lg:w-full border border-gray-300 hover:border-[#5B63E6] py-2 px-3 rounded-3xl mb-4"
            />
            <img className="absolute xl:top-[462px] xl:left-[444px] lg:left-[352px] lg:top-[364px] md:top-[400px] " src={Eye} alt="" />
            </div>
          <div href="#" className="text-sm ml-[252px] lg:ml-[210px] text-[#5B63E6] mb-4 whitespace-nowrap">Forgot password?</div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mb-2">Sign In</button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg">
            Sign In with Biometric
            <img src={ThumbPrint} alt="" />
            </button>
        </div>
      </div>
      {/* Right section with hero image */}
      <div className="hidden md:block bg-cover bg-center lg:w-1/2 w-1/2" style={{ backgroundImage: `url(${heroImage})` }}></div>
    </div>
  );
}

export default Login;
