import React, { useState } from 'react'
import { WalletSlides } from '../data';
import LongerDot from '../assets/longerdot.png'
import ShorterDot from '../assets/walletdot.png'

const Slider = () => {

  const [ item,setItem ] = useState(WalletSlides);
  const [index,setIndex ] = useState(0);

  return (
    <section className='container mx-auto h-screen w-screen'>
      <div className='w-full mt-[10vh] h-[181px] flex flex-row relative'>
        {item.map((thing) =>{
          const { id,heading,subtitle,image } = thing;
          
          // let position = 'nextSlide';
          // if(personIndex === index ){
          //   postion = 'activeSlide'
          // }

          return (
          <article className='flex flex-row w-[312px] rounded-lg bg-blue-500 p-2 m-1 duration-500' key={id}>
            <div className='flex-1 w-1/2'>
              <p>{heading}</p>
              <p>{subtitle}</p>
            </div>
            <div className='flex-2'>  
              <img className='h-[150px] w-[150px] ' src={image} alt="" />
            </div>
          </article>
          )
        })}
        <div className='flex flex-row relative top-[25vh]'>
          <button>
            <img src={ShorterDot} alt="" />
          </button>
          <button>
            <img src={LongerDot} alt="" />
          </button>
          <button>
            <img src={ShorterDot} alt="" />
          </button>      
        </div>
      </div>
    </section>
  )
}

export default Slider