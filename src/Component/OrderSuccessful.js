import React from "react";

export default function OrderSuccesfull({ setOrderPlaced }) {
  const showScrollingOnClosed = () => {
    document.body.style.overflowY = "auto";
  };
  return (
    <div className="w-[360px] rounded-[44px] shadow_top h-[611px] bg-white">
      <div className="flex mt-[82px] justify-center">
        <button
          onClick={() => {
            setOrderPlaced(false);
            showScrollingOnClosed();
          }}
          className="w-[294px]  mb-[12px] h-[61px] flex items-center justify-center rounded-[30.5px] bg-[#5B63E6]"
        >
          <p className="text-[14px] font-normal text-white">Confirm</p>
        </button>
      </div>
    </div>
  );
}
