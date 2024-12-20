import React from 'react'
import MainComponents from '../../NavigationBar/NavBar'
import './About.css'
function About() {
  return (
    <div className='About-Div' id='About'>
      <div className="About-container">
        <div className="about-me">About Me</div>
        <div className="discription">
          <p>I am a recently graduated MCA professional with a CGPA of 8.5, looking to join an organization as a Full Stack Developer. My goal is to apply my problem-solving skills and technical knowledge to contribute to successful project completion. I am highly motivated to bring value to your esteemed organization, taking on challenging assignments that foster both personal and professional growth. I am eager to embark on a career path that offers opportunities for continuous learning and development while making meaningful contributions to your team's success.
          </p>
        </div>
        <div className="skils-head">Skills</div>
        <div className="my-skills">
          <ul className='skill-lists'> 
            <li>
              <span>Html</span>
            </li>
            <li>
              <span>Css</span>
            </li>
            <li>
              <span>JavaScript</span>
            </li>
            <li>
              <span>Reactjs</span>
            </li>
            <li>
              <span>Redux</span>
            </li>
            <li>
              <span>jquery</span>
            </li>
          </ul>
          <ul className='skill-lists'> 
            <li>
              <span>Bootstrap</span>
            </li>
            <li>
              <span>Meterial Ui</span>
            </li>
            <li>
              <span>Java</span>
            </li>
            <li>
              <span>Spring Boot</span>
            </li>
            <li>
              <span>MySql</span>
            </li>
            <li>
              <span>Oracle</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About