import React from 'react'
import './experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience_container">
     <div className="experience_frontend">
      <h3>Frontend Development</h3>
      <div className="experience_content">
        <article className='experience-details'>
          <HiBadgeCheck className='experience_details-icons' />
         <div>
         <h4>HTML</h4>
          <small className='text-light'>Expert</small>
         </div>
        </article>
        <article className='experience-details'>
          <HiBadgeCheck className ='experience_details-icons'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermidiate</small>
          </div>
        </article>
        <article className='experience-details'>
          <HiBadgeCheck className='experience_details-icons'/>
          <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Expert</small>
          </div>
        </article>
        <article className='experience-details'>
          <HiBadgeCheck className='experience_details-icons'/>
         <div>
         <h4>Bootstrap</h4>
          <small className='text-light'>Expert</small>
         </div>
        </article>

      </div>
      
      </div> 
      <div className="experience_backend">
      <h3>Programming Languages</h3>
      <div className="experience_content">
        <article className='experience-details'>
          <HiBadgeCheck className='experience_details-icons'/>
          <div>
          <h4>JAVA</h4>
          <small className='text-light'>Expert</small>
          </div>
        </article>
        <article className='experience-details'>
          <HiBadgeCheck className='experience_details-icons' />
         <div>
         <h4>C++</h4>
          <small className='text-light'>Intermidiate</small>
         </div>
        </article>
        <article className='experience-details'>
          <HiBadgeCheck className='experience_details-icons' />
          <div>
          <h4>Python</h4>
          <small className='text-light'>Expert</small>
          </div>
        </article>
        <article className='experience-details'>
          <HiBadgeCheck className='experience_details-icons'/>
          <div>
          <h4>Bash</h4>
          <small className='text-light'>Expert</small>
          </div>
        </article>

      </div>

      </div>
    </div>

    
    </section>
    
  )
}

export default experience
