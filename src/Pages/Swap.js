import React from "react"
import { Link } from "react-router-dom"

// import Components
import SwapLogo from "../Component/SwapHistory"
import Nav from "../Component/Nav"

// import Icons
import BackButton from "../assets/BackButton.svg"
import BlackDownArrow from "../assets/BlackDownArrow.png"
import BitCoinLogo from "../assets/BitcoinLogo.png"
import SwapIcon from "../assets/SwapSvg.svg"
import TetherIcon from "../assets/TetherIcon.png"
import BTCDot from "../assets/GreenDot.png"
import TetherDot from "../assets/TetherDot.png"

// import data
import { swapTime } from "../data"
import SwapHistory from "../Component/SwapHistory"

const Swap = () => {
  return (
    <section className="w-[360px] sm:w-full h-screen bg-[#ffffff] mx-auto">
      {/* Backbutton and Heading */}
      <div className="flex flex-row mt-[23px] ">
        <Link to={"/home"}>
          <img className="ml-[19px]" src={BackButton} alt="" />
        </Link>
        <p className="text-black ml-[131px] ">Swap</p>
      </div>
      {/* Exchange Dropdown */}
      <div className="relative flex flex-col items-center justify-center w-[130px] h-[20px] mx-auto ">
        <button className="bg-transparent w-full flex items-center justify-between font-semibold text-[15px] tracking-wider mx-auto text-[#394366] duration-300 active:text-black mt-[16px] px-3 relative">
          <p className="font-semibold text-[18px]"> BTC/USDT</p>
          <img className="right-0" src={BlackDownArrow} alt="" />
        </button>
      </div>
      {/* swap inputs */}
      <div className="h-[255px] w-[330px] rounded-[10px] bg-white mx-auto mt-[20px] items-center align-middle justify-center pt-[16px] relative">
        <div className="w-[297px] h-[50px] mt-[-1px] rounded-[28px] border-[1px] relative mx-auto my-[16px]">
          <div className="flex flex-row align-middle items-center justify-start ">
            <img className="m-[10px]" src={BitCoinLogo} alt="" />
            <img src={BlackDownArrow} alt="" />
          </div>
          <button className="absolute top-0 right-0 text-[15px] text-[#5B63E6] font-bold text-[#e6] m-[10px]">
            Max
          </button>
        </div>
        <div className="flex flex-row ml-[15px] text-[#9192A1]">
          Avl balance:{" "}
          <p className=" font-extrabold text-[15px] text-[#303C5B] ">
            {" "}
            &nbsp; 0.678btc
          </p>
        </div>
        <img className="mx-auto" src={SwapIcon} alt="" />
        <div className="w-[297px] h-[50px] rounded-[28px] border-[1px] relative mx-auto mt-[-20px] my-[16px]">
          <div className="flex flex-row align-middle items-center justify-start ">
            <img className="m-[10px]" src={TetherIcon} alt="" />
            <img src={BlackDownArrow} alt="" />
          </div>
          <button className="absolute top-0 right-0 text-[15px] text-[#5B63E6] font-bold text-[#e6] m-[10px]">
            Max
          </button>
        </div>
        <div className="flex flex-row ml-[15px] text-[#9192A1]">
          Avl balance:{" "}
          <p className=" font-extrabold text-[15px] text-[#303C5B] ">
            {" "}
            &nbsp; 0.678btc
          </p>
        </div>
      </div>
      <div className="flex flex-row w-[330px] mx-auto mt-[25px] gap-x-[12px]">
        {swapTime.map((singlebubble) => {
          const { id, time } = singlebubble
          return (
            <div
              className="w-[45px] h-[24px] cursor-pointer rounded-[19px] bg-[#5b63e6] flex items-center align-middle justify-center text-white mt-[10px]"
              key={id}
            >
              <p>{time}</p>
            </div>
          )
        })}
      </div>
      <button className="flex w-[330px] h-[61px] rounded-[30.5px] mt-[30px] bg-[#5b63e6] mx-auto items-center justify-center align-middle text-white font-bold text-[16px]">
        Swap
      </button>
      <div className="flex flex-row justify-between px-[20px] h-[238px] w-[330px] mt-[25px] bg-white rounded-[10px] mx-auto ">
        <div className="flex flex-row items-center justify-center align-middle">
          <img className="h-[22px] w-[22px]" src={BitCoinLogo} alt="" />
          <p className="ml-[5px] font-bold">BTC</p>
          <img className="w-[6px] h-[6px] ml-[9px]" src={BTCDot} alt="" />
        </div>
        <div className="flex flex-row items-center justify-center align-middle">
          <img src={TetherIcon} alt="" />
          <p className="ml-[5px]">USDT</p>
          <img className="w-[6px] h-[6px] ml-[9px]" src={TetherDot} alth="" />
        </div>
      </div>
      <div>
        <SwapHistory />
      </div>
      <div className="absotule bottom-0 fixed">
        <Nav />
      </div>
    </section>
  )
}

export default Swap
