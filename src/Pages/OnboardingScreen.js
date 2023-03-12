import React from 'react'
import LeftU from '../assets/LeftU.png';
import RightBroken from '../assets/Rightbroken.png';

const OnboardingScreen = () => {
  return (
    <section className='mx-auto h-screen items-cente'>
      {/* login container */}
      <div className='container mx-auto w-screen'>
        <div>
          <button className='text-white font-nexa'>
            Skip
          </button>
          <div className='flex flex-col'>
            <img className='h-[184px] w-[184px] top-[241px] left-[241px] ' src={RightBroken} alt="" />
            <img className='h-[39px] w-[50px]' src={LeftU} alt="" />
          </div>
          <div>
            <p className='text-gray-100'>Welcome to Hashbyte</p>
            <p className='font-NexaLight'>Earn money renting our linux processing power</p>
            {/* There dots*/}
          </div>
          <button className='border rounded border-white'>
            Get started
          </button>
        </div>
      </div>
    </section>
  //   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  //   <h1 className="text-4xl font-bold mb-8">Welcome to Hashbyte</h1>
  //   <h3>Earn money renting your linux procesing power</h3>
  //   {/* three dots */}
  //   {/* Some dots */}
  //   <button className="border-white border-2 rounded-lg text-white py-2 px-4 bg-transparent hover:bg-white hover:text-gray-900">
  //     Get Started
  //   </button>
  // </div>
  )
}

export default OnboardingScreen