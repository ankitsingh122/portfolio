import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
const nav = () => {
  return (
    <nav>
     <a href="active"><AiOutlineHome/></a>
     <a href="#about"><BiUserCircle/></a>
     <a href="#expercience"><BiBook/></a>
     <a href="#services"><RiServiceLine/></a>
     <a href="#contact"><AiOutlineMessage/></a>
    </nav>
  )
}

export default nav
