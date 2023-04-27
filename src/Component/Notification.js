import React from "react"

// import Icons

import NotificationIcon from "../assets/WhiteNoficationIcon.png"
import BackButton from "../assets/BackButton.svg"
import ButtomLine from "../assets/ButtomLine.png"

// import NotificationsData

import { notificationData } from "../data"

const Notification = () => {
  return (
    <section className="flex flex-col mx-auto h-screen w-[360px] bg-[#f8f7fe] relative  ">
      <div className="flex flex-row justify-between px-[10px] mb-[18px] mt-[23px]">
        <img src={BackButton} alt="" />
        <p className="text-[#303c5b] font-semibold">Notification</p>
        <button className="text-[#515b7d] font-semibold">Clear</button>
      </div>
      <div className=" mx-auto h-max w-max rounded-[10px]">
        {notificationData.map((notifBubble) => {
          const { id, heading, text, time } = notifBubble
          return (
            <div
              className="flex w-[330px] h-[143px] flex-col mx-auto mb-[10px] rounded-[10px] bg-white pl-[15px]"
              key={id}
            >
              <div className="flex flex-row mt-[16px]">
                <button className="w-[42px] h-[26.06px] flex items-center rounded-[22px] justify-center align-middle bg-[#5b63e6]">
                  <img
                    className="w-[12.18px] text-white h-[13.44px]"
                    src={NotificationIcon}
                    alt=""
                  />
                </button>
                <p className="ml-[10px] text-[#303c5b] font-semibold">
                  {heading}
                </p>
              </div>
              <p className="text-[#9d9ca8] mt-[12px]">{text}</p>
              <p className="mt-[6px] h-[24px] w-[69px] flex items-center justify-center align-middle text-[#5b63e6] text-[14px] rounded-[12px] bg-[#eaebfc]">
                {time}
              </p>
            </div>
          )
        })}
      </div>
      <div className="w-max mx-auto mb-[20px]">
        <img src={ButtomLine} alt="" />
      </div>
    </section>
  )
}

export default Notification
