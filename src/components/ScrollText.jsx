import React from 'react'

const ScrollText = () => {
  return (
    <div className="w-full flex flex-col gap-32">
      <div className="track">
        <div className="flex animate-scroll-left whitespace-nowrap">
          <p className="text-[200px] font-bold mx-4">DEVELOPER</p>
          <p className="text-[200px] font-bold mx-4">DEVELOPER</p>
          <p className="text-[200px] font-bold mx-4">DEVELOPER</p>
        </div>
      </div>
      <div className="track">
        <div className="flex animate-scroll-right whitespace-nowrap">
          <p className="text-[200px] font-bold mx-4">DESIGNER</p>
          <p className="text-[200px] font-bold mx-4">DESIGNER</p>
          <p className="text-[200px] font-bold mx-4">DESIGNER</p>
        </div>
      </div>
    </div>
  )
}

export default ScrollText
