import React, { useState } from 'react'
import logo from '../assets/logo192.png'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github-white.svg'
import gmail from '../assets/gmail-white.svg'

export default function Footer({ language, text }) {
  const {contacts, quote, name, email, number, subject, send} = text[language];
  const [form, setForm] = useState({
    name:'',
    email:'',
    number:'',
    subject:''
  })

  const [errorForm, setErrorForm] = useState({
    name:false,
    email:false,
    number:false,
    subject:false
  })

  const handleChangeError = (label) => {
    setErrorForm(prevState => ({
      ...errorForm,
      [label]: !prevState[label]
    }));
  }

  const handleInputChange = (label, text) => {
    setForm({
      ...form, 
      [label]: text
    })
  }

  const validCleanedFields = (obj) => {
    return Object.keys(obj).every(key => obj[key] !== "" && obj[key] !== undefined);
  };

  const validEmail = (email) => {
    const cleanedEmail = email.trim();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(cleanedEmail);
    
    if (!isValidEmail) {
      console.error('Email inválido');
    }
  };

  const handleChangeNumber = (number) => {
    const cleaned = ('' + number).replace(/\D/g, '');
  
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
    
    if (match) {
      const DDD = (match[1] ? `(${match[1]}` : '');
      const part1 = (match[1] ? `) ` : '') + match[2];
      const part2 = (match[3] ? `-${match[3]}` : '');
      
      const formattedNumber = `${DDD}${part1}${part2}`;
      handleInputChange('number', formattedNumber.trim());
    }
  };

  const handleSendQuote = (event) => {
    event.preventDefault();
    validCleanedFields(form)
    console.log(form);
  }

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
      <div className='grid md:grid-cols-3 grid-cols-2'>
        {/* CONTATOS MOBILE */}
        <div className='grid justify-center ml-5 md:h-[250px]'>
          <img 
            src={logo}
            alt='logo'
            className='xl:w-[100%] md:w-[80%] w-[70%] mb-3'
          />

          <div className='grid md:hidden md:h-[250px] text-white'>
            <h2 id='contacs' className='font-bold gradient-text 2xl:text-[30px] xl:text-[23px] mb-2 text-base'>{contacts}</h2>
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
                    alt='instagram logo'
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
                    alt='linkedin logo'
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
                    alt='github logo'
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
                    alt='gmail logo'
                  /> 
                  <span className='self-center 2xl:text-[20px] xl:text-base text-xs font-sans'>gustavode.s.fonseca</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      {/* CONTATOS WEBSITE */}
        <div className='hidden md:grid mx-5 md:h-[250px] text-white'>
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
                  alt='instagram logo'
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
                  alt='linkedin logo'
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
                  alt='github logo'
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
                  alt='gmail logo'
                /> 
                <span className='self-center 2xl:text-[20px] xl:text-base text-xs font-sans'>gustavode.s.fonseca</span>
              </a>
            </li>
          </ul>
        </div>

        <div className='mx-5 md:h-[250px]'>
          <h2 className='font-bold gradient-text 2xl:text-[30px] xl:text-[23px] text-base mb-2'>{quote}</h2>
          <form onSubmit={handleSendQuote} className='flex flex-col'>
            <input 
              className={errorForm.name ? 'bg-transparent text-red-600 2xl:text-[18px] xl:text-[15px] text-[12px] border-b border-red-600 mb-2 p-2' : `bg-transparent text-white 2xl:text-[18px] xl:text-[15px] text-[12px] border-b mb-2 p-2`}
              placeholder={name} 
              value={form.name} 
              onChange={e => handleInputChange('name', e.target.value)}
              required
            />
            <input 
              className='bg-transparent text-white 2xl:text-[18px] xl:text-[15px] text-[12px] border-b mb-2 p-2' 
              placeholder={email} 
              value={form.email} 
              onChange={e => { handleInputChange('email', e.target.value); validEmail(e.target.value); }}
              required
            />
            <input 
              className='bg-transparent text-white 2xl:text-[18px] xl:text-[15px] text-[12px] border-b mb-2 p-2' 
              placeholder={number} 
              value={form.number} 
              onChange={e => handleChangeNumber(e.target.value)}
              required
            />
            <textarea 
              className='bg-transparent text-white 2xl:text-[18px] xl:text-[15px] text-[12px] border-b mb-2 p-2' 
              placeholder={subject} 
              value={form.subject} 
              onChange={e => handleInputChange('subject', e.target.value)}
              required
            />
            <button 
              type='submit'
              className='
                bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-950 
                2xl:w-[30%] 2xl:text-[18px] 2xl:py-2
                xl:w-[40%] xl:text-[15px] xl:py-2
                lg:w-[50%] lg:text-[15px] lg:py-2
                w-[100%] text-[12px] py-1
                rounded-md text-white font-bold mt-2 self-center
              '
            >{send}</button>
          </form>
        </div>
      </div>
    </section>
  )
}
