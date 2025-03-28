import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/IMG_1200.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className='heading-text'>Sobre Mi</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Me llamo Guillermo y disfruto creando cosas que viven en internet. Mi interés por el desarrollo web comenzó en 2022 cuando me anoté en el programa "Argentina Programa 4.0".
                        Desde ahí, me apasiona crear productos digitales accesibles e inclusivos que puedan marcar la diferencia. </p>
                        <br />
                        <p>Por más simple o compleja que pueda ser la tarea, me gusta dar siempre lo mejor de mi en todo. Soy una persona autodidacta, responsable y comprometida con mi trabajo. Constantemente estoy aprendiendo nuevas tecnologías y herramientas para mejorar mis habilidades. También disfruto incursionar en Base de datos!
                        Actualmente estudio y busco ampliar mi campo laboral en el mundo del desarrollo web.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
