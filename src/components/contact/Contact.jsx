import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m91dbhd', 'template_k7kuruj', form.current, 'x2erv9poqiSzIBxhB')
     e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in the Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
      <div className="contact_options">
      <article className='contact_option'>
        <MdOutlineMail className='contact_option-icon'/>
        <h4>Email</h4>
        <h5>ankitsinghasingh007@gmail.com</h5>
        <a href="mailto:ankitsinghasingh007@gmail.com" target = "_blank">Send a Message</a>

         </article>
         <article className='contact_option'>
        <BsMessenger className='contact_option-icon'/>
        <h4>Messenger</h4>
        <h5>Ankit Singh</h5>
        <a href="https://m.me/profile.php?id=100008424760111">Send a Message</a>

         </article>
         <article className='contact_option'>
        <BsWhatsapp className='contact_option-icon'/>
        <h4>Whatsapp</h4>
        <h5></h5>
        <a href="https://api.whatsapp.com/send?phone=+917880343895">Send a Message</a>

         </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name= 'name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required  />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
      </section>
  )
}

export default Contact
