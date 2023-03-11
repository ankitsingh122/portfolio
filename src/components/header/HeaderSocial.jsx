import React from 'react'
import  {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ankit-singh-951b311b6/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/jerry_dxfire/"target="_blank"><BsInstagram/></a>
        <a href="https://github.com/ankitsingh122" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial
