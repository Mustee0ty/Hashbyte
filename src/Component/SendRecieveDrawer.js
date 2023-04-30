import React, { useState } from "react"
import DownArrow from "../assets/DownArrow.svg"
import UpArrow from "../assets/upArrow.png"
import DrawerOpener from "../assets/DrawerOpener.svg"
import AddressIcon from "../assets/AddressIcon.svg"

//import Data
import { SendRecievePopUp, OtherWallets, QRDetails } from "../data"

const ExpandableMenu = () => {
  const [expanded, setExpanded] = useState(false)
  const [openRecieve, setOpenRecieve] = useState(false)
  const [qrPopUp, setQrPopUp] = useState(true)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleClick = () => {
    setQrPopUp(!qrPopUp)
  }

  return (
    <section className="flex container w-full items-center justify-center h-[819px]">
      <div
        className={`${
          expanded
            ? "w-[360px] h-[591px] items-center fixed bottom-0 rounded-t-[44px] bg-[#492FA4]"
            : "w-[360px] h-[100px] items-center fixed bottom-0 rounded-t-[44px] bg-[#492FA4]"
        }  `}
      >
        <div
          onClick={handleExpandClick}
          className="w-full my-[10px] flex justify-center items-center hover:cursor-pointer "
        >
          <img src={DrawerOpener} alt="" />
        </div>
        <div className="flex flex-row absolute top-[35px]">
          <button
            onClick={handleClick}
            className="flex flex-row justify-center items-center ml-[30.42px] h-[45px] w-[147.01px] bg-[#DEDEDE] rounded-full"
          >
            <img src={DownArrow} alt="" />
            <p className="text-[#4c53e8] ml-[12px]">Recieve</p>
          </button>
          <button
            onClick={handleExpandClick}
            className="flex flex-row justify-center items-center ml-[10.14px] h-[45px] w-[147.01px] bg-[#5B63E6] rounded-full"
          >
            <img src={UpArrow} alt="" />
            <p className="text-white ml-[12px]">Send</p>
          </button>
        </div>
        {expanded && (
          <div>
            <div className="text-white flex flex-col justify-center items-center mt-[101px] mr-[15.21px] ml-[13px] rounded-[20px] w-[334.58px] h-[161px] bg-[#5B3ECB] relative ">
              {SendRecievePopUp.map((item) => {
                const { id, amount, text } = item
                return (
                  <div
                    className="flex flex-col w-[334px] h-[161px] relative justify-center pl-[20.28px]"
                    key={id}
                  >
                    <p className="font-normal text-[#F4F8FF] text-[16px] ">
                      {amount}
                    </p>
                    <p className="font-light text-[15px] text-white">{text}</p>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between pt-[19px] px-4 mb-[10px] text-white">
                <h4>Other wallets</h4>
                <p>+Add</p>
              </div>
              <div className="flex flex-row items-center align-middle justify-between">
                {OtherWallets.map((wallet) => {
                  const { id, amount, acctInfo, background, icon } = wallet
                  return (
                    <div
                      className="mx-[15.21px] w-[157.15px] h-[168px] flex justify-center items-center text-center align-middle text-white rounded-[15px]"
                      key={id}
                    >
                      <div className={background}>
                        <img className="mx-auto" src={icon} alt="" />
                        <p className="">{amount}</p>
                        <p className="font-extralight text-[#F4F8FB] inline-block">
                          Available Balance
                        </p>
                        <p className="">{acctInfo}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ExpandableMenu
