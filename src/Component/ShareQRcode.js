import React, { useState } from 'react';

// import SVGs
import DrawerOpener from '../assets/DrawerOpener.svg'
import AddressIcon from '../assets/AddressIcon.svg'

// Import data
import { QRDetails } from '../data';

const ShareQRcode = () => {


  const [ qrPopUp,setQrPopUp ] = useState(false);

  const handleClick = () => {
    setQrPopUp(!qrPopUp);
  }




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
              QRDetails.map((item) =>{
                const { id,qrImage,qrAddress } = item;
                return <div className='flex flex-col w-[334px] h-[161px] relative justify-center pl-[20.28px]' key={id}>
                    <h4>Share your QR to recieve</h4>
                    <div>
                      <img src={qrImage} alt="" />
                    </div>
                    <p className='font-light' > Copy the address below </p>
                    <div>
                      <img src={AddressIcon} alt="" />
                    </div>
                </div>
              })
            }
                      
            </div>
          </div>
        }
      </div>
    </section>
  )
}

export default ShareQRcode