import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaWhatsapp} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><a  href="https://wa.me/1160366102?text=I%27m%20interested%20in%20your%20car%20for%20sale" target='_blank' className='nav-link'><FaWhatsapp /></a></li>
        <li onClick={handleNav} ><Link  to="//www.linkedin.com/in/pappyjay" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="//github.com/Pappyjay23" target='_blank' className='nav-link'><BsGithub /></Link></li>
        <li onClick={handleNav} ><a  href="mailto:pjinadu02@gmail.com" target='_blank' className='nav-link' rel="noreferrer"><BiEnvelope /></a></li>
  </ul>
  )
};

export default NavLinks;
