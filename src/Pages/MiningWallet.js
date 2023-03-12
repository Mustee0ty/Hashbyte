import React from 'react'

const MiningWallet = () => {
  return (
    <section className='container mx-auto' >
      {/* main container */}
      <div className=''>
        {/* main balance */}
        <div>
          <div>
          <p className='text-white'>
            0.88624526335BTC
          </p>
          <p>
            Main Balance
          </p>
          </div>
          <div>
            <button className=''>
              Transfer
            </button>
          </div>
        </div>
        <div>
          {/* time */}
          <p>9d : 09h : 59m : 23s</p>
          {/* subtitle */}
          <p>Upcoming payment</p>
        </div>
        {/* Calender */}
        <div>
          <div>Calender Component</div>
          {/* online offline indicators */}
        </div>
        {/* History List */}
        <div>History List</div>
      </div>
    </section>
  )
}

export default MiningWallet