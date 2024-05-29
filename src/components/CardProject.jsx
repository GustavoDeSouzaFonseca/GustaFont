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
      className='flip-card p-5'
      onClick={handleFlipCard}
    >
      <motion.div
        className='flip-card-inner w-full h-full'
        initial={ false }
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.3, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div 
          className='flip-card-front
            w-full h-full bg-gradient-to-b from-black to-slate-800 
            justify-start rounded-2xl p-4 
            border border-yellow-600
            md:flex md:flex-col md:p-5
            lg:p-6
            xl:p-10
          '
        >
        
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col">
            <img 
              src={img}
              alt='Project Screenshot'
              className='w-full border border-yellow-600 rounded-xl mb-5'
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

        <div className='flip-card-back
          w-full h-full bg-gradient-to-b from-black to-slate-800 
          justify-start rounded-2xl
          border border-yellow-600 p-4
          md:flex md:flex-col md:p-5
          lg:p-6
          xl:p-10
        '>
          <a href={repo} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center border border-yellow-600 rounded-xl">
            <img 
              src={github}
              alt='GitHub'
              className='my-2 mr-2 cursor-pointer' 
            />
          </a>

          <a href={repo} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center my-5 items-center border border-yellow-600 h-12 rounded-xl">
            <span className="text-white font-bold text-sm cursor-pointer">Front-end</span>
          </a>

          <a href={repo} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center mb-5 items-center border border-yellow-600 h-12 rounded-xl">
            <span className="text-white font-bold text-sm cursor-pointer">Back-end</span>
          </a>
            
        </div>
      </motion.div>
    </div>
  );
}
