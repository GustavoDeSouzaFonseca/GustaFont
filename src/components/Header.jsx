import React from 'react'

export default function Header() {
  return (
    <header className='bg-transparent w-full h-16 px-10 py-5 grid grid-cols-2 bg-gradient-to-r from-slate-950 to-slate-700 border-b-[1px] border-yellow-600'>
      <h1 className='font-bold text-yellow-600 text-xl font-mono'>{'GustaFont </>'}</h1>

      <div className='flex flex-row justify-around text-white'>
        <p className='hover:font-semibold hover:text-yellow-600 hover:cursor-pointer'>About Me</p>
        <p className='hover:font-semibold hover:text-yellow-600 hover:cursor-pointer'>Projects</p>
        <p className='hover:font-semibold hover:text-yellow-600 hover:cursor-pointer'>Contact</p>
      </div>

    </header>
  )
}
