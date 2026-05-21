import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
      <div className="flex items-center gap-x-2 font-sora select-none">
        <span className="bg-white text-black px-2 py-0.5 rounded font-extrabold text-sm lg:text-base tracking-wider">PK</span>
        <span className="font-extrabold text-base lg:text-lg tracking-tight text-white">Pavan</span>
      </div>

      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p>@ 2026 Personal Portfolio</p>
        <p>Made by Pavan</p>
      </div>
    </div>
  )
}
