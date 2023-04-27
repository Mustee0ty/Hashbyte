import React, { useState } from "react";
import Container from "../Component/Container";
import BackButton from "../assets/BackButton.svg";
import { FiSearch } from "react-icons/fi";
import MarketImage from "../assets/marketImage.png";
import ConfirmPurchaseOrder from "../Component/ConfirmPurchase";
import OrderSuccesfull from "../Component/OrderSuccessful";

const Profile = () => {
  const [confirmation, setConfirmation] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const hideScrollingOnOpen = () => {
    document.body.style.overflowY = "hidden";
  };
  return (
    <Container>
      <div>
        <div className="mt-[30px] flex gap-[131px]">
          <button>
            <img src={BackButton} alt="" />
          </button>
          <p className="text-[16px] font-bold leading-[35px]">Marketplace</p>
        </div>
      </div>
      <div className="mt-[19px]">
        <div className="w-[316px] flex items-center justify-center h-[50px] rounded-[28px] border-[1px] border-[#E7E7E7]">
          <div>
            <input
              className="w-[250px] mr-3 active:border-none bg-transparent outline-none h-[30px]"
              type="text"
              placeholder="Search"
            />
            <button>
              <FiSearch className="text-[16px] text-[#374957]" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-[28px] gap-[14px]">
        <div className="w-[153px] h-[244px] border-[1px] border-[#E7E7E7] rounded-[20px]">
          <div className="pl-[7px] relative mt-[9px] mb-[17px]">
            <div className="w-[60px] h-[19px] absolute flex items-center justify-center rounded-[9.5px] bg-[#F6465D]">
              <p className="text-white text-[12px] font-extralight">20 Sold</p>
            </div>
            <img src={MarketImage} alt="" />
          </div>
          <div className="pl-[13px] mb-[14px]">
            <p className="text-[16px] mb-[3px] font-bold">DDR3 SDRAM</p>
            <h2 className="text-[13px] font-normal text-[#9D9CA8]">
              0.5678 BTC
            </h2>
            <h3 className="text-[14px] font-bold">$12.00</h3>
          </div>
          <div className="pl-[13px]">
            <button className="w-[89px] mb-[12px] h-[32px] flex items-center justify-center rounded-[16px] bg-[#5B63E6]">
              <p className="text-[14px] font-normal text-white">Buy Now</p>
            </button>
          </div>
        </div>
        <div className="w-[153px] h-[244px] border-[1px] border-[#E7E7E7] rounded-[20px]">
          <div className="pl-[7px] relative mt-[9px] mb-[17px]">
            <div className="w-[60px] h-[19px] absolute flex items-center justify-center rounded-[9.5px] bg-[#F6465D]">
              <p className="text-white text-[12px] font-extralight">20 Sold</p>
            </div>
            <img src={MarketImage} alt="" />
          </div>
          <div className="pl-[13px] mb-[14px]">
            <p className="text-[16px] mb-[3px] font-bold">DDR3 SDRAM</p>
            <h2 className="text-[13px] font-normal text-[#9D9CA8]">
              0.5678 BTC
            </h2>
            <h3 className="text-[14px] font-bold">$12.00</h3>
          </div>
          <div className="pl-[13px]">
            <button className="w-[89px] mb-[12px] h-[32px] flex items-center justify-center rounded-[16px] bg-[#5B63E6]">
              <p className="text-[14px] font-normal text-white">Buy Now</p>
            </button>
          </div>
        </div>
        <div className="w-[153px] h-[244px] border-[1px] border-[#E7E7E7] rounded-[20px]">
          <div className="pl-[7px] relative mt-[9px] mb-[17px]">
            <div className="w-[60px] h-[19px] absolute flex items-center justify-center rounded-[9.5px] bg-[#F6465D]">
              <p className="text-white text-[12px] font-extralight">20 Sold</p>
            </div>
            <img src={MarketImage} alt="" />
          </div>
          <div className="pl-[13px] mb-[14px]">
            <p className="text-[16px] mb-[3px] font-bold">DDR3 SDRAM</p>
            <h2 className="text-[13px] font-normal text-[#9D9CA8]">
              0.5678 BTC
            </h2>
            <h3 className="text-[14px] font-bold">$12.00</h3>
          </div>
          <div className="pl-[13px]">
            <button className="w-[89px] mb-[12px] h-[32px] flex items-center justify-center rounded-[16px] bg-[#5B63E6]">
              <p className="text-[14px] font-normal text-white">Buy Now</p>
            </button>
          </div>
        </div>
        <div className="w-[153px] h-[244px] border-[1px] border-[#E7E7E7] rounded-[20px]">
          <div className="pl-[7px] relative mt-[9px] mb-[17px]">
            <div className="w-[60px] h-[19px] absolute flex items-center justify-center rounded-[9.5px] bg-[#F6465D]">
              <p className="text-white text-[12px] font-extralight">20 Sold</p>
            </div>
            <img src={MarketImage} alt="" />
          </div>
          <div className="pl-[13px] mb-[14px]">
            <p className="text-[16px] mb-[3px] font-bold">DDR3 SDRAM</p>
            <h2 className="text-[13px] font-normal text-[#9D9CA8]">
              0.5678 BTC
            </h2>
            <h3 className="text-[14px] font-bold">$12.00</h3>
          </div>
          <div className="pl-[13px]">
            <button className="w-[89px] mb-[12px] h-[32px] flex items-center justify-center rounded-[16px] bg-[#5B63E6]">
              <p className="text-[14px] font-normal text-white">Buy Now</p>
            </button>
          </div>
        </div>
        <div className="w-[153px] h-[244px] border-[1px] border-[#E7E7E7] rounded-[20px]">
          <div className="pl-[7px] relative mt-[9px] mb-[17px]">
            <div className="w-[60px] h-[19px] absolute flex items-center justify-center rounded-[9.5px] bg-[#F6465D]">
              <p className="text-white text-[12px] font-extralight">20 Sold</p>
            </div>
            <img src={MarketImage} alt="" />
          </div>
          <div className="pl-[13px] mb-[14px]">
            <p className="text-[16px] mb-[3px] font-bold">DDR3 SDRAM</p>
            <h2 className="text-[13px] font-normal text-[#9D9CA8]">
              0.5678 BTC
            </h2>
            <h3 className="text-[14px] font-bold">$12.00</h3>
          </div>
          <div className="pl-[13px]">
            <button className="w-[89px] mb-[12px] h-[32px] flex items-center justify-center rounded-[16px] bg-[#5B63E6]">
              <p className="text-[14px] font-normal text-white">Buy Now</p>
            </button>
          </div>
        </div>
        <div className="w-[153px] h-[244px] border-[1px] border-[#E7E7E7] rounded-[20px]">
          <div className="pl-[7px] relative mt-[9px] mb-[17px]">
            <div className="w-[60px] h-[19px] absolute flex items-center justify-center rounded-[9.5px] bg-[#F6465D]">
              <p className="text-white text-[12px] font-extralight">20 Sold</p>
            </div>
            <img src={MarketImage} alt="" />
          </div>
          <div className="pl-[13px] mb-[14px]">
            <p className="text-[16px] mb-[3px] font-bold">DDR3 SDRAM</p>
            <h2 className="text-[13px] font-normal text-[#9D9CA8]">
              0.5678 BTC
            </h2>
            <h3 className="text-[14px] font-bold">$12.00</h3>
          </div>
          <div className="pl-[13px]">
            <button className="w-[89px] mb-[12px] h-[32px] flex items-center justify-center rounded-[16px] bg-[#5B63E6]">
              <p className="text-[14px] font-normal text-white">Buy Now</p>
            </button>
          </div>
        </div>
        <div className="w-[153px] h-[244px] border-[1px] border-[#E7E7E7] rounded-[20px]">
          <div className="pl-[7px] relative mt-[9px] mb-[17px]">
            <div className="w-[60px] h-[19px] absolute flex items-center justify-center rounded-[9.5px] bg-[#F6465D]">
              <p className="text-white text-[12px] font-extralight">20 Sold</p>
            </div>
            <img src={MarketImage} alt="" />
          </div>
          <div className="pl-[13px] mb-[14px]">
            <p className="text-[16px] mb-[3px] font-bold">DDR3 SDRAM</p>
            <h2 className="text-[13px] font-normal text-[#9D9CA8]">
              0.5678 BTC
            </h2>
            <h3 className="text-[14px] font-bold">$12.00</h3>
          </div>
          <div className="pl-[13px]">
            <button className="w-[89px] mb-[12px] h-[32px] flex items-center justify-center rounded-[16px] bg-[#5B63E6]">
              <p className="text-[14px] font-normal text-white">Buy Now</p>
            </button>
          </div>
        </div>
        <div className="w-[153px] h-[244px] border-[1px] border-[#E7E7E7] rounded-[20px]">
          <div className="pl-[7px] relative mt-[9px] mb-[17px]">
            <div className="w-[60px] h-[19px] absolute flex items-center justify-center rounded-[9.5px] bg-[#F6465D]">
              <p className="text-white text-[12px] font-extralight">20 Sold</p>
            </div>
            <img src={MarketImage} alt="" />
          </div>
          <div className="pl-[13px] mb-[14px]">
            <p className="text-[16px] mb-[3px] font-bold">DDR3 SDRAM</p>
            <h2 className="text-[13px] font-normal text-[#9D9CA8]">
              0.5678 BTC
            </h2>
            <h3 className="text-[14px] font-bold">$12.00</h3>
          </div>
          <div className="pl-[13px]">
            <button
              onClick={() => {
                setConfirmation(true);
                hideScrollingOnOpen();
              }}
              className="w-[89px] mb-[12px] h-[32px] flex items-center justify-center rounded-[16px] bg-[#5B63E6]"
            >
              <p className="text-[14px] font-normal text-white">Buy Now</p>
            </button>
          </div>
        </div>
      </div>
      {confirmation && (
        <div className="absolute top-[570px] left-0">
          <ConfirmPurchaseOrder
            setConfirmation={setConfirmation}
            setOrderPlaced={setOrderPlaced}
          />
        </div>
      )}
      {orderPlaced && (
        <div className="absolute top-[570px] left-0">
          <OrderSuccesfull setOrderPlaced={setOrderPlaced} />
        </div>
      )}
    </Container>
  );
};

export default Profile;
