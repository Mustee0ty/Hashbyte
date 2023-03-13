import React, { useState } from 'react'
import { WalletSlides } from '../data';
import LongerDot from '../assets/longerdot.png'
import ShorterDot from '../assets/walletdot.png'

const Slider = () => {

  const [ item,setItem ] = useState(WalletSlides);
  const [index,setIndex ] = useState(0);

  return (
    <section className='container mx-auto h-screen w-screen'>
      <div className='flex items-center justify-center w-[308px] mt-[10vh] h-[181px] rounded-lg bg-blue-500'>
        {item.map((thing) =>{
          const { id,heading,subtitle,image } = thing;
          
          return (
          <section className='flex flex-row' key={id}>
            <div className='flex-1'>
              <p>{heading}</p>
              <p>{subtitle}</p>
            </div>
            <div className='flex-2'>
              <img className='h-[150px] w-[300px] ' src={image} alt="" />
            </div>
          </section>
          )
        })}
        <div className='flex'>
        {/* <ShorterDot/> */}
        {/* <LongerDot/> */}
        {/* <ShorterDot/> */}
        </div>
      </div>
    </section>
  )
}

export default Slider