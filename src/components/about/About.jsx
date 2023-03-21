import React from 'react'
import './about.css'
import ME from '../../assests/ankit3.jpg'
import {BsAward} from 'react-icons/bs'
import {FaLanguage} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
     <div className="container about_container"> 
      <div className="about_me">
        <div className="about_me-image">
          <img src= {ME} alt= "About Image" />
           </div>
      </div> 
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <BsAward className='about_icon'/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>
          <article className='about_card'>
            <FaLanguage className='about_icon'/>
            <h5>Programming Language</h5>
            <small>5+ languages</small>
          </article>
          <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Project</h5>
            <small>10+ Completed</small>
          </article>
        </div>
        <p>
          Hey how are you!!!
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>


      </div>
       </section>
 
  )
}

export default about

