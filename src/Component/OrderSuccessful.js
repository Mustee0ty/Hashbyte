import React from "react"
import { BsCheck2 } from "react-icons/bs"

export default function OrderSuccesfull({ setOrderPlaced }) {
  const showScrollingOnClosed = () => {
    document.body.style.overflowY = "auto"
  }
  return (
    <div className="w-[360px] rounded-[44px] h-[611px] bg-white mx-auto">
      <div className="pt-[11px]">
        <span className="h-[4px] w-[53px] rounded-[5px] mx-auto mb-[21px] block bg-[#DCDCDC]"></span>
      </div>
      <p className="text-[20px] pl-6 text-center mb-[11px] pt-6 font-bold">
        Order Successfully Placed
      </p>
      <div className="w-[88px] grid place-items-center m-auto h-[88px] bg-[#5B63E626] rounded-full">
        <div className="w-[68px] h-[68px] grid place-items-center bg-[#5B63E6] rounded-full">
          <BsCheck2 className="text-white text-[24px] font-bold" />
        </div>
      </div>
      <h2 className="text-[14px] mt-[12px] text-center font-normal">
        <h2 className="text-[14px] w-[270px] mt-[12px] mx-auto text-center leading-[35px] font-normal">
          Your purchased is currently being processed
        </h2>
      </h2>

      <div>
        <div className="flex gap-[120px] mt-[40px] justify-between ml-[20px] mr-[20px]">
          <p className="text-[15px] font-normal font-custom text-[#9D9CA8]">
            Date
          </p>
          <h2 className="text-[16px] font-normal font-custom text-[#9D9CA8]">
            4 july 2022, 3.30am
          </h2>
        </div>
        <div className="flex gap-[120px] mt-[27px] justify-between ml-[20px] mr-[20px]">
          <p className="text-[15px] font-normal font-custom text-[#9D9CA8]">
            Amount
          </p>
          <h2 className="text-[16px] font-normal font-custom text-[#9D9CA8]">
            $567.90
          </h2>
        </div>
        <div className="flex gap-[120px] mt-[27px] justify-between ml-[20px] mr-[20px]">
          <p className="text-[15px] font-normal font-custom text-[#9D9CA8]">
            Option
          </p>
          <h2 className="text-[16px] font-normal font-custom text-[#9D9CA8]">
            BTC
          </h2>
        </div>
        <div className="flex gap-[120px] mt-[27px] justify-between ml-[20px] mr-[20px]">
          <p className="text-[15px] font-normal font-custom text-[#9D9CA8]">
            Address
          </p>
          <h2 className="text-[16px] font-normal font-custom text-[#9D9CA8]">
            tdgfdgfsffshjs3546
          </h2>
        </div>
      </div>
      <div className="flex mt-[49px]  justify-center">
        <button
          onClick={() => {
            setOrderPlaced(false)
            showScrollingOnClosed()
          }}
          className="w-[185px]  mb-[12px] h-[38px] flex items-center justify-center rounded-[30.5px] bg-[#5B63E62B]"
        >
          <span className="text-[14px] font-normal text-[#5B63E6]">
            View on blockchain
          </span>
        </button>
      </div>
    </div>
  )
}
