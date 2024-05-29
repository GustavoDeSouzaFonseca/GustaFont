import React from 'react'
import person from '../assets/user.svg'

export default function AboutMe() {
  return (
    <section 
      className='
        bg-gradient-to-br from-slate-950 to-slate-700 
        w-full h-[850px] grid grid-rows-2 justify-center p-10
        2xl:h-[750px] 
        xl:h-[500px] 
        md:h-[450px] md:grid-cols-2 md:grid-rows-1
    '>
      <div className='text-white'>
        <span className=''>My name is</span>
        <h2 className='text-7xl font-serif my-5'>Gustavo Fonseca.</h2>
        <span className='2xl:text-xl 2xl:font-light'>I'm 21 years old full-stack developer with a passion for using imagination to tackle real-world problems and solve them with technology.</span>
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
