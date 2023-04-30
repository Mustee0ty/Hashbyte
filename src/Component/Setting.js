import React, { useState } from "react"
import { Profileinfo, SettingsList } from "../data"
import { Link } from "react-router-dom"

//import components
import Switcher from "../Component/Switcher"

//import icons
import BackButton from "../assets/BackButton.svg"

const Setting = () => {
  const [closeIt, setCloseIt] = useState(false)

  const handleCloseIt = () => {
    setCloseIt(!closeIt)
  }

  return (
    <section
      className={`${
        closeIt
          ? "hidden"
          : "bg-white w-[295px] h-screen flex flex-col rounded-md shadow-2xl mx-auto absolute z-0"
      }`}
    >
      <div className="h-[70px] pl-[20px] border-b">
        <Link to={"/home"}>
          {" "}
          <img
            onClick={handleCloseIt}
            className="fill-[#908DA0] my-[32px] left-[20px] cursor-pointer"
            src={BackButton}
            alt=""
          />
        </Link>
      </div>
      <div className="pt-[21px] flex flex-col">
        {
          // Profile info section
          Profileinfo.map((info) => {
            const { id, name, email, profilepic } = info
            return (
              <div key={id} className="ml-[20px]">
                <img
                  className="h-[54px] w-[54px] top-[91px] rounded-full"
                  src={profilepic}
                  alt=""
                />
                <h4 className="ml-[2px] mt-[16.6px] text-[20px] font-bold">
                  {name}
                </h4>
                <p className="font-[15px] text-[#9D9CA8]">{email}</p>
              </div>
            )
          })
        }
        <div className="flex flex-row font-[15px] pt-[13px] ml-[20px] text-[#5B63E6]">
          <button>Edit</button>
          <button className="ml-5 top-[162px]">Change Password</button>
        </div>

        {/* Remaining List items */}
        <div className="ml-4 mt-[25px]">
          {SettingsList.map((listItems) => {
            const {
              id,
              heading,
              icon1,
              icon2,
              icon3,
              text1,
              text2,
              text3,
              switch1,
              switch2,
              switch3,
              Languages,
              Currency,
              Lang,
              Curr,
              url,
            } = listItems
            return (
              <div
                key={id}
                className=" items-center justify-center align-middle"
              >
                <h3 className="font-semibold text-lg text-[20px]">{heading}</h3>
                <div className="h-full items-center justify-center ">
                  <div className="flex flex-row h-[50px] rounded-md justify-start items-center ">
                    <img className="h-[20px] w-[20px]" src={icon1} alt="" />
                    <p className="ml-[19.47px] text-sm font-sm ">{text1}</p>
                    {(switch1 && (
                      <div className="w-[36px] h-[21px] justify-end">
                        <Switcher />
                      </div>
                    )) ||
                      (Languages && <img src={Lang} alt="" />)}
                  </div>
                  <div className="flex flex-row h-[50px] rounded-md justify-start items-center">
                    <img className="h-[20px] w-[20px]" src={icon2} alt="" />
                    <p className="ml-[19.47px] text-sm font-normal">{text2}</p>
                    {(switch2 && (
                      <div className="w-[36px] h-[21px] justify-end">
                        <Switcher />
                      </div>
                    )) ||
                      (Currency && (
                        <img className="h-[20px] w-[20px]" src={Curr} alt="" />
                      ))}
                  </div>
                  <div className="flex flex-row h-[50px] rounded-md justify-start items-center">
                    <img className="h-[20px] w-[20px]" src={icon3} alt="" />
                    <p className="ml-[19.47px] text-sm font-normal">{text3}</p>
                    {(switch3 && (
                      <div className="w-10 h-10 bg-slate-500 items-end ">
                        <Switcher />
                      </div>
                    )) ||
                      (Languages && (
                        <img className="h-[20px] w-[20px]" src={Lang} alt="" />
                      )) ||
                      (Currency && (
                        <img className="h-[20px] w-[20px]" src={Curr} alt="" />
                      ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Setting
