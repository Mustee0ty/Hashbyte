import React from "react"
import { walletBalance, amountBubbles, cryptoSlides } from "../data"
import BackButton from "../assets/BackButton.svg"
import GeneralBg from "../assets/withdrawalBg/fullbg.png"
import WhiteCap from "../assets/WhiteCap.png"
import BitcoinLogo from "../assets/BitcoinLogo.png"

const Withdrawal = () => {
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
        <div className="flex flex-col">
          <p className="text-[#5B63E6] text-[30px] font-bold my-[20px] mx-auto">
            {" "}
            0.45789 BTC
          </p>
          <div className="px-[15px]">
            <p className="text-[#9192A1] text-[15px] leading-[25px] mb-[5px]">
              Enter an amount
            </p>
            <div className="relative flex flex-row">
              <input
                className="w-[330px] h-[56px] rounded-[28px] border-[1px] focus:border-[1px] "
                type="text"
              />
              <button className="absolute text-[#5B63E6] right-0 mr-[21px] font-[700] top-[25%]">
                Max
              </button>
            </div>
            <div className="flex flex-row justify-evenly">
              {amountBubbles.map((bubble) => {
                const { id, amount } = bubble
                return (
                  <button
                    className="bg-[#EEEEEE] mt-[14px] flex items-center align-middle justify-center hover:bg-[#d5d1d1] h-[32px] w-[51px] rounded-[16px] text-black font-semibold"
                    key={id}
                  >
                    {amount}
                  </button>
                )
              })}
            </div>
            {/* Address input */}
            <div className="mt-[40px]">
              <p className="text-[#9192A1] text-[15px] leading-[25px] mb-[5px]">
                Enter an address
              </p>
              <div className="relative flex flex-row">
                <input
                  className="w-[330px] h-[56px] rounded-[28px] border-[1px] focus:border-[1px] "
                  type="text"
                />
                <button className="absolute text-[#5B63E6] right-0 mr-[21px] font-[700] top-[25%]">
                  Paste
                </button>
              </div>
            </div>
            {/* Chain name */}
            <p className="my-[10px]">Chain name</p>
            <div className="flex gap-x-2 flex-row text-black mb-[22px] ">
              <img src={BitcoinLogo} alt="" />
              <p className="font-bold">BTC</p>
              <p className="text-gray-400">Bitcoin</p>
            </div>
            <div className="rounded-[7px] flex items-center align-middle justify-center h-[45px] w-[330px] bg-[#efe5e5]">
              <p className="text-[#ff4141] text-[13px] leading-[16px] font-semibold flex items-center align-middle justify-center">
                Please don't withdraw to any other address except BTC or you may
                lose it{" "}
              </p>
            </div>
            <button className="mt-[47px] w-[330px] h-[61px] rounded-[30.5px] bg-[#5b63e6] text-[16px] leading-[16px]">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Withdrawal
