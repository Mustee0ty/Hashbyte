import {useState} from 'react';

//import icons
import DownArrow from '../assets/DownArrow.svg'
import { computerList, QualityList } from '../data';

const Upgrade = () => {

  const [isCompOpen,setIsCompOpen ] = useState(false);
  const [isQualistOpen, setIsQualistOpen ] = useState(false);

  return (
    <section className='container mx-auto relative'>
    {/* the div with the background */}
      <div className='bg-[#492FA4] pb-10 w-full'>
        <p>Upgrade</p>
        <div>
          <p>72.40 th/s</p>
          <p>Current processing power</p>
        </div>
      </div>
      {/* Where the white starts */}
      <div className='bg-[#492FA4]'>
        <div className='bg-white border-t flex flex-col items-center w-full rounded-t-[50px] p-20 '>
        <p>
        Please select the computer you would like to upgrade & add to your exsisting processing power
        </p>
        {/* Select computer dropdown */}
        <div className='relative'>
          Select computer
          <button className='px-4 py-2 text-gray-800 bg-gray-100 rounded-md shadow-md hover:bg-gray-200'
           onClick={()=> setIsCompOpen(!isCompOpen)} >
            <img src={DownArrow} alt="" />
          </button>
          {
          isCompOpen && (
            <div className='absolute z-50 w-full mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100  '>
            {
              computerList.map((links) =>{ 
                const { id, url, text } = links
                return (
                  <li key={id}>
                    <a className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' href={url}>{text}</a>
                  </li>
                )
              })
            }
          </div>
          )
          }
        </div>
        {/* Quality dropdown */}
        <div className='relative flex flex-col items-center w-[340px] h-[34px] top-[1vh] rounded-lg'>
          Select Quality
          <button className='' onClick={()=> setIsQualistOpen(!isQualistOpen)} >
            <img src={DownArrow} alt="" />
          </button>
          {
            isQualistOpen && (
              <div className='absolute z-50 w-full mt-[34px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 '>
            {
              QualityList.map((link) =>{ 
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <a className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' href={url}>{text}</a>
                  </li>
                )
              })
            }
          </div>
            )
          }
        </div>
        {/* outputs */}
        <div className=''>
          <p>Current processing power</p>
          <button>109.98 th/s</button>
        </div>
        <div>
          <p>Current processing power</p>
          <button>109.98 th/s</button>
        </div>
        <div>
          <p>Current processing power</p>
          <button>109.98 th/s</button>
        </div>
        {/* Upgrade button */}
        <button className=''>
          upgrade
        </button>
        </div>
      </div>
    </section>
  )
}

export default Upgrade