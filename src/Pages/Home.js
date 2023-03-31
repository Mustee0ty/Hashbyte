import React, { useState } from 'react';
import { HomeData,cryptoSlides,GraphData } from '../data.js';

//import Line for crypto chart
import {
    Chart as ChartJs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

import { Line } from 'react-chartjs-2'

//import components
import Nav from '../Component/Nav.js'
import Setting from '../Component/Setting.js';

// import assets
import Logo2 from '../assets/logo.png';
import MoneyBag from '../assets/moneybag.png';
import BitcoinLogo from '../assets/BitcoinLogo.png';
import BNBLogo from '../assets/BNBLogo.png';
import Notification from '../assets/Notification.png';
import NavHome from '../assets/NavHome.png';
import NavPerc from '../assets/NavPercntLogo.png';
import WalletLogo from '../assets/WalletLogo.png';
import SignalLogo from '../assets/SignalLogo.png';
import ExchangeLogo from '../assets/ExchangeLogo.png';
import ProfilePic from '../assets/profilepic.png'
import NotificationDot from '../assets/NotificationDot.svg'
// import HeaderBg from '../assets/HomeBgVectors/HeaderBg.png'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const Home = () => {

  const [ showSettings, setShowsettings ] = useState(false);

  const handleImageClick = () => {
    setShowsettings(!showSettings);
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <section className='h-[1108px] w-[360px] mx-auto font-nexa '>
     {
      HomeData.map((items) => {
        const { id,processingPower,activeComputers,inactiveComputers,upComingPayTime,maintenanceFees,bitcoinAmount,bnbAmount,rate,estWeeklyIncome,estMonthlyIncome,estYearlyIncome } = items;
        return(
          <div>
             <header className='h-[471px] w-[360px] bg-transparent bg-gradient-to-r from-purple-800 via-purple-900 to-blue-900 flex flex-col text-white '>
              <div className='flex flex-row justify-between px-[15px] mb-[23px] pt-4'>
                <img className='rounded-full' src={ProfilePic} alt="" />
                <p className='text-white'>Good Morning</p>
                  <div className='bg-'>
                  <img className='relative' src={Notification}alt="" />
                  <img className='' src={NotificationDot} alt="" />
                  </div>
              </div>
            <div className='flex flex-col items-center mb-[26px] ' >
              <h3 className='text-[#F4F8FF] leading-[50px] text-[40px]'>{items.processingPower}th/s</h3>
              <p className='font-raleway'>Your processing power</p>
            </div>
            <div className='flex flex-row justify-between px-[17px]'>
              <div className='flex flex-row w-[159px] h-[75px] rounded-[13px] bg-[#5B63E6] '>
                <div className='flex-1 flex-col'>
                  <button className='bg-[#1FB86E] h-[22px] w-[66px] mt-[16px] mb-[3px] ml-[10px] rounded-[5px]'>
                    <p className='h-[13px] w-[42px] flex items-center justify-center ml-3'>Active</p>
                  </button>
                  <p className='ml-[10px]'>Computers</p>
                </div>
                <div className='mt-[26px] mr-[12px]'>
                  <p>{activeComputers}</p>
                </div>
              </div>
              <div className='flex flex-2'>
              <div className='flex flex-row w-[159px] h-[75px] rounded-[13px] bg-[#5B63E6]'>
                 <div className='flex-1 flex-col'>
                   <button className='bg-[#FF4040] h-[22px] w-[66px] mt-[16px] mb-[3px] ml-[10px] rounded-[5px]'>
                      <p className='h-[13px] w-[42px] flex items-center justify-center ml-3'>Inactive</p>
                   </button>
                    <p className='ml-[10px]'>Computers</p>
                 </div>
                 <div className='mt-[26px] mr-[12px]'>
                    <p>{inactiveComputers}</p>
                 </div>
                </div>
              </div>
            </div>
              {/* Upgrade now */}
              <button className='h-[54px] w-[212px] rounded-[27px] bg-[#FF9839] flex flex-row justify-center mx-[74px] top-[271px] absolute z-10 '>
                <img className='my-auto' src={MoneyBag} alt="" />
                <p className='my-auto mx-[10px] text-white'>Upgrade Now</p>
              </button>
            
            {/* White Section */}
            <div className='bg-white mx-auto rounded-t-[55px] flex flex-col h-full w-full mt-[50px] relative'>
              <div className='mx-auto flex flex-col justify-center items-center mt-[51px]'>
                <p className='text-[20px] font-semibold leading-[20px]'>{upComingPayTime}</p>
                <p className='text-[#9192A1] text-[15px] mt-[7px]'>Upcoming payment</p>
              </div>
              <div className="relative w-[330px] h-[53px] flex justify-center items-center align-middle border-[#F1F1F1] border-2 rounded-[10px] mt-[10px] mx-auto">
                <input
                  className="block w-full py-2 pl-3 pr-10 placeholder-[#9192A1] border-gray-300 rounded-md focus:outline-none sm:text-sm"
                  type="text"
                  placeholder="Maintenance Fee"
                  aria-label="Placeholder 1"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 text-sm mr-2"></span>
                  <span className="text-black font-semibold text-lg">{maintenanceFees}</span>
                </span>
              </div>
              <div className='w-full h-[65px] flex flex-row'>
                {
                  cryptoSlides.map((item) =>{
                    return (
                      <button key={item.id} className='bg-white h-[65px] w-[146px] rounded-[10px]'>
                        <div className='flex flex-row'>
                          <img className='h-[28px] flex items-center align-middle w-[28px]' src={item.logo} alt="" />
                          <div className='flex flex-col h-[38px] w-[86px] '>
                            <p>{item.cryptoCurrency}</p>
                            <p>{item.amount}</p>
                          </div>
                        </div>
                      </button>
                    )
                  })
                }
              </div>
              <div className='w-[340px] h-[130px]'>
                <Line data={GraphData} options={options} />
              </div>
            </div>
            </header>
            <Nav/>
          </div>
        )
      })
     }
    </section>
  )
}

