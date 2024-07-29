import React, { useState } from 'react'
//components
import Header from '../components/Header'
import Main from '../components/Main';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects'
import Footer from '../components/Footer';
//mocks
import main from '../mocks/main.json';
import aboutme from '../mocks/aboutme.json'
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
      <Main language={language} text={main} />
      <AboutMe language={language} text={aboutme} />
      <Projects />
      <Footer language={language} text={footer}/>
    </>
  )
}
