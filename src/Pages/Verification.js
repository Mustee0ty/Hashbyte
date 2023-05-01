import React from "react"
import { walletBalance, amountBubbles, cryptoSlides } from "../data"
import BackButton from "../assets/BackButton.svg"
import GeneralBg from "../assets/withdrawalBg/fullbg.png"
import WhiteCap from "../assets/WhiteCap.png"
import BitcoinLogo from "../assets/BitcoinLogo.png"

const Verification = () => {
  return (
    <section className="mx-auto sm:w-full flex flex-col w-[360px] h-[800px] bg-gradient-to-b from-purple-700 via-purple-900 to-indigo-900 text-white relative">
      <img className="absolute right-0" src={GeneralBg} alt="" />
      <header className="h-[217px] w-full">
        <p className="flex flex-row w-full items-center justify-center align-middle ml-[15px] mt-[50px]">
          <img className="" src={BackButton} alt="" />
          <p className="text-[16px]  mx-auto ml-[115px] ">Withdraw</p>
        </p>
        <div className="w-full mt-[30px] px-[25px]">
          {walletBalance.map((wallet) => {
            const { id, balance } = wallet
            return (
              <div className="flex flex-col  " key={id}>
                <p className="font-bold text-[20px]">{balance}</p>
                <div className="flex flex-row text-[16px] w-full justify-between">
                  <p className=" font-thin">Main Balance</p>
                  <button className="">Change</button>
                </div>
              </div>
            )
          })}
        </div>
      </header>
      {/* White Section */}
      <div className="h-[600px] w-full bg-white rounded-t-[44px] flex flex-col mx-auto relative">
        <button className="mx-auto mt-[10px]">
          <img className="w-[53px] h-[4px]" src={WhiteCap} alt="" />
        </button>
        <div className="flex flex-col h-full">
          <p className="text-[#5B63E6] text-[20px] h-[35px] leading-[35px] font-bold mt-[20px] mb-[43px] mx-auto">
            {" "}
            Security Verification{" "}
          </p>
          <div className="px-[15px] h-full">
            <p className="text-[#9192A1] text-[15px] leading-[25px] mb-[5px]">
              Enter verification code{" "}
            </p>
            <div className="relative flex flex-row">
              <input
                className="w-[330px] h-[56px] rounded-[28px] border-[1px] focus:border-[1px] "
                type="text"
              />
              <button className="absolute text-[#5B63E6] right-0 mr-[21px] font-[700] top-[25%]">
                Get code{" "}
              </button>
            </div>
            <p className="text-gray-400 mt-[8px]">
              6-digit code sent to ab***gmail.com
            </p>
            <button className="mt-[47px] w-[330px] h-[61px] rounded-[30.5px] bg-[#5b63e6] text-[16px] leading-[16px] absolute bottom-[10px] ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Verification
