import React from "react";

export default function Container({ children }) {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white px-[19px] w-[360px] h-[800] flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
