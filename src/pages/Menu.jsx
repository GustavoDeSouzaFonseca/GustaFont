import React, { useState } from 'react'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import aboutMe from '../mocks/aboutMe.json';
import Footer from '../components/Footer';

export default function Menu() {
  const [language, setLanguage] = useState('en');


  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt-br' : 'en';
        setLanguage(newLanguage);
  };
  
  return (
    <>
      <Header toggleLanguage={toggleLanguage} language={language}/>
      <AboutMe language={language} aboutMe={aboutMe} />
      <Projects />
      <Footer />
    </>
  )
}
