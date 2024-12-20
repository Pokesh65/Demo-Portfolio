import React from 'react'
import MainComponents from '../../NavigationBar/NavBar'
import './Home.css';

function Home() {
  return (
    <div className='Home-Div' id='Home'>
      <div className='Home-Container'>

        <div className="text-heading">
          <h2 className='welcome-text'>Welcome to My Portfolio!</h2>
          {/* <p>Hi, I’m <span>Pokesh Kumar</span></p> */}
          <p>Hi, I'm <span>Pokesh Kumar</span>, a Java Full Stack Developer skilled in front-end technologies like HTML, CSS, JavaScript, and React.js, and back-end expertise in Java, Spring Boot, SQL, and Oracle. I’m passionate about building responsive interfaces and robust backend systems for seamless user experiences.</p>
        </div>
        <div className="profile">
        <img src="Assets/pos.jpg" alt="frds" className='Profile-img'/>
        </div>
      </div>
    </div>
  )
}

export default Home