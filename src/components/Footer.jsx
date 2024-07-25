import React from 'react'
import logo from '../assets/logo192.png'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github-white.svg'
import gmail from '../assets/gmail-white.svg'

export default function Footer() {
  return (
    <section 
      className='
        bg-black w-full
        2xl:h-[400px] 2xl:px-32 2xl:py-20 
      '
    >
      <div className='grid grid-cols-3'>
        <div className='grid justify-center mx-5 h-[250px]'>
          <img 
            src={logo}
          />
        </div>
        <div className='mx-5 h-[250px] text-white'>
          <h2 className='font-bold text-yellow-600 2xl:text-[30px] mb-2'>Contacts</h2>
          <ul>
            <li>
              <a href='https://www.instagram.com/gusta.font/' className='flex hover:cursor-pointer mb-2'>
                <img
                  className='2xl:mr-5'
                  src={instagram}
                  alt=''
                /> 
                <span className='self-center 2xl:text-[20px] font-sans'>@gusta.font</span>
              </a>
            </li>
            <li className='hover:cursor-pointer mb-2'>
              <a href='https://www.linkedin.com/in/gustavo-fonseca-/' className='flex'>
                <img
                  className='2xl:mr-5'
                  src={linkedin}
                  alt=''
                /> 
                <span className='self-center 2xl:text-[20px] font-sans'>Gustavo Fonseca</span>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/gustavo-fonseca-/' className='flex hover:cursor-pointer mb-2'>
                <img
                  className='2xl:mr-5'
                  src={github}
                  alt=''
                /> 
                <span className='self-center 2xl:text-[20px] font-sans'>GustavoDeSouzaFonseca</span>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/gustavo-fonseca-/' className='flex hover:cursor-pointer mb-2'>
                <img
                  className='2xl:mr-5'
                  src={gmail}
                  alt=''
                /> 
                <span className='self-center 2xl:text-[20px] font-sans'>gustavode.s.fonseca@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='mx-5 h-[250px] text-white'>
          <h2 className='font-bold text-yellow-600 2xl:text-[30px] mb-2'>Request your Quote</h2>
          <form>
            <div className='grid grid-cols-2'>
              <div className='flex flex-col mr-5'>
                <label>name:</label>
                <input className='w-full bg-slate-100 rounded-md '/>

                <label>email:</label>
                <input className='w-full bg-slate-100 rounded-md '/>

                <label>number:</label>
                <input className='w-full bg-slate-100 rounded-md '/>
              </div>
              <div className='flex flex-col'>
                <label>subject:</label>
                <input className='h-[72px] w-full bg-slate-100 rounded-md '/>
                
                <div className='flex items-center justify-center w-full h-[80px]'>
                  <button className='w-[150px] h-[30px] bg-yellow-600 rounded-md'>send</button>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
