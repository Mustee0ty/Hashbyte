import React, { useState } from 'react';

// import SVGs
import DownArrow from '../assets/DownArrow.svg'
import DrawerOpener from '../assets/DrawerOpener.svg'

// Import data
import { QRDetails } from '../data';

const [ qrPopUp,setQrPopUp ] = useState(false);

const handleClick = () => {
  setQrPopUp(!qrPopUp);
}

const ShareQRcode = () => {
  return (
    <div>
      
    </div>
  )
}

export default ShareQRcode


const ExpandableMenu = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <section className='flex container w-full items-center justify-center h-[819px]'>
      <div className={`${qrPopUp ? 'w-[360px] h-[591px] items-center fixed bottom-0 rounded-t-[44px] bg-[#492FA4]' : 'w-[360px] h-[100px] items-center fixed bottom-0 rounded-t-[44px] bg-[#492FA4]'}  `}>
        <div onClick={handleClick} className='w-full my-[10px] flex justify-center items-center hover:cursor-pointer '>
          <img src={DrawerOpener} alt="" />
        </div>
        {
          qrPopUp && 
          <div>
            <div className='text-white flex flex-col justify-center items-center mt-[101px] mr-[15.21px] ml-[13px] rounded-[20px] w-[334.58px] h-[161px] bg-[#5B3ECB] relative '>
            {
              SendRecievePopUp.map((item) =>{
                const { id,amount,text } = item;
                return <div className='flex flex-col w-[334px] h-[161px] relative justify-center pl-[20.28px]' key={id}>
                    <p className='font-normal'>{amount}</p>
                    <p className='font-light' >{text}</p>
                </div>
              })
            }
                      
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default ExpandableMenu;
