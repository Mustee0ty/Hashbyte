import { useState } from "react"
import { Link } from "react-router-dom"

// import icons
import BackButton from "../assets/BackButton.svg"
import RightArrowButton from "../assets/RightArrowButton.png"

// import components
import Nav from "../Component/Nav.js"
import History from "../Component/History.js"

// import Data
import { ActivitiesNav } from "../data"

const Activity = () => {
  return (
    <section className="mx-auto w-[360px] bg-gray-100 flex flex-col">
      {/* header */}
      <div className="flex flex-row mt-[23px] mb-[20px] ">
        <img className="ml-[19px]" src={BackButton} alt="" />
        <p className="text-black ml-[118px] ">Activities</p>
      </div>
      {/* The Nav */}
      <nav className="flex flex-row justify-between font-semibold w-[325px] mx-auto mb-[27px] ">
        <div className="flex flex-row">
          {ActivitiesNav.map((timeRange) => {
            const { id, text, url } = timeRange
            return (
              <div key={id} className="flex flex-row mr-[10px]">
                <Link to={url}>
                  <p className="text-[#6f6e7c] text-[15px]">{text}</p>
                </Link>
              </div>
            )
          })}
        </div>
        <div className="flex flex-row text-[#5b63e6] items-center justify-center align-middle">
          <p className="mr-[10px]"> 20july-27thjuly, 2022</p>
          <img className="h-[7px] w-[9px] " src={RightArrowButton} alt="" />
        </div>
      </nav>
      {/* The graph */}
      <div className="flex flex-col bg-white rounded-[10px] mx-auto w-[330px] h-[266px]"></div>
      <div>
        <History />
      </div>
      <div className="absotule bottom-0 fixed">
        <Nav />
      </div>
    </section>
  )
}

export default Activity
