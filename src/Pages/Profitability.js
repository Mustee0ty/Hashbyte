import { useState } from "react"

// import icons
import BackButton from "../assets/BackButton.svg"
import DownArrow from "../assets/DownGreyArrow.png"

// import Components
import Nav from "../Component/Nav.js"

// import data
import { CurrencyList, Elcost, DeviceList } from "../data"

const Profitability = () => {
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
  const [isElcost, setIsELcost] = useState(false)
  const [isDevice, setIsDevice] = useState(false)

  return (
    <section className="flex flex-col mx-auto w-[360px] h-full bg-[#f8f7fe] ">
      <div className="flex flex-row px-[10px] mb-[18px] mt-[23px]">
        <img src={BackButton} alt="" />
        <p className="ml-[112px] text-[#303c5b] font-semibold">Profitability</p>
      </div>
      {/* Currency dropdown */}
      <section className="bg-white rounded-[10px] flex flex-col mx-auto w-[330px] h-[462px] px-[18px] py-[17px]">
        <p className="text-[#9192a1] mb-[5px]">Currency</p>
        <div className="relative flex flex-col  border-[1px] rounded-[28px] h-[50px] w-[294px] mb-[12px]">
          <button
            className="absolute top-[43.12%] left-[86.39%]"
            onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
          >
            <img src={DownArrow} alt="" />
          </button>
          {isCurrencyOpen && (
            <div className="absolute z-50 w-full mt-[34px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 ">
              {CurrencyList.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href={url}
                    >
                      {text}
                    </a>
                  </li>
                )
              })}
            </div>
          )}
        </div>

        {/* Select ELcost */}
        <p className="text-[#9192a1] mb-[5px]">EL.cost</p>
        <div className="relative flex flex-col  border-[1px] rounded-[28px] h-[50px] w-[294px] mb-[12px]">
          <button
            className="absolute top-[43.12%] left-[86.39%]"
            onClick={() => setIsELcost(!isElcost)}
          >
            <img src={DownArrow} alt="" />
          </button>
          {isElcost && (
            <div className="absolute z-50 w-full mt-[34px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 ">
              {Elcost.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href={url}
                    >
                      {text}
                    </a>
                  </li>
                )
              })}
            </div>
          )}
        </div>

        {/* Select Devices */}
        <p className="text-[#9192a1] mb-[5px]">Device</p>
        <div className="relative flex flex-col  border-[1px] rounded-[28px] h-[50px] w-[294px] mb-[12px] ">
          <button
            className="absolute top-[43.12%] left-[86.39%]"
            onClick={() => setIsDevice(!isDevice)}
          >
            <img src={DownArrow} alt="" />
          </button>
          {isDevice && (
            <div className="absolute z-50 w-full mt-[34px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 ">
              {DeviceList.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href={url}
                    >
                      {text}
                    </a>
                  </li>
                )
              })}
            </div>
          )}
        </div>

        {/* Device Counter */}
        <div className="flex flex-col">
          <p className="text-[#9192a1]">Number of devices </p>
          <div className="flex flex-row justify-between  ">
            <div className="flex flex-row w-[115px] h-[34px] rounded-[17px] border-[1px] border-[#e7e7e7]">
              Plus and minus
            </div>
            <button className="text-[#5b63e6]">+Add</button>
          </div>
        </div>

        {/* Calculate Button */}
        <button className="flex justify-center align-middle items-center mt-[43px] text-white w-[294px] h-[61px] bg-[#5b63e6] rounded-[30.5px] ">
          Calculate
        </button>
      </section>
      <Nav />
    </section>
  )
}

export default Profitability
