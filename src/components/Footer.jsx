import React from 'react'
import logo from '../assets/logo192.png'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github-white.svg'
import gmail from '../assets/gmail-white.svg'

export default function Footer({ language, text }) {
  const {contacts, quote, name, email, number, subject, send} = text[language];

  return (
    <section 
      className='
        bg-black w-full
        2xl:h-[400px] 2xl:px-32 2xl:py-20 
        xl:h-[400px] xl:px-24 xl:py-20
        lg:h-[350px] lg:px-20 lg:py-16
        md:h-[330px] md:px-16 md:py-12
        sm:h-[350px] sm:px-16 sm:py-10
        py-10
      '
    >
      <div className='grid grid-cols-3'>
        <div className='grid justify-center mx-5 h-[250px]'>
          <img 
            src={logo}
            className='xl:w-[100%] md:w-[80%] w-[70%]'
          />
        </div>
        <div className='mx-5 h-[250px] text-white'>
          <h2 id='contacs' className='font-bold gradient-text 2xl:text-[30px] xl:text-[23px] mb-2'>{contacts}</h2>
          <ul>
            <li>
              <a href='https://www.instagram.com/gusta.font/' className='flex hover:cursor-pointer mb-2'>
                <img
                  className='
                    2xl:mr-5 2xl:w-[30px]
                    xl:mr-4 xl:w-[27px]
                    lg:mr-3 lg:w-[25px]
                    md:mr-2 md:w-[20px]
                    mr-1 w-[18px]
                  '
                  src={instagram}
                  alt=''
                /> 
                <span className='self-center 2xl:text-[20px] xl:text-base text-xs font-sans'>@gusta.font</span>
              </a>
            </li>
            <li className='hover:cursor-pointer mb-2'>
              <a href='https://www.linkedin.com/in/gustavo-fonseca-/' className='flex'>
                <img
                  className='
                    2xl:mr-5 2xl:w-[30px]
                    xl:mr-4 xl:w-[27px]
                    lg:mr-3 lg:w-[25px]
                    md:mr-2 md:w-[20px]
                    mr-1 w-[18px]
                  '
                  src={linkedin}
                  alt=''
                /> 
                <span className='self-center 2xl:text-[20px] xl:text-base text-xs font-sans'>Gustavo Fonseca</span>
              </a>
            </li>
            <li>
              <a href='https://github.com/GustavoDeSouzaFonseca' className='flex hover:cursor-pointer mb-2'>
                <img
                  className='
                    2xl:mr-5 2xl:w-[30px]
                    xl:mr-4 xl:w-[27px]
                    lg:mr-3 lg:w-[25px]
                    md:mr-2 md:w-[20px]
                    mr-1 w-[18px]
                  '
                  src={github}
                  alt=''
                /> 
                <span className='self-center 2xl:text-[20px] xl:text-base text-xs font-sans'>GustavoDeSouzaFonseca</span>
              </a>
            </li>
            <li>
              <a href='mailto:gustavode.s.fonseca@gmail.com' className='flex hover:cursor-pointer mb-2'>
                <img
                  className='
                    2xl:mr-5 2xl:w-[30px]
                    xl:mr-4 xl:w-[27px]
                    lg:mr-3 lg:w-[25px]
                    md:mr-2 md:w-[20px]
                    mr-1 w-[18px]
                  '
                  src={gmail}
                  alt=''
                /> 
                <span className='self-center 2xl:text-[20px] xl:text-base text-xs font-sans'>gustavode.s.fonseca</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='mx-5 h-[250px] text-white'>
          <h2 className='font-bold gradient-text 2xl:text-[30px] xl:text-[23px] mb-2'>{quote}</h2>
          <form>
            <div className='xl:grid xl:grid-cols-2'>
              <div className='flex flex-col mr-5'>
                <label className='2xl:text-[20px] xl:text-base text-xs'>{name}:</label>
                <input className='2xl:text-[20px] xl:text-base text-xs w-full bg-slate-100 rounded-md text-black px-1'/>

                <label className='2xl:text-[20px] xl:text-base text-xs'>{email}:</label>
                <input className='2xl:text-[20px] xl:text-base text-xs w-full bg-slate-100 rounded-md text-black px-1'/>

                <label className='2xl:text-[20px] xl:text-base text-xs'>{number}:</label>
                <input 
                  type='number'
                  className='
                    2xl:text-[20px] 
                    xl:text-base 
                    text-xs w-full bg-slate-100 rounded-md text-black px-1
                  '
                />
              </div>
              <div className='flex flex-col'>
                <label className='2xl:text-[20px] xl:text-base text-xs'>{subject}:</label>
                <textarea 
                  className='
                    2xl:h-[90px]
                    xl:resize-y xl:h-[90px]
                    disabled
                    w-full bg-slate-100 rounded-md text-black
                  '
                />
                
                <div className='flex items-center justify-center w-full 2xl:h-[80px] h-[50px]'>
                  <button 
                    className='
                      2xl:w-[150px] 2xl:h-[30px]
                      xl:w-[130px] xl:h-[30px]
                      lg:w-[110px] lg:h-[25px] lg:text-base
                      md:w-[100px] md:h-[25px] md:text-sm
                      w-[80px] h-[25px] text-xs
                      bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-950 rounded-md font-bold
                    '
                  >
                    {send}
                  </button>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
