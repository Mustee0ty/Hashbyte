import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

//import data
import { HistoryData } from "../data"

// import Components
import SendRecieveDrawer from "../Component/SendRecieveDrawer"
import History from "../Component/History"
import ShareQRcode from "../Component/ShareQRcode"

// import icons
import BackButton from "../assets/BackButton.svg"
import MoneyBag from "../assets/moneybag.png"
import BNBLogo from "../assets/BNBLogo.png"
import BitcoinLogo from "../assets/BitcoinLogo.png"

// Slider Data
const sliderz = [
  {
    id: 1,
    logo: BitcoinLogo,
    balance: "0.8956767 BTC",
    balanceText: "Main Balance",
  },
  {
    id: 2,
    logo: BNBLogo,
    balance: "0.8956768 BTC",
    balanceText: "Side Balance",
  },
  {
    id: 3,
    logo: MoneyBag,
    balance: "0.8956768 BTC",
    balanceText: "Side Balance",
  },
]

const Wallet = () => {
  const [isSelected, setIsSelected] = useState(false)

  const [people, setPeople] = useState(sliderz)

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  const TradeMine = () => {
    setIsSelected(!isSelected)
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className="h-screen sm:w-full md:w-[360px] lg:w-[360px] flex flex-col mx-auto bg-[#F9F8FF] overflow-auto ">
      {/* BackButton */}
      <Link to={"/home"}>
        <button>
          <img className="mt-[30px]" src={BackButton} alt="" />
        </button>
      </Link>

      {/* Trading mining switch button */}

      <div className="w-[360px] relative mx-auto">
        <div
          onClick={TradeMine}
          className="flex flex-row h-[37px] w-[138px] text-white bg-gray-200 rounded-2xl mx-auto"
        >
          <div
            className={` flex items-center justify-center ${
              isSelected
                ? "flex w-1/2 bg-grey-300 rounded-full bg-blue-500 transition-all duration-500"
                : "flex w-1/2 bg-gray-200 rounded-full transition-all duration-500"
            }`}
          >
            Trading
          </div>

          <div
            onClick={TradeMine}
            className={` flex items-center justify-center ${
              isSelected
                ? "h-full w-1/2 bg-gray-200 rounded-full transition-all duration-500"
                : "w-1/2 h-full bg-[#5B63E6] rounded-full transition-all duration-500  "
            }`}
          >
            Mining
          </div>
        </div>
      </div>

      {/* Balance Slider */}
      <div className="flex flex-row mt-[18px] items-center top-[90px] w-full justify-center mx-auto relative">
        <button className="h-[153px] flex absolute left-0 w-[16px] rounded-r-[15px] bg-[#FFA24c]"></button>

        {sliderz.map((person, personIndex) => {
          const { id, logo, balance, balanceText } = person

          let position = "nextSlide"
          if (personIndex === index) {
            position = "activeSlide"
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide"
          }

          return (
            <div className="w-[360px] absolute flex flex-col mx-auto">
              <article className={position} key={id}>
                <div className="bg-gradient-to-b from-purple-800 via-purple-900 to-blue-900 h-[180px] w-[298px] rounded-[20.5px] items-center justify-center align-middle flex text-white ">
                  <div className="flex flex-row">
                    <img
                      className="h-[46px] w-[46px] mr-[17px]"
                      src={logo}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p className="font-bold text-[20px]">{balance}</p>
                      <p className="font-thin text-[16px] leading-[19.2px]">
                        {balanceText}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          )
        })}

        <button className="absolute right-0 h-[153px] w-[16px] rounded-l-[15px] bg-[#FFA24c]"></button>
      </div>
      <div className="flex justify-center align-middle h-full w-full top-[200px] relative">
        <div className="">
          <History />
        </div>
      </div>
      <SendRecieveDrawer />
      <ShareQRcode />
    </section>
  )
}

export default Wallet
