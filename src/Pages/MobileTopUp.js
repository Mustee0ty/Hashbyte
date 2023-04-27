import React from "react";
import Container from "../Component/Container";
import BackButton from "../assets/BackButton.svg";
import { FiSearch } from "react-icons/fi";
import { MdOutlineContactPage } from "react-icons/md";

const MobileTopUp = () => {
  return (
    <Container>
      <div>
        <div>{/* vector */}</div>
        <div className="mt-[30px] flex gap-[103px]">
          <button>
            <img src={BackButton} alt="" />
          </button>
          <p className="text-[16px] font-bold leading-[35px]">Mobile top-up</p>
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
      <div>
        <p className="text-[#9192A1] mt-[22px] text-[15px] font-normal">
          Select network serive provider
        </p>
        <div className="flex mt-[11px] gap-[8px]">
          <div className="h-[73px] w-[74px] flex items-center justify-center rounded-[10px] bg-[#FFFF00]">
            <p className="font-bold text-[16px] text-[#000000]">MTN</p>
          </div>
          <div className="h-[73px] w-[74px] flex items-center justify-center rounded-[10px] bg-[#FF0000]">
            <p className="font-bold text-[16px] text-white">Airtel</p>
          </div>
          <div className="h-[73px] w-[74px] flex items-center justify-center rounded-[10px] bg-[#65CA65]">
            <p className="font-bold text-[16px] text-white">GLO</p>
          </div>
          <div className="h-[73px] w-[74px] flex items-center justify-center rounded-[10px] bg-[#635757]">
            <p className="font-bold text-[16px] text-[#FFFF00]">9MOBILE</p>
          </div>
        </div>
        <div className="mt-[15px]">
          <p className="text-[15px] font-normal mb-[2px] text-[#9192A1]">
            Mobile number
          </p>
          <div className="w-[316px] flex items-center justify-center h-[50px] rounded-[28px] border-[1px] border-[#E7E7E7]">
            <div>
              <input
                className="w-[250px] mr-3 active:border-none bg-transparent outline-none h-[30px]"
                type="text"
              />
              <button>
                <MdOutlineContactPage className="text-[16px] text-[#908DA0]" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#9192A1] mt-[15px] mb-[2px] text-[15px] font-normal">
            Select amount
          </p>
          <div className="flex mb-[30px] gap-[8px]">
            <div className="w-[74px] h-[57px] rounded-[7px] flex items-center justify-center bg-[#5B63E6]">
              <p className="text-[15px] font-bold text-white">$20</p>
            </div>
            <div className="w-[74px] h-[57px] rounded-[7px] bg-white flex items-center border-[1px] border-[#E7E7E7] justify-center ">
              <p className="text-[15px] font-bold">$20</p>
            </div>
            <div className="w-[74px] h-[57px] rounded-[7px] bg-white flex items-center border-[1px] border-[#E7E7E7] justify-center ">
              <p className="text-[15px] font-bold">$20</p>
            </div>
            <div className="w-[74px] h-[57px] rounded-[7px] bg-white flex items-center border-[1px] border-[#E7E7E7] justify-center ">
              <p className="text-[15px] font-bold">$20</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[15px] font-normal text-[#9192A1] mb-[2px]">
            Enter amount
          </p>
          <div className="w-[316px] flex items-center justify-center h-[50px] rounded-[28px] border-[1px] border-[#E7E7E7]">
            <div>
              <input
                className="w-[250px] mr-3 active:border-none bg-transparent outline-none h-[30px]"
                type="text"
              />
            </div>
          </div>
        </div>
        <button className="w-[316px] h-[50px] text-center mt-[16px] rounded-[30.5px] text-[16px] font-bold text-white leading-[16px] bg-[#5B63E6] border-[1px] border-[#E7E7E7]">
          Confirm
        </button>
      </div>
    </Container>
  );
};

export default MobileTopUp;
