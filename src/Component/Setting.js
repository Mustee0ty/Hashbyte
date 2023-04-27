import React from 'react';
import { Profileinfo,SettingsList } from '../data';

//import components
import Switcher from '../Component/Switcher'

//import icons
import BackButton from '../assets/BackButton.svg';


const Setting = () => {
  return (
    <section className='bg-white w-[295px] h-[800px] flex flex-col rounded-md shadow-2xl mx-auto absolute'>
      <div className='h-[70px] pl-[20px] border-b'>
        <img className='fill-[#908DA0] my-[32px] left-[20px]' src={BackButton} alt="" />
      </div>
      <div className='pt-[21px] flex flex-col'>
      {
        // Profile info section
        Profileinfo.map((info) => {
        const { id, name, email, profilepic } = info
        return (
          <div key={id} className='ml-[20px]'>
          <img className='h-[54px] w-[54px] top-[91px] rounded-full' src={profilepic}  alt="" />
          <h4 className='ml-[2px] mt-[16.6px] font-[20px] font-bold'>{name}</h4>
          <p className='font-[15px] text-[#9D9CA8]'>{email}</p>
          </div>
          )
        })
      }
          <div className='flex flex-row font-[15px] pt-[13px] ml-[20px] text-[#5B63E6]'>
            <button>Edit</button>
            <button className='ml-5 top-[162px]'>Change Password</button>
          </div>

          {/* Remaining List items */}
          <div className='ml-4 mt-[25px]'>
          {
            SettingsList.map((listItems) =>{
              const { id, heading, icon1, icon2, icon3, text1, text2,text3, switch1, switch2, switch3,Languages,Currency,Lang,Curr } = listItems;
              return (
                <div key={id} className=' items-center justify-center align-middle'>
                  <h3 className='font-semibold text-lg font-[20px]'>{heading}</h3>
                  <div className='h-full items-center justify-center '>
                    <div className='flex flex-row h-[50px] rounded-md justify-start items-center '>
                      <img className='h-[20px] w-[20px]' src={icon1} alt="" />
                      <p className='ml-[19.47px] text-sm font-sm '>{text1}</p>
                      {
                           switch1 && 
                        <div className='w-[36px] h-[21px] justify-end'>
                          <Switcher />
                        </div>
                           || Languages && 
                          <img src={Lang} alt="" />
                        
                       
                      }
                      
                    </div>
                    <div className='flex flex-row h-[50px] rounded-md justify-start items-center'>
                      <img className='h-[20px] w-[20px]' src={icon2} alt="" />
                      <p className='ml-[19.47px] text-sm font-normal'>{text2}</p>
                      {
                        switch2 && 
                        <div className='w-[36px] h-[21px] justify-end'>
                          <Switcher />
                        </div>
                       
                         || Currency && 
                        <img className='h-[20px] w-[20px]' src={Curr} alt="" />
                      }
                     
                    </div>
                    <div className='flex flex-row h-[50px] rounded-md justify-start items-center'>
                      <img className='h-[20px] w-[20px]' src={icon3} alt="" />
                      <p className='ml-[19.47px] text-sm font-normal'>{text3}</p>
                      {
                        switch3 && 
                        <div className='w-10 h-10 bg-slate-500 items-end '>
                          <Switcher />
                        </div>
                         ||  Languages && 
                        <img className='h-[20px] w-[20px]' src={Lang} alt="" /> ||    Currency && 
                        <img className='h-[20px] w-[20px]' src={Curr} alt="" />
                      }
                     
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
          {/* pop up functionality
        {/* 
            import React from 'react';

            const Sidebar = ({ onClose }) => {
              return (
                <div className="fixed top-0 left-0 bottom-0 bg-white w-4/5 transition-all duration-500 z-40">
                  <button className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-l-md focus:outline-none" onClick={onClose}>
                    Close
                  </button>
                  <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-2xl font-bold mb-4">Sidebar</p>
                    <p className="text-lg">Here's where you can put more content.</p>
                  </div>
                </div>
              );
            };

export default Sidebar;
  
        */}
      </div>
    </section>
  )
}

export default Setting