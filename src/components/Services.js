import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">Lo que puedo hacer</p>
                    <p className='heading-text'>Servicios</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Desarrollo web</p>
                        <p className='services-desc'>Utilizo diversas tecnologías web para desarrollar diseños de sitios web atractivos, creativos, interactivos, responsivos y funcionales. </p>
                    </div>
                    <div className="services-card">
                        <IoColorWandOutline className='services-icon' />
                        <p className='services-title'>Diseño de interfaz de usuario</p>
                        <p className='services-desc'>Trabajo con determinadas herramientas de diseño para crear diseños y prototipos de alta fidelidad. Diseño productos accesibles y utilizables que contribuyen al crecimiento empresarial.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
