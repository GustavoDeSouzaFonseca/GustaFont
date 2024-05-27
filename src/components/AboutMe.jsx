import React from 'react'
import person from '../assets/user.svg'

export default function AboutMe() {
  return (
    <section 
      className='
        bg-gradient-to-br from-slate-950 to-zinc-700 
        w-full h-[850px] grid grid-rows-2 justify-center p-10
        2xl:h-[750px] 
        xl:h-[500px] 
        md:h-[450px] md:grid-cols-2 
    '>
      <div className='text-white '>
        <span className=''>My name is</span>
        <h2 className='text-7xl font-serif my-5'>Gustavo Fonseca.</h2>
        <span className='2xl:text-xl 2xl:font-light'>I'm 21 years old full-stack developer with a passion for using imagination to tackle real-world problems and solve them with technology.</span>
      </div>

      <img 
        src={person} 
        alt=''
        className='md:w-[400px]'
      />
    </section>
  )
}
