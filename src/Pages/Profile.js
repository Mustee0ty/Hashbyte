import React from "react"
import { Link } from "react-router-dom"

// import data
import { Profileinfo, SettingsList } from "../data"

//import icons
import BackButton from "../assets/BackButton.svg"
import ThumbPrint from "../assets/ThumbPrinticon.svg"
import NotificationIcom from "../assets/NotificationIcon.svg"
import LogOut from "../assets/LogOut.png"

// import image
import HeroBg from "../assets/HomeBgVectors/HeaderBg.png"

// import component
import Switcher from "../Component/Switcher"
import Nav from "../Component/Nav"

const Profile = () => {
  return (
    <section className="w-[360px] sm:w-full h-screen bg-white mx-auto">
      {Profileinfo.map((person) => {
        const {
          id,
          name,
          email,
          profilepic,
          memberShip,
          withdrawn,
          dailyIncome,
        } = person
        return (
          <div className="flex flex-col">
            <div className="flex flex-col relative bg-gradient-to-b from-purple-900 via-purple-700 to-blue-900">
              <img
                className="absolute w-[248px]  right-0 bg"
                src={HeroBg}
                alt=""
              />
              {/* Backbutton and Heading */}
              <div className="flex flex-row mt-[23px] ">
                <img className="ml-[19px]" src={BackButton} alt="" />
                <p className="text-white ml-[131px] ">Profile</p>
              </div>
              <div className=" flex flex-row mt-[45px] items-center justify-center align-middle text-white mb-[33px]">
                <img
                  className="rounded-full h-[50px] w-[50px] mr-[13px]"
                  src={profilepic}
                  alt=""
                />
                <div className="flex flex-col">
                  <p>{name}</p>
                  <p className="text-[#f4f8fb]">Member since {memberShip}</p>
                </div>
              </div>
            </div>
            {/* White Section */}
            <div className="flex flex-col bg-white ">
              <p className="text-[#6F6E7C] flex items-center justify-center align-middle text-center py-[10px]">
                Your total number of machine, equates the hashrate and earning
                power you process
              </p>
              {/* Balacces */}
              <div className="flex flex-row justify-center items-center mx-auto align-middle gap-x-[12px] ">
                <div className="w-[159px] h-[81px] rounded-[10px] shadow-lg border-[1px] border-[#5b63e6] flex bg-white flex-col  justify-center ">
                  <p className="text-[20px] font-bold ml-[14px] text-[#5b63e6]">
                    {withdrawn} <br />{" "}
                    <p className="text-[15px] font-normal text-[#9D9CA8]">
                      Withdrawn
                    </p>{" "}
                  </p>
                </div>
                <div className="w-[159px] h-[81px] rounded-[10px] border-[1px] shadow-lg border-[#5b63e6] bg-white flex flex-col  justify-center">
                  <p className="text-[20px] font-bold ml-[14px] text-[#5b63e6]">
                    {dailyIncome} <br />{" "}
                    <p className="text-[15px] font-normal text-[#9D9CA8]">
                      Daily income
                    </p>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      {/* Setting Options */}
      <div className="flex flex-col mt-[50px] align-middle items-center justify-center bg-white ">
        <div className="flex flex-row items-center align-middle justify-apart w-full">
          <img className="ml-[16px]" src={ThumbPrint} alt="" />
          <p className="ml-[18px]">Login with thumbprint</p>
          <div className="ml-[65px]">
            <Switcher />
          </div>
        </div>
        <div className="flex flex-row items-center align-middle justify-apart w-full">
          <img className="ml-[16px]" src={NotificationIcom} alt="" />
          <p className="ml-[18px]">Notification</p>
          <div className="ml-[65px] justify-end place-items-end ">
            <Switcher />
          </div>
        </div>
        <Link to={"/login"}>
          <div className="flex flex-row cursor-pointer h-[57px] rounded-[10px] w-[330px] mt-[33px] shadow-md hover:shadow-lg  bg-white align-middle items-center mx-[30px]">
            <img className="h-[18px] w-[18px] ml-[5px]" src={LogOut} alt="" />
            <p className="ml-[10px]">Logout</p>
          </div>
        </Link>
      </div>
      <Nav />
    </section>
  )
}

export default Profile
