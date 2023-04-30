import { useState } from "react"
import dayjs from "dayjs"

// import Components
import Calender from "../Component/Calender"
import History from "../Component/History"

//import data
import { walletBalance, HomeData } from "../data"

// import icons
import BackButton from "../assets/BackButton.svg"

// import hero background image
import HeroBg from "../assets/HomeBgVectors/HeaderBg.png"

const MiningWallet = () => {
  const [isSelected, setIsSelected] = useState(false)

  const TradeMine = () => {
    setIsSelected(!isSelected)
  }

  return (
    <section className="lg:w-[360px] lg:h-[980px] sm:w-screen sm:h-screen mx-auto bg-[#F8F7FE]">
      {/* Nav */}
      <div className="flex items-center justify-center align-middle mb-[18px]">
        {/* BackButton */}
        <button>
          <img className="mt-[30px] pl-[20px]" src={BackButton} alt="" />
        </button>
        {/* Trading mining switch button */}

        <div className="w-[360px] mt-[35px] cursor-pointer relative mx-auto">
          <div
            onClick={TradeMine}
            className="flex flex-row h-[37px] w-[138px] text-[#afafaf] bg-white rounded-2xl mx-auto"
          >
            <div
              className={` flex items-center justify-center ${
                isSelected
                  ? "flex w-1/2 bg-grey-300 rounded-full bg-blue-500 transition-all duration-500"
                  : "flex w-1/2 bg-white rounded-full transition-all duration-500"
              }`}
            >
              Trading
            </div>

            <div
              onClick={TradeMine}
              className={` flex items-center justify-center ${
                isSelected
                  ? "h-full w-1/2 bg-white rounded-full transition-all duration-500"
                  : "w-1/2 h-full bg-[#5B63E6] rounded-full transition-all duration-500  "
              }`}
            >
              Mining
            </div>
          </div>
        </div>
      </div>
      {/* Hero */}
      <div className="relative h-[180px] w-[317px] rounded-[20px] bg-gradient-to-b from-purple-600 via-purple-700 to-blue-900 mx-auto">
        <img className="absolute right-0 h-3/4 w-2/3" src={HeroBg} alt="" />
        <div className="mx-auto w-2/3vv flex items-center align-middle justify-center h-full">
          {walletBalance.map((items) => {
            const { id, balance, walletType } = items
            return (
              <div className="flex flex-col mx-auto text-[#f4f8ff]" key={id}>
                <p className="h-[35px] w-[153px] text-xl font-extrabold leading-[35px] ">
                  {balance}
                </p>
                <p className="text-[16px]">{walletType}</p>
              </div>
            )
          })}
        </div>
        <button className="absolute bottom-4 right-4 h-[36px] w-[83px] rounded-[30px] bg-white text-[#5b63e6] flex justify-center align-center items-center ">
          Transfer
        </button>
      </div>
      {/* Upcoming payment time */}
      <div className="flex flex-col items-center justify-center my-[14px] bg-white rounded-[10px] w-[323px] h-[65px] mx-auto ">
        {HomeData.map((time) => {
          const { upComingPayTime } = time
          return (
            <p className="text-[20px] font-bold ">
              {upComingPayTime} <br />
              <p className="text-[15px] text-[#303c5b] w-full flex items-center justify-center align-middle mx-auto font-normal text-[v#9192a1]">
                Upcoming payment
              </p>
            </p>
          )
        })}
      </div>

      {/* Calender */}
      <Calender />
      <History />
    </section>
  )
}

export default MiningWallet
