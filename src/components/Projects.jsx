import React from 'react'
import codai from '../assets/codai.png'
import gear from '../assets/gearmeeting.png'
import CardProject from './CardProject'

export default function Projects() {
  return (
    <section
      id='projects'
      className='
        2xl:h-[750px] 
        xl:h-[500px] 
        md:h-[450px] md:grid-cols-4 md:grid-rows-1 md:p-10
        w-full h-[1200px] grid grid-rows-3 grid-cols-2 p-6 bg-gradient-to-br to-slate-300 from-slate-400 
    '>
      <CardProject 
        link={'https://codai-hub.web.app/'}
        repo={'https://github.com/orgs/CodAI-Project/repositories'}
        img={codai}
        title={'CodAI'}
        description={'Com a CodAI, você cria e edita seus códigos de forma rápida e com ajuda de uma IA nativamente.'}
      />

      <CardProject 
        link={'https://github.com/orgs/GeerMeeting/repositories'}
        repo={'https://github.com/orgs/GeerMeeting/repositories'}
        img={gear}
        title={'Gear Meeting'}
        description={'Com a CodAI, você cria e edita seus códigos de forma rápida e com ajuda de uma IA nativamente.'}
      />

      <CardProject 
        link={'https://codai-hub.web.app/'}
        repo={'https://github.com/orgs/CodAI-Project/repositories'}
        title={'Render 10GB JSON'}
        description={'Develop an API using Node.js for a system for client contract monitoring.'}
      />

      <CardProject 
        link={'https://github.com/orgs/GeerMeeting/repositories'}
        repo={'https://github.com/orgs/GeerMeeting/repositories'}

        title={'Legacy'}
        description={'Servidor Node.js que forneça uma API RESTful para gerenciar empresas (CRUD). Use o mysql como armazenamento de dados dos clientes.'}
      />
    </section>
  )
}
