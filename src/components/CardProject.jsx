import React, { useState } from 'react';
import { motion } from 'framer-motion';
import github from '../assets/github.svg';

export default function CardProject({ img, title, description, link, repo}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlipCard () {
    if(!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  return (
    <div
      className='flip-card mx-5 my-5 rounded-3xl'
      onClick={handleFlipCard}
    >
      <motion.div
        className='flip-card-inner w-full h-full'
        initial={ false }
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.3, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className='flip-card-front w-full h-full justify-start rounded-3xl
            p-1
            md:flex md:flex-col 
            bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-950 '>
          <div 
            className='
              w-full h-full bg-gradient-to-b from-black to-purple-950 
              justify-start rounded-3xl p-4 
              md:flex md:flex-col md:p-5
              lg:p-6
              xl:p-10
            '
          >
          
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col p-1 bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-950 rounded-xl mb-5">
              <img 
                src={img}
                alt='Project Screenshot'
                className='w-full rounded-xl '
              />
            </a>
            <h3 
              className='text-white font-bold
                w-full 
                md:text-sm
                lg:text-lg
                xl:text-2xl mb-5
                '
            >
              {title}
            </h3>
            <span className='text-white text-[10px]'>{description}</span>
            <div className="flex items-center mt-2">
              <a href={repo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img 
                  src={github}
                  alt='GitHub'
                  className='w-7 my-2 mr-2 cursor-pointer' 
                />

                <span className="text-white text-sm cursor-pointer">Repository</span>
              </a>
            </div>
          </div>
        </div>
        <div 
          className='
            flip-card-back w-full h-full justify-start rounded-2xl p-1
            md:flex md:flex-col 
            bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-950 
          '
        >
          <div className='
            w-full h-full bg-gradient-to-b from-black to-purple-950 
            justify-start rounded-2xl
            p-4
            md:flex md:flex-col md:p-5
            lg:p-6
            xl:p-10
          '>
            <a href={repo} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-950  rounded-xl">
              <img 
                src={github}
                alt='GitHub'
                className='my-2 mr-2 cursor-pointer' 
              />
            </a>

            <a href={repo} target="_blank" rel="noopener noreferrer" className=" bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-950 p-1 h-12 rounded-xl my-5 flex justify-center items-center">
              <div className='bg-gradient-to-b from-black to-purple-950 h-11 rounded-xl w-full flex justify-center items-center'>
                <span className="text-white font-bold text-sm cursor-pointer">Front-end</span>
              </div>
            </a>

            <a href={repo} target="_blank" rel="noopener noreferrer" className=" bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-950 p-1 h-12 rounded-xl my-5 flex justify-center items-center">
              <div className='bg-gradient-to-b from-black to-purple-950 h-11 rounded-xl w-full flex justify-center items-center'>
                <span className="text-white font-bold text-sm cursor-pointer">Back-end</span>
              </div>
            </a>              
          </div>
        </div>

      </motion.div>
    </div>
  );
}
