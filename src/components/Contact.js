import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const fade = {
        opacity: 1,
        transition:{
            duration: 1.5
        }
    }

    const verticalLeft = {
        opacity: 1,
        y: 0,
        transition:{
            duration: 1.5
        }
    }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_zadrrj2", "template_wxxipbw", form.current, {
          publicKey: "lsHRVAtP38ESd1EXs",
        })
        .then(
          () => {
            alert("Mensaje Enviado!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };


  return (
      <>
        <div className="contact" id='contact'>
            <div className="container">
                <motion.div className="heading" initial={{opacity: 0}} whileInView={fade} viewport={{ once: true }}>
                    <p className="heading-sub-text">Cómo</p>
                    <p className='heading-text'>Contactarme</p>
                </motion.div>
                <div className="contact-box">
                    <motion.div className="left-box" initial={{opacity: 0, y: '-50px'}} whileInView={verticalLeft}>
                        <div className="contact-heading">
                            <p>Estoy interesado en oportunidades de trabajo remotos o presenciales, especialmente con proyectos ambiciosos o de gran envergadura.
                            Si tenés alguna pregunta en particular, no dudes en consultarme. </p>
                        </div>
                        <div className="contact-hello">
                            <p>Decime Hola</p>
                            <a className='hello-links' href="https://wa.me/1160366102?text=I%27m%20interested%20in%20your%20car%20for%20sale" target='_blank'>Mi Whatsapp</a>
                            <a className='hello-links' href="email:ghmontes92@gmail.com" target='_blank' rel="noreferrer">ghmontes92@gmail.com</a>
                        </div>
                    </motion.div>
                    <motion.div className="right-box" initial={{opacity: 0, y: '50px'}} whileInView={verticalLeft}>
                    
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="hidden" name="form-name" value="contact-form" />
                            <div className="form-top">
                            <div className="name">
                                <label htmlFor="name">Tu Nombre</label>
                                <input
                                type="text"
                                name="user_name"
                                id="name"
                                placeholder="Introduce tu nombre"
                                required
                                />
                            </div>

                            <div className="email">
                                <label htmlFor="email">Tu Email</label>
                                <input
                                type="email"
                                name="user_email"
                                id="email"
                                placeholder="Introduce tu email"
                                required
                                />
                            </div>
                            </div>

                            <div className="form-mid">
                            <div className="message">
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Escribre tu mensaje"
                                required
                                ></textarea>
                            </div>
                            </div>

                            <div className="form-btn">
                            <button type="submit" value="Send" className="hero-contact">
                                Enviar Mensaje
                            </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;
