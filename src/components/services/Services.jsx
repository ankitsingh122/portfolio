import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I can use it for making design of website</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I can use it for making design of website</p>

              </li>
              <li>
           
              <BiCheck className='service_list-icon'/>
              <p>I can use it for making design of website</p>
              </li>

              <li>
           
              <BiCheck className='service_list-icon'/>
              <p>I can use it for making design of website</p>
              </li>

              <li>
           
              <BiCheck className='service_list-icon'/>
              <p>I can use it for making design of website</p>
              </li>
       
          </ul>
          
        </article>


        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I am able to make a great  website using html css and javascript</p>
              </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I am able to make a great  website using html css and javascript</p>
              </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I am able to make a great  website using html css and javascript</p>
              </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I am able to make a great  website using html css and javascript</p>
              </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I am able to make a great  website using html css and javascript</p>
       </li>
          </ul>
          
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Poster Making</p>
              </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Poster Making</p>
              </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Poster Making</p>
              </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Poster Making</p>
              </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Poster Making</p>
              </li>
       
          </ul>
          
        </article>
      </div>
    </section>
  )
}

export default services
