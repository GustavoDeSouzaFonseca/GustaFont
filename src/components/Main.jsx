import React from 'react'
import person from '../assets/user.svg'

export default function Main({ language, text }) {
  const { welcome, name, profession, about } = text[language]; 

  return (
    <section
      id='main' 
      className='
      2xl:h-[970px] 
      xl:h-[840px]
      lg:h-[750px] 
      md:h-[660px] md:grid-cols-2 md:grid-rows-1
      w-full h-[850px] grid grid-rows-2 justify-center p-10 pt-28
      bg-gradient-to-br from-slate-900 via-[#1e111d] to-purple-950 shadow-2xl shadow-black drop-shadow-lg
    '>
      <div className='text-white'>
        <span className=''>{welcome}</span>
        <h2 className='text-7xl font-serif my-3'>{name}</h2>
        <div className='w-full flex mb-5'>
          <span className='text-2xl gradient-text'>{profession}</span><br></br>
        </div>
        <span className='2xl:text-xl 2xl:font-light'>{about}</span>
      </div>

      <div className='flex justify-center items-center'>
        <img 
          src={person} 
          alt=''
          className='w-[350px] sm:w-[400px] xl:w-[400px] 2xl:w-[550px]'
        />
      </div>
    </section>
  )
}
