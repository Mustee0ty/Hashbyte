import React, { useState } from "react";
import MarketImage from "../assets/marketImage.png";

export default function ConfirmPurchaseOrder({
  setConfirmation,
  setOrderPlaced,
}) {
  return (
    <div className="w-[360px] rounded-[44px] h-[611px] bg-gray-200">
      <div className="flex justify-center flex-col ">
        <p className="text-[20px] pl-6 pt-6 font-bold">
          Confirm Purchase Order
        </p>
        <h2 className="text-[14px] w-[270px] mt-[12px] mx-auto text-center leading-[35px] font-normal">
          Your wallet will charged 0.097 BTC for this purchase
        </h2>
        <div className="">
          <div className="mt-[74px] flex justify-center mx-auto">
            <img src={MarketImage} alt="" />
          </div>
          <div className="mt-[23px] ml-[54px]">
            <p className=" text-[14px] font-normal">
              Product: Macbook Pro - M2
            </p>
            <div className=" mt-[16px] flex items-center gap-[65px]">
              <p className="text-[14px] font-normal">Price:</p>
              <h2 className="text-[#5B63E6] text-[15px] font-bold">
                0.097 BTC
              </h2>
            </div>
          </div>
        </div>
        <div className="flex mt-[82px] justify-center">
          <button
            onClick={() => {
              setConfirmation(false);
              setOrderPlaced(true);
            }}
            className="w-[294px]  mb-[12px] h-[61px] flex items-center justify-center rounded-[30.5px] bg-[#5B63E6]"
          >
            <span className="text-[14px] font-normal text-white">Confirm</span>
          </button>
        </div>
      </div>
    </div>
  );
}
