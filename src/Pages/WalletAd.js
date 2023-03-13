import React, { useState } from 'react'
import walletHeroImg from '../assets/walletHeroImg.png'
import walletDot from '../assets/walletdot.png'
import LongerDot from '../assets/longerdot.png'
import { WalletAdSlider } from '../data'

const WalletAd = () => {

  const [ isSlider,setIsSlider ] = useState(WalletAdSlider);
  const [ index,setIndex ] = useState(0);

  return (
    <section className='flex flex-col container mx-auto'>
      {/* Ads Slider */}
      {/* <header className='rounded-md flex flex-row'>
        <div className='flex-1'>
          <p>Do more with Hashbyte</p>
          <p>Shop,pay for utilities</p>
        </div>
        <div className='flex-2'>
          <img src={walletHeroImg} alt="" />
        </div>
      </header> */}
      <div className='w-[308px] h-[181px] rounded-lg bg-blue-500'>

      </div>
      {/* three dots */}
      <div className='flex flex-row'>
        <img src={walletDot} alt="" />
        <img src={LongerDot} alt="" />
        <img src={walletDot} alt="" />
      </div>
      {/* Two lower buttons */}
      <div className='flex flex-col'>
        <button>
          MobileTopUp
        </button>
        <button>
          Marketplace
        </button>
      </div>
    </section>
  )
}

export default WalletAd