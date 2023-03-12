import { useState } from 'react'

const Switcher = () => {

  const [ isSelected, setIsSelected ] = useState(false);

  return (
    <div className={` ${isSelected? 'flex w-20 h-10 bg-[#5B63E6] rounded-full' : 'flex h-10 w-20 bg-gray-300 rounded-full'}`} >
      <span onClick={()=>setIsSelected(!isSelected)} className={`${isSelected? 'h-10 w-10 bg-white rounded-full transition-all duration-500 shadow-lg' : 'ml-10 w-10 h-10 bg-blue-500 rounded-full transition-all duration-500  ' }`}>

      </span>
    </div>
  )
}

export default Switcher