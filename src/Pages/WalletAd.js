import React, { useState } from "react"

import { Link } from "react-router-dom"

// import data
import { WalletAdSlider } from "../data"

// import images
import walletHeroImg from "../assets/walletHeroImg.png"
import walletDot from "../assets/walletdot.png"
import LongerDot from "../assets/longerdot.png"
import BackButton from "../assets/BackButton.svg"
import DownArrow from "../assets/DownArrow.svg"

const WalletAd = () => {
  const [isSlider, setIsSlider] = useState(WalletAdSlider)
  const [index, setIndex] = useState(0)

  return (
    <section className="flex flex-col bg-white mx-auto h-[800px] items-center w-[360px]">
      <div className="flex flex-row w-full items-center justify-center align-middle mt-[50px]">
        <img className=" " src={BackButton} alt="" />
        <p className="text-[16px] mx-auto font-semibold ">Wallet</p>
      </div>
      {/* Ads Slider */}
      <div className="rounded-[20px] relative flex flex-row bg-gradient-to-l from-[#5B63E6] to-[#A64EFF] pl-[10px] w-[298px] h-[180px] mt-[20px]">
        <div className="mt-[37px] pl-[25px] text-[13px] text-white">
          <p className="h-[56px] w-[116px] font-semibold text-[18px] leading-[28px]">
            Do more with Hashbyte
          </p>
          <p className="h-[25px] w-[157px] pt-[16px] text-[15px]">
            Shop, pay for utilities
          </p>
        </div>
        <div className="">
          <img
            className="h-[181px] w-[210px] object-cover absolute left-[95px]"
            src={walletHeroImg}
            alt=""
          />
        </div>
      </div>
      {/* navigation dots */}
      <div className="flex flex-row mx-auto justify-center w-full mt-[7px]">
        <img src={walletDot} alt="" />
        <img src={LongerDot} alt="" />
        <img src={walletDot} alt="" />
      </div>
      {/* Buttons */}
      <div className="flex flex-col justify-center items-center mx-auto">
        <Link to={"/mobileTopUp"}>
          <button className="w-[173px] h-[55px] mt-[28px] text-white rounded-[27.5px] bg-[#5B63E6] text-[18px] items-center justify-center">
            Mobile Top Up
          </button>
        </Link>
        <Link to={"/marketPlace"}>
          <button className="w-[173px] h-[55px] mt-[16px] text-white rounded-[27.5px] bg-[#5B63E6] text-[18px] items-center justify-center">
            Marketplace
          </button>
        </Link>
      </div>
      <button className="absolute bottom-0 w-[360px] h-[54px] rounded-[10px] border-[1px] flex justify-center align-center items-center">
        <img className="h-[8px] w-[5px]" src={DownArrow} alt="" />
        <p className="text-[#303C5B] font-semibold ml-[10px]">
          Back to homepage
        </p>
      </button>
    </section>
  )
}

export default WalletAd
