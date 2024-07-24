import React from 'react'
import person from '../assets/user.svg'

export default function AboutMe({ language, aboutMe }) {
  const { welcome, name, profession, about } = aboutMe[language]; 

  return (
    <section 
      className='
        bg-gradient-to-br from-slate-950 to-slate-700 
        w-full h-[850px] grid grid-rows-2 justify-center p-10
        2xl:h-[750px] 
        xl:h-[500px] 
        md:h-[450px] md:grid-cols-2 md:grid-rows-1
        pt-16
    '>
      <div className='text-white'>
        <span id="aboutme-text" className=''>{welcome}</span>
        <h2 className='text-7xl font-serif my-3'>{name}</h2>
        <div className='w-full flex mb-5'>
          <span className='text-2xl text-yellow-600'>{profession}</span><br></br>
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
