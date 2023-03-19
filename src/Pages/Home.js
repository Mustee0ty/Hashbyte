import React, { useState } from 'react';

//import components
import Nav from '../Component/Nav.js'
import Setting from '../Component/Setting.js';

// import assets
import Logo from '../assets/logo.png';
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

const Home = () => {

  const [ showSettings, setShowsettings ] = useState(false);

  const handleImageClick = () => {
    setShowsettings(!showSettings);
  }


  return (
    <section className='bg-[#5B63E6] w-[360px] justify-center mx-auto absolute flex flex-col h-full '>
      {/* <Setting /> */}
      {/* header */}
      <header className='flex px-[16px] flex-row items-center justify-between'>
        {/* Profile picture */}
        <div>
          <img onClick={handleImageClick} className='rounded-full' src={ProfilePic} alt="" />
        </div>
        {/* Header morning text */}
        <div p-4>
          <p className='text-white text-[15px]'>Good Morning</p>
        </div>
        {/* Notification Bubble */}
        <img className='text-white' src={Notification} alt="" />
      </header>
      {/* Hero */}
      <div className='w-full flex flex-col'>
        {/* Speed and subtitle */}
        <div className='flex flex-col items-center pt-[46px]'>
          <h3  className='font-bold text-[40px]'>72.40 th/s</h3>
          <p>Your processing power</p>
        </div>
        {/* Active and inactive bubbles */}
        <div className='flex flex-row justify-between'>
          <div className='rounded-md w-max h-max border-hidden bg-[#87CEEB] min-h-fit min-w-fit flex flex-row text-sm p-4 m-2'>
            <div className='flex flex-col'>
              <button>Active</button>
              <p>Computers</p>
            </div>
            <div>
              0/4
            </div>
          </div>
          <div className='rounded-md w-max h-max border-hidden bg-[#87CEEB] p-4 flex flex-row'>
            <div className='flex flex-col'>
              <button className='text-sm'>Active</button>
              <p>Computers</p>
            </div>
            <div>
              0/4
            </div>
          </div>
        </div>        
      </div>
      {/* Middle upgrade now button */}
      <div className='flex flex-col items-center w-full'>
        <button className='flex flex-row rounded-full m-2 p-4 h-max w-max bg-[#FF9839]'>
          <img src={MoneyBag} alt="" />
          <p className=''>Upgrage now</p>
        </button>
      </div>
      {/* Buttom section */}
      <div className='bg-[#ffffff] mx-auto h-max flex flex-col'>
        <div className='flex flex-col items-center justify-center'> 
        {/* Time and subtitle */}
          <p>Time</p>
          <p>Subtitle</p>
        </div>
        {/* maintenance fee */}
        <div className='flex flex-row justify-between'>
          <p className='flex-1'>Maintanance fee</p>
          <p className='flex-2'>-$65</p>
        </div>
        {/* Cypto bubbles 'This should be a slider of multiple crypto currencies, on which selected crpto will show graph of it's value' */}
        <div className='flex flex-row w-full'>
        <div className='flex flex-col w-full'>
          <div className='h-max w-full p-2 m-2 rounded-sm flex flex-row'>
            <img className='h-10 w-10 ' src={BitcoinLogo} alt="" />
          <div className='flex flex-col'>
            <p>Bitcoin(BTC)</p>
            <p>$48945.89</p>
          </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='h-max w-full p-2 m-2 rounded-sm flex flex-row'>
            <img className='h-10 w-10' src={BNBLogo} alt="" />
          <div className='flex flex-col'>
            <p>Binance(BTC)</p>
            <p>$48945.89</p>
          </div>
          </div>
          {/* Selected Value */}
          <div>
            <p>$48945.89</p>
          </div>
          {/* Graph goes here */}
          <div className=''>

          </div>
          </div> 
        </div>
                  {/* Projected income */}

        <div className='flex flex-col w-full justify-center items-center'>
            <p>Projected income</p>
            <ul>
              <li>
                <div> 
                  <p>Est weekly income</p>
                  <p>$230.89</p> 
                </div>
              </li>
              <li>
                <div> 
                  <p>Est weekly income</p>
                  <p>$230.89</p> 
                </div>
              </li>
              <li>
                <div> 
                  <p>Est weekly income</p>
                  <p>$230.89</p> 
                </div>
              </li>
            </ul>
          </div>
        <div>
          <Nav />
        </div>
      </div>
    </section>
  )
}

export default Home

















