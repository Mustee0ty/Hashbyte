import React from 'react';
import BackButton from '../assets/BackButton.svg';
import { profileinfo } from '../data';
import MobileIcon from '../assets/MobileIcon.svg';
import MarketPlaceIcon from '../assets/MarketPlaceIcon.svg';
import PadlockIcon from '../assets/PadlockIcon.svg';
import ThumbPrinticon from '../assets/ThumbPrinticon.svg';
import NotificationIcon from '../assets/NotificationIcon.svg';
import WorldIcon from '../assets/WorldIcon.svg'
import CurrencyIcon from '../assets/CurrencyIcon.svg'
import SunIcon from '../assets/SunIcon.svg'


const Setting = () => {
  return (
    <section className='bg-white w-[295px] h-[800px] flex flex-col container mx-auto'>
      <div className='h-[70px] border-b'>
        <img className='fill-[#908DA0]' src={BackButton} alt="" />
      </div>
      <div className='pl-[22px] pt-[21px] flex flex-col'>
      {
        // Profile info section
        profileinfo.map((info) => {
        const { id, name, email, profilepic } = info
        return (
          <div>
          <img className='h-10 w-10 rounded-full' src={profilepic}  alt="" />
          <h4>{name}</h4>
          <p>{email}</p>
          </div>
          )
        })
      }
          <div className='flex flex-row text-blue-500'>
            <button>Edit</button>
            <button className='ml-5'>Change Password</button>
          </div>

          {/* Utilities */}
          <h5>Utilities</h5>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <img src={MobileIcon} alt="" />
              <p>Mobile Top Up</p>
            </div>
            <div className='flex flex-row'>
              <img src={MarketPlaceIcon} alt="" />
              <p>MarketPlace</p>
            </div>
          </div>

          {/* Security */}
          <h5>Security</h5>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <img src={PadlockIcon} alt="" />
              <p>Setup Pin</p>
            </div>
            <div className='flex flex-row'>
              <img src={ThumbPrinticon} alt="" />
              <p>Login with fingerprint</p>
            </div>
            <div className='flex flex-row'>
              <img src={NotificationIcon} alt="" />
              <p>Notification</p>
            </div>
          </div>

           {/* Security */}
           <h5>Others</h5>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <img src={WorldIcon} alt="" />
              <p>Languages</p>
            </div>
            <div className='flex flex-row'>
              <img src={CurrencyIcon} alt="" />
              <p>Currency</p>
            </div>
            <div className='flex flex-row'>
              <img src={SunIcon} alt="" />
              <p>Dark Mode</p>
            </div>
          </div>

      </div>
    </section>
  )
}

export default Setting