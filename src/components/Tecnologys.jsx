import React, { useState } from 'react'
import logoJavaScript from '../assets/logo-javascript.svg'
import logoNode from '../assets/logo-nodejs.svg'
import logoReact from '../assets/logo-react.svg'
import logoReactNative from '../assets/logo-react-native.svg'
import logoPython from '../assets/logo-python.svg'

export default function Tecnologys({ language, text}) {
  const [indexLogo, setIndexLogo] = useState(0)
  const index = text[language][indexLogo]

  return (
    <section
      id='tecnology'
      className='
        2xl:h-[970px] 
        xl:h-[810px]
        lg:h-[750px]
        h-[850px]
        flex flex-start
        w-full bg-gradient-to-br from-purple-950 via-[#1e111d] to-slate-900 shadow-2xl shadow-black drop-shadow-lg
        px-10 py-20
      '
    >
      <div className='h-full w-20 flex justify-between flex-col mx-10'>
        <img src={logoNode} alt='logoNode' onMouseEnter={() => setIndexLogo(0)} />   
        <img src={logoJavaScript} alt='logoJavaScript' onMouseEnter={() => setIndexLogo(1)} />   
        <img src={logoReact} alt='logoReact' onMouseEnter={() => setIndexLogo(2)} />   
        <img src={logoReactNative} alt='logoReactNative' onMouseEnter={() => setIndexLogo(3)} />   
        <img src={logoPython} alt='logoPython' onMouseEnter={() => setIndexLogo(4)} />   
      </div>

      <div className='w-full'>
        <span>{index}</span>
      </div>
    </section>
  )
}
