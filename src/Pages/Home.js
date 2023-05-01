import React, { useState } from "react"
import { Link } from "react-router-dom"
import { HomeData, cryptoSlides, GraphData } from "../data.js"

//import Line for crypto chart
// import {
//     Chart as ChartJs,
//     LineElement,
//     CategoryScale,
//     LinearScale,
//     PointElement
// } from 'chart.js';

import { Line } from "react-chartjs-2"

//import components
import Nav from "../Component/Nav.js"
import Setting from "../Component/Setting.js"

// import assets
import Logo2 from "../assets/logo.png"
import MoneyBag from "../assets/moneybag.png"
import BitcoinLogo from "../assets/BitcoinLogo.png"
import BNBLogo from "../assets/BNBLogo.png"
import Notification from "../assets/Notification.png"
import NavHome from "../assets/NavHome.png"
import NavPerc from "../assets/NavPercntLogo.png"
import WalletLogo from "../assets/WalletLogo.png"
import SignalLogo from "../assets/SignalLogo.png"
import ExchangeLogo from "../assets/ExchangeLogo.png"
import ProfilePic from "../assets/profilepic.png"
import NotificationDot from "../assets/NotificationDot.svg"
import BgImg from "../assets/HomeBgVectors/HeaderBg.png"
// import HeaderBg from '../assets/HomeBgVectors/HeaderBg.png'

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement
// )

const Home = () => {
  const [showSettings, setShowsettings] = useState(false)

  const handleImageClick = () => {
    setShowsettings(true)
  }

  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // }

  return (
    <section className="flex items-center justify-center mx-auto h-max sm:w-full max-w-screen-sm w-full">
      {HomeData.map((items) => {
        const {
          id,
          processingPower,
          activeComputers,
          inactiveComputers,
          upComingPayTime,
          maintenanceFees,
          bitcoinAmount,
          bnbAmount,
          rate,
          estWeeklyIncome,
          estMonthlyIncome,
          estYearlyIncome,
        } = items
        return (
          <section className="w-screen mx-auto h-full relative">
            {/* Settings */}
            <div
              className={`${
                showSettings ? "block" : "hidden"
              } z-50 fixed top-0`}
            >
              <Setting props={handleImageClick} />
            </div>
            <header className="h-[471px] w-screen bg-transparent bg-gradient-to-r from-purple-800 via-purple-900 to-blue-900 flex flex-col text-white relative ">
              <img className="absolute top-0" src={BgImg} alt="" />
              <button
                onClick={handleImageClick}
                className="flex flex-row cursor-pointer  justify-between px-[15px] mb-[23px] pt-4 z-40"
              >
                <img
                  className="rounded-full cursor-pointer z-10"
                  src={ProfilePic}
                  alt=""
                />
                <p className="text-white">Good Morning</p>
                <Link to={"/notification"}>
                  <div className="bg-">
                    <img className="relative" src={Notification} alt="" />
                    <img
                      className="absolute top-3.5 right-4"
                      src={NotificationDot}
                      alt=""
                    />
                  </div>
                </Link>
              </button>
              <div className="flex flex-col items-center mb-[26px] ">
                <h3 className="text-[#F4F8FF] leading-[50px] text-[40px]">
                  {items.processingPower}th/s
                </h3>
                <p className="font-raleway">Your processing power</p>
              </div>
              <div className="flex flex-row justify-between px-[17px]">
                <div className="flex flex-row w-[159px] h-[75px] rounded-[13px] bg-[#5B63E6] ">
                  <div className="flex-1 flex-col">
                    <button className="bg-[#1FB86E] h-[22px] w-[66px] mt-[16px] mb-[3px] ml-[10px] rounded-[5px]">
                      <p className="h-[13px] w-[42px] flex items-center justify-center ml-3">
                        Active
                      </p>
                    </button>
                    <p className="ml-[10px]">Computers</p>
                  </div>
                  <div className="mt-[26px] mr-[12px]">
                    <p>{activeComputers}</p>
                  </div>
                </div>
                <div className="flex flex-2">
                  <div className="flex flex-row w-[159px] h-[75px] rounded-[13px] bg-[#5B63E6]">
                    <div className="flex-1 flex-col">
                      <button className="bg-[#FF4040] h-[22px] w-[66px] mt-[16px] mb-[3px] ml-[10px] rounded-[5px]">
                        <p className="h-[13px] w-[42px] flex items-center justify-center ml-3">
                          Inactive
                        </p>
                      </button>
                      <p className="ml-[10px]">Computers</p>
                    </div>
                    <div className="mt-[26px] mr-[12px]">
                      <p>{inactiveComputers}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* White Section */}
              <div className="bg-white mx-auto rounded-t-[55px] flex flex-col h-full w-full mt-[50px] relative">
                {/* Upgrade now */}
                <Link to={"/upgrade"}>
                  <button className="h-[54px] w-[212px] rounded-[27px] bg-[#FF9839] flex flex-row justify-center mx-[74px] top-[-27px] absolute z-10 ">
                    <img className="my-auto" src={MoneyBag} alt="" />
                    <p className="my-auto mx-[10px] text-white">Upgrade Now</p>
                  </button>
                </Link>
                <div className="mx-auto flex flex-col justify-center items-center mt-[51px]">
                  <p className="text-[20px] font-semibold leading-[20px]">
                    {upComingPayTime}
                  </p>
                  <p className="text-[#9192A1] text-[15px] mt-[7px]">
                    Upcoming payment
                  </p>
                </div>
                <div className="relative w-[330px] h-[53px] flex justify-center items-center align-middle border-[#F1F1F1] border-2 rounded-[10px] mt-[10px] mx-auto">
                  <input
                    className="block w-full py-2 pl-3 pr-10 placeholder-[#9192A1] border-gray-300 rounded-md focus:outline-none sm:text-sm"
                    type="text"
                    placeholder="Maintenance Fee"
                    aria-label="Placeholder 1"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500 text-sm mr-2"></span>
                    <span className="text-black font-semibold text-lg">
                      {maintenanceFees}
                    </span>
                  </span>
                </div>
                <div className="w-full h-[65px] flex flex-row">
                  {cryptoSlides.map((item) => {
                    return (
                      <button
                        key={item.id}
                        className="bg-white h-[65px] w-[146px] rounded-[10px]"
                      >
                        <div className="flex flex-row">
                          <img
                            className="h-[28px] flex items-center align-middle w-[28px]"
                            src={item.logo}
                            alt=""
                          />
                          <div className="flex flex-col h-[38px] w-[86px] ">
                            <p>{item.cryptoCurrency}</p>
                            <p>{item.amount}</p>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
                {/* <div className="w-[340px] h-[130px]">
                  <Line data={GraphData} options={options} />
                </div> */}
              </div>
            </header>
            <div className="bottom-0 fixed">
              <Nav />
            </div>
          </section>
        )
      })}
    </section>
  )
}

export default Home
