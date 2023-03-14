import React, { useState } from 'react';

const ExpandableMenu = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="fixed top-0 right-0 z-50">
      {/* Default buttons */}
      <div className={`flex ${expanded ? 'hidden' : ''}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-l-md focus:outline-none" onClick={handleExpandClick}>
          Menu
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md focus:outline-none" onClick={handleExpandClick}>
          Settings
        </button>
      </div>
      {/* Expanded menu */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white ${expanded ? 'w-7/10' : 'w-0'} transition-all duration-500 z-40`}>
        <button className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-l-md focus:outline-none" onClick={handleExpandClick}>
          Close
        </button>
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-2xl font-bold mb-4">Expanded Menu</p>
          <p className="text-lg">Here's where you can put more buttons or other content.</p>
        </div>
      </div>
    </div>
  );
};

export default ExpandableMenu;
