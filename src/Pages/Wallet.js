import React, { useState } from 'react'

// import Components 
import SendRecieveDrawer from '../Component/SendRecieveDrawer';

const Wallet = () => {

  const [ isSelected,setIsSelected ] = useState(false);

  const TradeMine = () => {
    setIsSelected(!isSelected)
  };

  return (
    <section className='container mx-auto h-[800px] w-[360px]' >
       {/* Trading mining switch button */}
       <div className=''>
       <div onClick={TradeMine} className='flex flex-row h-[37px] w-[138px] text-white bg-gray-200 rounded-2xl'>
        <div className={` flex items-center justify-center ${isSelected? 'flex w-1/2 h-full bg-grey-300 rounded-full bg-blue-500 transition-all duration-500' : 'flex h-full w-1/2 bg-gray-200 rounded-full transition-all duration-500'}`}>
          Trading
        </div>
    
      <div onClick={TradeMine} className={` flex items-center justify-center ${isSelected? 'h-full w-1/2 bg-gray-200 rounded-full transition-all duration-500' : 'w-1/2 h-full bg-[#5B63E6] rounded-full transition-all duration-500  ' }`}>
      Mining
        </div>
       
        </div>
        {/* Balance Slider */}
        <div>

        </div>
       </div>
      <SendRecieveDrawer />
    </section>
    )
}

export default Wallet