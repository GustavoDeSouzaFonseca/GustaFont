import React from 'react'
import gustafont from '../assets/gustafont.svg'

export default function AboutMe({ language, text }) {
  const { me, btnGoTo } = text[language]

  return (
      <section id='aboutme'>
      <div
        className='
          xl:h-[500px] xl:px-20
          lg:flex lg:flex-row 
          w-full grid grid-rows-2 px-10 justify-center
          bg-gradient-to-br from-[#BBFF86] to-[#97FFFF] shadow-2xl shadow-black drop-shadow-lg
        '
      >
        <div className='w-full flex justify-center'>
          <img 
            src={gustafont}
            alt='Pessoa'
            className='rounded-3xl sm:shadow-2xl sm:shadow-black sm:drop-shadow-xl md:my-[50px] mt-12'
          />
        </div>

        <div
          className='
            lg:items-end lg:ml-10
            md:mt-10 
            sm:mt-5
            items-center flex flex-col w-full h-full p-10 
            
          '
        >
          <span className='text-lg text-cyan-400 font-bold'>{me}</span>

          <a href='https://www.linkedin.com/in/gustavo-fonseca-/' className='w-[170px] h-[40px] bg-cyan-400 text-white flex items-center justify-center rounded-xl font-bold mt-20 self-end'>{btnGoTo}</a>
        </div>
      </div>
    </section>
  )
}
