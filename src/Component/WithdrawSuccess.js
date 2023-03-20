import { useState } from 'react'
import { WithdrawSuccessDetails } from '../data'

// import Component
import Nav from './Nav'

// import image
import SuccessTickImg from '../assets/SuccessTick.png'
import DrawerOpener from '../assets/DrawerOpener.svg'
import WalletAddressIcon from '../assets/WalletAddressIcon.svg'


const WithdrawSuccess = () => {

  const [ withdrawalPopUp,setWithdrawalPopUp ] = useState(false);

  const handleClick = () => {
    setWithdrawalPopUp(!withdrawalPopUp);
  }

  return (
    <section className='flex container w-full items-center justify-center h-[819px]'>
      <div className={`${withdrawalPopUp ? 'w-[360px] h-[591px] items-center fixed bottom-0 rounded-t-[44px] bg-[#492FA4]' : 'w-[360px] h-[100px] items-center fixed bottom-0 rounded-t-[44px] bg-[#492FA4]'}  `}>
        <div onClick={handleClick} className='w-full my-[10px] flex justify-center items-center hover:cursor-pointer '>
          <img src={DrawerOpener} alt="" />
        </div>
        {
          withdrawalPopUp && 
          <div>
            <div className='text-white flex flex-col justify-center items-center mt-[101px] mr-[15.21px] ml-[13px] rounded-[20px] w-[334.58px] h-[161px] bg-[#5B3ECB] relative '>
            {
              WithdrawSuccessDetails.map((item) =>{
                const { id,amount,date,Address,cryptoAmount,cryptoCurrency } = item;
                return <div className='flex flex-col w-[334px] h-[161px] relative justify-center pl-[20.28px]' key={id}>
                  <div>
                    <h5>Withdrawal Successful</h5>
                    <img src={SuccessTickImg} alt="" />
                    <p>You have successfully withdrawn </p>
                    <p>{cryptoAmount} <span>{cryptoCurrency}</span> </p>
                  </div>
                  <div className='flex flex-col gap-y-1'>
                    <p className='border-b-2'>Date <span>{date}</span></p>
                    <p>Amount <span>{amount}</span></p>
                    <p>Option <span>{cryptoCurrency}</span></p>
                    <p>Address <span>
                        <img src={WalletAddressIcon} alt="" />
                        {Address}
                      </span></p>
                      <button>
                        View on blockchain
                      </button>
                  </div>
                </div>
              })
            }
                     
            </div>
           
          </div>
        } 
      </div>
      <Nav />
    </section>
  )
}

export default WithdrawSuccess