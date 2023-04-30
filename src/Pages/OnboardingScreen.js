import React from "react"
import BigMiddleThing from "../assets/BigMiddleThing.svg"
import BrokenRight from "../assets/BrokenRight.png"
import MiddleThing from "../assets/middlething.jpg"
import CircleThing from "../assets/CricleThing.png"
import DownCircleThing from "../assets/DownCircleThing.png"

import { Link } from "react-router-dom"

const OnboardingScreen = () => {
  return (
    <section className="mx-auto flex justify-center overflow-hidden  h-screen w-[360px] bg-gradient-to-b from-purple-700 via-purple-900 to-blue-900 text-white relative">
      <Link to={"/login"}>
        <button className="absolute right-0 text-[15px] mr-[25px] mt-[31px] ">
          Skip
        </button>
      </Link>
      <img
        className="h-max w-max absolute top-[106px] right-0"
        src={BrokenRight}
        alt=""
      />
      <img
        className="h-max w-max absolute top-[155px] right-0"
        src={BigMiddleThing}
        alt=""
      />
      <img
        className="absolute left-[41px]  top-[218px]"
        src={CircleThing}
        alt=""
      />
      <img
        className="h-max w-max absolute left-[77px] top-[249px] "
        src={MiddleThing}
        alt=""
      />
      <p className="w-[273px] h-[110px] text-[35px] absolute top-[350px]">
        Welcome to <br />
        <p className="font-bold text-[34px]">Hashbyte</p>
      </p>
      <p className="absolute top-[479px] font-extralight left-[42px]">
        Earn money renting your linux
        <br /> processing power
      </p>
      <img
        className="absolute h-max w-max right-0 top-[519px]"
        src={DownCircleThing}
        alt=""
      />
      <img
        className="absolute h-max w-max right-[-4px] top-[549.5px]"
        src={MiddleThing}
        alt=""
      />
      <Link to={"/login"}>
        <button className="w-[277px] h-[61px] absolute rounded-[30.5px] flex items-center align-middle justify-center border-[0.5px] border-white bg-transparent text-white box-border left-[41px] top-[601px] z-50">
          Get Started
        </button>
      </Link>
    </section>
  )
}

export default OnboardingScreen
