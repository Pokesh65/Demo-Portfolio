import React, { useState } from 'react'
import './Projects.css'

function Projects() {

  return (
    <div className='Projects-div' id='Project'>
        <div className="projects-container">
            <div className="projectBox">
                <div className="project-title">Food restaurant website</div>
                <video id='Video-tag' className='project-viodes' controls><source src="Assets/FoodRestaurant.mp4" type="video/mp4" /></video>
                <div className="project-details">
                My Food Restaurant Website Project! Five months ago, I built a responsive Food
Restaurant Website using HTML and CSS, offering a seamless experience across all
devices. It features a clean layout, interactive menu sections, a hero banner with
vibrant visuals, and contact details with Google Maps integration. With CSS
animations, hover effects, and responsive design, it ensures a user-friendly
experience on mobile, tablet, and desktop. This project reflects my passion for
creating engaging and accessible web solutions.
                </div>
            </div>
            <div className="projectBox">
                <div className="project-title">student data management system</div>
                <video id='Video-tag' className='project-viodes' controls><source src="Assets/ProjectStudentReg.mp4" type="video/mp4" /></video>
                <div className="project-details">
                STUDENT DATA MANAGEMENT WEB APPLICATION WITH COMPREHENSIVE CRUD
AND FORM VALIDATION, Developed a Student Registration web application
featuring robust form validation and complete CRUD (Create, Read, Update,
Delete) functionality for efficient student profile management. The application
provides a responsive and user-friendly interface designed using HTML, CSS,
Bootstrap, React.js, and Material-UI, ensuring accessibility across devices. On the
backend, utilized Java Spring Boot and MySQL to build a scalable architecture.
Implemented RESTful APIs to seamlessly integrate the frontend and backend,
enabling efficient data handling and operations
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects