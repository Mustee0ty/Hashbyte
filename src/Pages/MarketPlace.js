import React from "react"

// import Data

import { products } from "../data"

// import icons
import BackButton from "../assets/BackButton.svg"
import SearchButton from "../assets/SearchButton.png"

function MarketPlace() {
  return (
    <section className="w-[360px] h-full bg-white mx-auto">
      <header>
        <div className="flex flex-row px-[10px] mb-[18px] mt-[23px]">
          <img src={BackButton} alt="" />
          <p className="ml-[110px] text-[#303c5b] font-semibold">
            Market Place
          </p>
        </div>
      </header>
      {/* Search bar */}
      <div className="h-[56px] w-[321px] flex items-center align-middle rounded-[31px] border-[1px] relative border-[#e7e7e7] mx-auto">
        <p className="ml-[22px] text-[#9d9ca8] text-[14px] ">Search</p>
        <img className="absolute right-[20px]" src={SearchButton} alt="" />
      </div>
      {/* Product grid */}
      <div className="grid grid-cols-2 gap-y-[14px] gap-x-[14px] mt-[12px] w-max mx-auto">
        {products.map((product) => {
          const { id, name, price, image, sold, cryptoPrice } = product
          return (
            <div
              key={id}
              className="w-[153px] h-[244px] rounded-[20px] border-[1px] pl-[13px] border-[#e7e7e7] flex flex-col"
            >
              <img
                className="relative w-[138px] h-[86px] mt-[10px]"
                src={image}
                alt=""
              />
              <p className="absolute w-[60px] h-[19px] bg-[#f6465d] flex justify-center align-middle items-center rounded-[9.5px] m-[8px] text-white text-[12px] ">
                {sold} Sold
              </p>
              <p className="text-[16px] leading-[25px] font-semibold mt-[17px]">
                {name}
              </p>
              <p className="text-[13px] font-normal text-[#9d9ca8] leading-[25px]">
                {cryptoPrice}
              </p>
              <p className="font-semibold">${price}</p>
              <button className="w-[89px] h-[32px] bg-[#5b63e6] rounded-[16px] flex items-center justify-center text-[14px] text-white align-middle mt-[12px]">
                Buy Now
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default MarketPlace
