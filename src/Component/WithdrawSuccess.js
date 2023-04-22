import { useState } from 'react'
import { WithdrawSuccessDetails } from '../data'

// import Component
import Nav from './Nav'

// import image
import SuccessTickImg from '../assets/SuccessTick.svg'
import DrawerOpener from '../assets/DrawerOpener.svg'
import WalletAddressIcon from '../assets/WalletAddressIcon.svg'


const WithdrawSuccess = () => {

  const [ withdrawalPopUp,setWithdrawalPopUp ] = useState(false);

  const handleClick = () => {
    setWithdrawalPopUp(!withdrawalPopUp);
  }

  return (
    <section className='flex mx-auto container w-full items-center justify-center text-black h-[819px]'>
      <div className={`${withdrawalPopUp ? 'w-[360px] h-[591px] items-center fixed bottom-0 rounded-t-[44px] bg-white' : 'w-[360px] h-[100px] items-center fixed bottom-0 rounded-t-[44px] bg-white'}  `}>
        <div onClick={handleClick} className='w-full mx-auto my-[10px] flex justify-center items-center hover:cursor-pointer '>
          <img src={DrawerOpener} alt="" />
        </div>
        {
          withdrawalPopUp && 
          <div>
            <div className='text-white flex flex-col justify-center items-center rounded-[20px] '>
            {
              WithdrawSuccessDetails.map((item) =>{
                const { id,amount,date,Address,cryptoAmount,cryptoCurrency } = item;
                return (
                  <section className='flex flex-col mx-auto ' key={id}>
                    <p className='text-[#5b63e6] text-[20px] font-extrabold w-max mx-auto '>Withdraw successfull</p>
                    <img className='h-[88px] w-[88px] mx-auto my-[16px]' src={SuccessTickImg} alt="" />
                    <div className='text-[#303c5b] w-[279px] mx-auto items-center flex flex-col align-middle justify-self-auto align-center'>
                      <p className='h-[50px] w-max mx-auto mb-0 pb-0'>You have Successfully withdrawn <br /> 
                        <h6 className='font-semibold mx-auto flex items-center justify-center align-middle'>{cryptoAmount} {cryptoCurrency}</h6>
                      </p>
                    </div>
                    <div className='bg-gradient-to-br from-white via-blue-50 to-purple-50 w-full mx-auto'>
                    <table className='table-auto w-full mt-[56px] px-[20px]'>
                      <tbody>
                        <tr className='border-b border-[#ebebeb] tr'>
                          <td  className='text-[#9D9CA8]'>Date</td>
                          <td className='text-[#303c5b] flex justify-end'>{date}</td>
                        </tr>
                        <tr className='tr'>
                          <td className='text-[#9D9CA8]'>Amount</td>
                          <td className='text-[#303c5b] flex justify-end'>{amount}</td>
                        </tr>
                        <tr className='tr'>
                          <td  className='text-[#9D9CA8]'>Option</td>
                          <td className='text-[#303c5b] flex justify-end'>{cryptoCurrency}</td>
                        </tr>
                        <tr className='tr'>
                          <td  className='text-[#9D9CA8]'>Address</td>
                          <td className='text-[#303c5b] flex flex-row justify-end'> <img src={WalletAddressIcon} alt="" /> {Address}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className='pb-[50px] pt-[16px]'>
                      <button className='h-[38px] w-[185px]  flex align-middle items-center justify-center mx-auto bg-[#5b63e6] bg-opacity-[17%] rounded-[19px] text-[#5b63e6]'>
                        View on blockchain
                      </button>
                    </div>
                    </div>
                  </section>
                )
              })
            }
                     
            </div>
           
          </div>
        } 
      </div>
      {/* <Nav /> */}
    </section>
  )
}

export default WithdrawSuccess