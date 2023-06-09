import { useState } from "react"
import { Link } from "react-router-dom"

//import icons
import DownArrow from "../assets/DownGreyArrow.png"
import BackButton from "../assets/BackButton.svg"
import WhiteCap from "../assets/WhiteCap.png"
import BgImg from "../assets/HomeBgVectors/HeaderBg.png"

// import data
import { computerList, QualityList } from "../data"

const Upgrade = () => {
  const [isCompOpen, setIsCompOpen] = useState(false)
  const [isQualistOpen, setIsQualistOpen] = useState(false)

  return (
    <section className="mx-auto sm:w-full w-[360px] h-[800px]">
      {/* the div with the background */}
      <div className="bg-[#492FA4] text-white flex flex-col w-full pb-[23px] relative">
        <img
          className="absolute top-0 right-0 w-[230px] h-[198px]"
          src={BgImg}
          alt=""
        />
        <Link to={"/home"}>
          <div className="flex flex-row  justify-between align-middle items-center">
            <img className="pt-[50px] ml-[16px]" src={BackButton} alt="" />
            <p className="pt-[50px] text-[16px] mx-[auto] ml-[122px] ">
              Upgrade
            </p>
          </div>
        </Link>
        <div className="flex flex-col ml-[33px] pl-0 mt-[25px]">
          <p className="font-semibold text-[25px] leading-[35px]">72.40 th/s</p>
          <p className="text-[16px] leading-[22px]">Current processing power</p>
        </div>
      </div>
      {/* Where the white starts */}
      <div className="bg-[#492FA4]">
        <div className="bg-white border-t flex flex-col w-full rounded-t-[50px] ">
          <div className=" flex flex-col items-center ">
            <img
              className="mt-[10px] mb-[10px] h-[4px] w-[53px]"
              src={WhiteCap}
              alt=""
            />

            <p className="w-[323px] h-[60px] text-center text-[14px] text-[#6f6e7c] px-1">
              Please select the computer you would like to upgrade & add to your
              exsisting processing power
            </p>
          </div>
          {/* Select computer dropdown */}
          <div className="flex flex-col mt-[19px] pl-[15px]">
            <p className="mt-[19px] text-[15px] text-[#9192a1] ">
              {" "}
              Select computer{" "}
            </p>
            <button className="relative flex flex-col  border-[1px] rounded-[28px] h-[50px] w-[330px]">
              <div className="">
                <button
                  className="absolute top-[43.12%] left-[86.39%]"
                  onClick={() => setIsCompOpen(!isCompOpen)}
                >
                  <img src={DownArrow} alt="" />
                </button>

                {isCompOpen && (
                  <div className="absolute z-50 w-full mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100  ">
                    {computerList.map((links) => {
                      const { id, url, text } = links
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
            </button>
            {/* Quality dropdown */}
            <p className="mt-[19px] text-[15px] text-[#9192a1]">
              Select Quality
            </p>
            <div className="relative flex flex-col  border-[1px] rounded-[28px] h-[50px] w-[330px]">
              <button
                className="absolute top-[43.12%] left-[86.39%]"
                onClick={() => setIsQualistOpen(!isQualistOpen)}
              >
                <img src={DownArrow} alt="" />
              </button>
              {isQualistOpen && (
                <div className="absolute z-50 w-full mt-[34px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 ">
                  {QualityList.map((link) => {
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
            {/* Outputs */}

            <section>
              {/* Current Processing Power  */}
              <div>
                <p className="text-[#9192a1] text-[15px] mt-[15px] ">
                  Current processing power
                </p>
                <div className="relative flex flex-col  border-[1px] rounded-[28px] h-[50px] justify-center width-[330px]">
                  <p className="ml-[20px]">109.98 th/s</p>
                </div>
              </div>
              {/* Total processing power after after upgrade  */}
              <div>
                <p className="text-[#9192a1] text-[15px] mt-[15px]">
                  Total processing power after after upgrade
                </p>
                <div className="relative flex flex-col  border-[1px] rounded-[28px] h-[50px] justify-center w-[330px]">
                  <p className="ml-[20px]">109.98 th/s</p>
                </div>
              </div>
              {/* Est earning daily after upgrade  */}
              <div>
                <p className="text-[#9192a1] text-[15px] mt-[15px]">
                  Est earning daily after upgrade
                </p>
                <div className="relative flex flex-col  border-[1px] rounded-[28px] h-[50px] justify-center w-[330px]">
                  <p className="ml-[20px]">$45</p>
                </div>
              </div>
              <Link>
                <button className="relative flex flex-col  border-[1px] rounded-[28px] h-[61px] mt-[9px] w-[330px] justify-center items-center bg-[#5B63E6] text-white">
                  <p>Upgrade now</p>
                </button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Upgrade
