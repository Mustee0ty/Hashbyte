import React, { useState, useEffect } from 'react'

//import data
import { History } from '../data';

// import Components 
import SendRecieveDrawer from '../Component/SendRecieveDrawer';

// import icons
import BackButton from '../assets/BackButton.svg'
import MoneyBag from '../assets/moneybag.png'
import BNBLogo from '../assets/BNBLogo.png'
import BitcoinLogo from '../assets/BitcoinLogo.png'
import { data } from 'autoprefixer';


// Slider Data
const sliderz = [
  {
    id:1,
    logo:BitcoinLogo,
    balance:'0.8956767 BTC',
    balanceText: 'Main Balance',
  },
  {
    id:2,
    logo:BNBLogo,
    balance:'0.8956768 BTC',
    balanceText: 'Side Balance',
  },
  {
    id:3,
    logo:MoneyBag,
    balance:'0.8956768 BTC',
    balanceText: 'Side Balance',
  }
] 

const Wallet = () => {

  const [ isSelected,setIsSelected ] = useState(false);

  const [people,setPeople] = useState(sliderz);

  const [index,setIndex] = useState(0);
  
  useEffect(() =>{
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  const TradeMine = () => {
    setIsSelected(!isSelected)
  };

  useEffect (() => {
    let slider = setInterval (() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    }
  }, [index]);

  return (
    <section className='h-[819px] w-[360px] flex flex-col mx-auto bg-[#F9F8FF]' >
              {/* BackButton */}
      <button>
        <img className='mt-[30px]' src={BackButton} alt="" />
      </button>
              {/* Trading mining switch button */}

      <div className='w-[360px] relative mx-auto'>
        <div onClick={TradeMine} className='flex flex-row h-[37px] w-[138px] text-white bg-gray-200 rounded-2xl mx-auto'>
          <div className={` flex items-center justify-center ${isSelected? 'flex w-1/2 bg-grey-300 rounded-full bg-blue-500 transition-all duration-500' : 'flex w-1/2 bg-gray-200 rounded-full transition-all duration-500'}`}>
          Trading
          </div>
    
        <div onClick={TradeMine} className={` flex items-center justify-center ${isSelected? 'h-full w-1/2 bg-gray-200 rounded-full transition-all duration-500' : 'w-1/2 h-full bg-[#5B63E6] rounded-full transition-all duration-500  ' }`}>
          Mining
          </div>
        </div>
        </div>

         {/* Balance Slider */}
      <div className='flex flex-row mt-[18px] items-center top-[90px] relative'>
      <button className='h-[153px] flex absolute left-0 w-[16px] rounded-r-[15px] bg-[#FFA24c]'>

      </button>

      {sliderz.map((person, personIndex) => {
        const { id, logo, balance, balanceText } = person;

        let position = 'nextSlide';
        if (personIndex === index){
          position = 'activeSlide';
        }
        if (
          personIndex === index - 1 || (
            index === 0 && personIndex === people.length - 1
          ) 
        ) {
            position = 'lastSlide';
          }
        
        
        return (
          <div className='w-[360px] absolute flex flex-col mx-auto'>
             <article className={position} key={id}>
            <div className='bg-gradient-to-b from-purple-800 via-purple-900 to-blue-900 h-[180px] w-[298px] rounded-[20.5px] items-center justify-center align-middle flex text-white '>
              <div className='flex flex-row'>
                <img className='h-[46px] w-[46px] mr-[17px]' src={logo} alt="" />
                <div className='flex flex-col'>
                  <p className='font-bold text-[20px]'>{balance}</p>
                  <p className='font-thin text-[16px] leading-[19.2px]'>{balanceText}</p>
                </div>
              </div>
            </div>
          </article>
          </div>
        )
      })}

      <button className='absolute right-0 h-[153px] w-[16px] rounded-l-[15px] bg-[#FFA24c]'>
      </button>
      </div>
      {/* History */}
      <div className='h-[322px] mx-[16px] absolute mt-[80%] sm:mt-[35%]  md:mt-[40%] lg:mt-[40%] xl:mt-[40%] 2xl:mt-[18%] '>
        <h3 className='font-bold text-[18px] mb-[17px]'>History</h3>
          <ul>
          {
          History.map((transaction) =>{
            const { id,coinLogo,transactionAmount,status,time } = transaction;
            return (
              <li className='flex flex-col bg-white w-[330px] h-[82px] rounded-[10px] mb-[10px] ' key={id}>
                <div className='flex flex-row mt-[17px] justify-between mx-[11px]'>
                  <div className='font-bold flex flex-row'>
                  <img className='mr-[7px] w-[22px] h-[22px]' src={coinLogo} alt="" />
                    <p>{transactionAmount}</p>
                  </div>
                  <div className='flex flex-row'>
                    <button className='bg-[#06ee95] h-[18px] w-[60px] text-[#0ecb81] flex items-center align-middle rounded-[9px] text-[12px] justify-center'>
                      {status}
                    </button>
                    <p className='text-[#9D9CA8] ml-[21px]'>
                      {time}
                    </p>
                  </div>
                </div>
                <a className='justify-end flex pb-[15px] mr-[11px] font-semibold text-blue-700' href="">View details</a>
              </li>
            )
          })
        }
          </ul>
      </div>
      <SendRecieveDrawer />
    </section>
    )
}

export default Wallet