import React from 'react'
import gustafont from '../assets/gustafont.svg'

export default function AboutMe({ language, text }) {
  const { me, btnGoTo } = text[language]

  return (
      <section id='aboutme'>
      <div
        className='
          xl:h-[500px]  xl:px-20
          w-full flex flex-row 
          bg-gradient-to-br from-[#BBFF86] to-[#97FFFF] shadow-2xl shadow-black drop-shadow-lg
        '
      >
        <img 
          src={gustafont}
          alt='Pessoa'
          className='rounded-3xl shadow-2xl shadow-black drop-shadow-xl my-[50px]'
        />

        <div
          className='
            w-full h-full
            p-10 ml-10
            flex flex-col items-end mt-10
          '
        >
          <span className='text-lg text-cyan-400 font-bold'>{me}</span>

          <a href='https://www.linkedin.com/in/gustavo-fonseca-/' className='w-[170px] h-[40px] bg-cyan-400 text-white flex items-center justify-center rounded-xl font-bold mt-20'>{btnGoTo}</a>
        </div>
      </div>
    </section>
  )
}