export default Home

 // <section className='bg-[#5B63E6] w-[360px] justify-center absolute flex flex-col h-[1108px] '>
    //   <Setting />
    //   {/* header */}
    //   <header className='flex px-[16.05px] pt-0 mt-0 flex-row items-center justify-between'>
    //     {/* Profile picture */}
    //       <img onClick={handleImageClick} className='rounded-full' src={ProfilePic} alt="" />
    //     {/* Header morning text */}
    //       <p className='text-white text-[15px]'>Good Morning</p>
    //     {/* Notification Bubble */}
    //     <img className='text-white' src={Notification} alt="" />
    //   </header>
    //   {/* Hero */}
    //   <div className='w-full flex flex-col'>
    //     {/* Speed and subtitle */}
    //     <div className='flex flex-col items-center pt-[46px]'>
    //       <h3  className='font-bold text-[40px]'>72.40 th/s</h3>
    //       <p>Your processing power</p>
    //     </div>
    //     {/* Active and inactive bubbles */}
    //     <div className='flex flex-row justify-between'>
    //       <div className='rounded-md w-max h-max border-hidden bg-[#87CEEB] min-h-fit min-w-fit flex flex-row text-sm p-4 m-2'>
    //         <div className='flex flex-col'>
    //           <button>Active</button>
    //           <p>Computers</p>
    //         </div>
    //         <div>
    //           0/4
    //         </div>
    //       </div>
    //       <div className='rounded-md w-max h-max border-hidden bg-[#87CEEB] p-4 flex flex-row'>
    //         <div className='flex flex-col'>
    //           <button className='text-sm'>Active</button>
    //           <p>Computers</p>
    //         </div>
    //         <div>
    //           0/4
    //         </div>
    //       </div>
    //     </div>        
    //   </div>
    //   {/* Middle upgrade now button */}
    //   <div className='flex flex-col items-center w-full'>
    //     <button className='flex flex-row rounded-full m-2 p-4 h-max w-max bg-[#FF9839]'>
    //       <img src={MoneyBag} alt="" />
    //       <p className=''>Upgrage now</p>
    //     </button>
    //   </div>
    //   {/* Buttom section */}
    //   <div className='bg-[#ffffff] mx-auto h-max flex flex-col'>
    //     <div className='flex flex-col items-center justify-center'> 
    //     {/* Time and subtitle */}
    //       <p>Time</p>
    //       <p>Subtitle</p>
    //     </div>
    //     {/* maintenance fee */}
    //     <div className='flex flex-row justify-between'>
    //       <p className='flex-1'>Maintanance fee</p>
    //       <p className='flex-2'>-$65</p>
    //     </div>
    //     {/* Cypto bubbles 'This should be a slider of multiple crypto currencies, on which selected crpto will show graph of it's value' */}
    //     <div className='flex flex-row w-full'>
    //     <div className='flex flex-col w-full'>
    //       <div className='h-max w-full p-2 m-2 rounded-sm flex flex-row'>
    //         <img className='h-10 w-10 ' src={BitcoinLogo} alt="" />
    //       <div className='flex flex-col'>
    //         <p>Bitcoin(BTC)</p>
    //         <p>$48945.89</p>
    //       </div>
    //       </div>
    //     </div>
    //     <div className='flex flex-col'>
    //       <div className='h-max w-full p-2 m-2 rounded-sm flex flex-row'>
    //         <img className='h-10 w-10' src={BNBLogo} alt="" />
    //       <div className='flex flex-col'>
    //         <p>Binance(BTC)</p>
    //         <p>$48945.89</p>
    //       </div>
    //       </div>
    //       {/* Selected Value */}
    //       <div>
    //         <p>$48945.89</p>
    //       </div>
    //       {/* Graph goes here */}
    //       <div className=''>

    //       </div>
    //       </div> 
    //     </div>
    //               {/* Projected income */}

    //     <div className='flex flex-col w-full justify-center items-center'>
    //         <p>Projected income</p>
    //         <ul>
    //           <li>
    //             <div> 
    //               <p>Est weekly income</p>
    //               <p>$230.89</p> 
    //             </div>
    //           </li>
    //           <li>
    //             <div> 
    //               <p>Est weekly income</p>
    //               <p>$230.89</p> 
    //             </div>
    //           </li>
    //           <li>
    //             <div> 
    //               <p>Est weekly income</p>
    //               <p>$230.89</p> 
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     <div>
    //       <Nav />
    //     </div>
    //   </div>
    // </section>















