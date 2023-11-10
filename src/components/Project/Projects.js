import React from 'react'
import './project.css';

const Projects = () => {
  return (
    <div className='Project' id="project">
        <span className='Protitle'>Projects Description</span>
      <div className='proOverview'>
        <div className='Des'>
            <div className=''><h2>Google Meet Clone</h2>
            <p className='para desTxt'>Developed a Google Meet clone. The project aimed to
replicate the core functionalities of Google Meet, multiple
participant video calls, user authentication, and responsive
design for seamless usage across devices. </p>
<p className='para desTxt'><b>Technology Used:-</b> Created using ReactJs, Bootsrap , Firebase, Twilio, NodeJs</p>
            </div>
        </div>
        <div className='Des'>
        <div className=''><h2>News Monkey</h2>
        <p className='para desTxt'>
        This News Web Application seamlessly integrates with an
API to fetch and deliver up-to-the-minute news updates, ensuring that users have access to the most current and
relevant information available. 
        </p>
        <p className='para desTxt'><b>Technology Used:-</b> Made using ReactJS, JavaScript, and
Bootstrap.</p>
        </div>
        </div>
        
      </div>
      <div className='otherProject'>
        <h2 className=''>Other Work</h2>
        <p className='para desTxt'><b>Text Analyzer:-</b>This sophisticated website employs advanced text analysis
capabilities, empowering users to effortlessly manipulate
and interact with textual content. </p>
<p className='para desTxt'><b>Link:- </b> <a className='link' href="https://akanksha0044.github.io/text-analyze/"  target="_blank">https://akanksha0044.github.io/text-analyze/</a></p>
<p className='para desTxt'><b>Social Media website:-</b>This website showcases my user interface (UI) and user experience (UX) design work, along with the integration of various functions to enhance its functionality</p>
<p className='para desTxt'><b>Link:- </b> <a className='link' href="https://akanksha0044.github.io/Social-media/"  target="_blank">https://akanksha0044.github.io/Social-media/</a></p>
      </div>
    </div>
  )
}

export default Projects
