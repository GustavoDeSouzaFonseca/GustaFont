import React, { useState } from 'react'
//components
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Footer from '../components/Footer';
//mocks
import aboutMe from '../mocks/aboutMe.json';
import footer from '../mocks/footer.json';
import header from '../mocks/header.json';

export default function Menu() {
  const [language, setLanguage] = useState('en');


  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt-br' : 'en';
        setLanguage(newLanguage);
  };
  
  return (
    <>
      <Header toggleLanguage={toggleLanguage} language={language} text={header} />
      <AboutMe language={language} text={aboutMe} />
      <Projects />
      <Footer language={language} text={footer}/>
    </>
  )
}
