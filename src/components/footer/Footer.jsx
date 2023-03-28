import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import { FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
   <footer>
      <a href="#" className='footer-logo'>Thank You</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
         </ul>

         <div className='footer_socials'>
          <a href="https://www.instagram.com/jerry_dxfire/"><FiInstagram/></a>
          <a href="https://www.facebook.com/profile.php?id=100008424760111"><FaFacebookF/></a> 
          <a href="https://twitter.com/jerry_85255?s=21&t=FQZaEStq_EL1tGUW64qt8A"><IoLogoTwitter/></a>        
          </div>

          <div className="footer_copyrights">
            <small>&copy;Portfolio. All rights reserved</small>
          </div>

    </footer>
  )
}

export default Footer
