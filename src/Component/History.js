import React from 'react'

import { HistoryData } from '../data';

const History = () => {
  return (
          <div className='h-[322px] mx-auto flex flex-col items-center justify-center align-middle'>
          <h3 className='font-bold text-[18px] w-[300px] justify-start container mx-auto flex'>History</h3>
            <ul>
            {
            HistoryData.map((transaction) =>{
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
  )
}

export default History