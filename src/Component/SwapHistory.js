import React from "react"

// import swap data
import { swapHistory } from "../data"

// import assets
import verticalSwapLogo from "../assets/VerticalSwapLogo.png"
import BlackDropDownIcon from "../assets/BlackDownArrow.png"

const SwapHistory = () => {
  return (
    <div className="h-[322px] mx-auto flex flex-col items-center justify-center align-middle">
      <div className="font-bold text-[18px] w-[300px] justify-between container mx-auto flex items-center align-center mb-[10px] ">
        <p> History</p>
        <button className="flex flex-row bg-white items-center justify-center align-middle rounded-[7px] w-[58px] h-[32px]">
          <p className="mr-[8px]"> All</p>
          <img
            className="flex items-center align-middle h-[7px] mt-[4px] w-[9px]"
            src={BlackDropDownIcon}
            alt=""
          />
        </button>
      </div>
      <ul>
        {swapHistory.map((transaction) => {
          const {
            id,
            coinLogo,
            icon1,
            icon2,
            transactionAmount,
            status,
            time,
          } = transaction
          return (
            <li
              className="flex flex-col bg-white w-[330px] h-[82px] rounded-[10px] mb-[10px] "
              key={id}
            >
              <div className="flex flex-row mt-[17px] justify-between mx-[11px]">
                <div className="font-bold flex flex-row">
                  <img
                    className="mr-[7px] w-[22px] h-[22px]"
                    src={icon1}
                    alt=""
                  />
                  <img
                    className="mr-[7px] w-[22px] h-[22px]"
                    src={verticalSwapLogo}
                    alt=""
                  />
                  <img
                    className="mr-[7px] w-[22px] h-[22px]"
                    src={icon2}
                    alt=""
                  />
                  <p className="ml-[8px]">{transactionAmount}</p>
                </div>
                <div className="flex flex-row">
                  <button className="bg-[#06ee95] h-[18px] w-[60px] text-[#0ecb81] flex items-center align-middle rounded-[9px] text-[12px] justify-center">
                    {status}
                  </button>
                  <p className="text-[#9D9CA8] ml-[21px]">{time}</p>
                </div>
              </div>
              <a
                className="justify-end flex pb-[15px] mr-[11px] font-semibold text-blue-700"
                href=""
              >
                View details
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SwapHistory
