import React, { useState } from "react"

// import SVGs
import DrawerOpener from "../assets/DrawerOpener.svg"
import AddressIcon from "../assets/AddressIcon.svg"

// Import data
import { QRDetails } from "../data"

const ShareQRcode = () => {
  const [qrPopUp, setQrPopUp] = useState(false)

  const handleClick = () => {
    setQrPopUp(!qrPopUp)
  }

  return (
    <section className="flex w-[591px] mx-auto items-center justify-center h-[391px] overflow-auto">
      <div
        className={`${
          qrPopUp
            ? "w-[360px] h-[391px] items-center fixed bottom-0 rounded-t-[44px] bg-[#492FA4]"
            : "hidden"
        }  `}
      >
        <div
          onClick={handleClick}
          className="w-full mt-[10px] flex justify-center items-center hover:cursor-pointer "
        >
          <img src={DrawerOpener} alt="" />
        </div>
        {qrPopUp && (
          <div>
            <div className="text-white flex flex-col justify-center items-center mx-auto rounded-[20px] w-[334.58px] h-full relative ">
              {QRDetails.map((item) => {
                const { id, qrImage, qrAddress } = item
                return (
                  <div
                    className="flex flex-col w-[334px] text-center align-top items-center h-full justify-center"
                    key={id}
                  >
                    <h4 className="text-[20px] font-semibold py-3">
                      Share your QR to recieve
                    </h4>
                    <div className="w-[171px] h-[125px] rounded-[20px] flex justify-center align-middle items-center bg-[#5B3ECB]">
                      <img src={qrImage} alt="" />
                    </div>
                    <p className="font-light mt-[35px] text-[15px] text-[#F4F8FB]">
                      {" "}
                      Copy the address below{" "}
                    </p>
                    <div className="flex flex-row">
                      <img
                        className="mr-[8px] text-[15px] leading-[15px] "
                        src={AddressIcon}
                        alt=""
                      />
                      <p>{qrAddress}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ShareQRcode
