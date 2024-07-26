import React from 'react'

export default function Header({ toggleLanguage, language, text}) {
  const {about, projects, contacts} = text[language];

  return (
    <>
      <header className='bg-transparent w-full h-16 px-10 py-5 grid grid-cols-2 bg-gradient-to-br from-slate-950 to-[#1e111d] fixed z-20'>
        <h1 className='font-bold gradient-text text-xl font-mono'>{'GustaFont </>'}</h1>

        <div className='flex flex-row justify-around text-white'>
          <a 
            href="#aboutme" 
            className='
              hover:font-semibold hover:gradient-text hover:cursor-pointer 
              xl:text-base xl:p-0 
              text-sm p-1
            '
          >
            {about}
          </a>
          <a 
            href="#projects" 
            className='
              hover:font-semibold hover:gradient-text hover:cursor-pointer 
              xl:text-base xl:p-0 
              text-sm p-1
            '
          >
            {projects}
          </a>
          <a 
            href='#contacs'
            className='
              hover:font-semibold hover:gradient-text hover:cursor-pointer 
              xl:text-base xl:p-0 
              text-sm p-1
            '
          >
            {contacts}
          </a>
          <button 
            onClick={toggleLanguage} 
            className='
              hover:font-semibold  hover:cursor-pointer
              bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-950 
              w-20 h-8 rounded-xl 
            '
          >
            {language}
          </button>
        </div>

      </header>
      <div className="bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-950 h-1 w-full pt-[4.2rem] fixed z-10" />
    </>
  )
}
