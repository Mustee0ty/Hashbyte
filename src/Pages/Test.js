import React, { useState } from 'react'

const Test = () => {

  const [ isOpen, setIsOpen ] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className="relative">
      <button
        className="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
        onClick={toggle}
      >
        <img
          className="h-full w-full object-cover"
          src="https://source.unsplash.com/random"
          alt="Your avatar"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Test