import React, { useState } from 'react'
import './navbar.css';
const Navbar = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1AGmLFb3VxdW0XLUvfO4b_vxi3Pqvgk_-/view?usp=drivesdk';
  const resumeFileName = 'Akanksha_resume.pdf';
  const[ShowMenu,setshowMenu]=useState(false);
  return (
    <div>
      <nav className='navbar' >
      <p>Akanksha Maurya</p>
      <div className='menu'>
       <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#project'>Project</a></li>
        <li><a href='#skill'>Skills</a></li>
        <li><a href='#contact'>Contact</a></li>
       </ul>
      </div>
    <button className='btn'>  <a className='cv' href={resumeUrl} download={resumeFileName} rel='noreferrer' target='_blank'>Download Resume</a></button>  
   


      <img src='./menu.jpg'  alt="" className='mobMenu' onClick={()=>setshowMenu(!ShowMenu)}/>
      <div className='navMenu' style={{display:ShowMenu? 'flex':'none'}}>
       <ul>
        <li><a href='#home' onClick={()=>setshowMenu(false)}>Home</a></li>
        <li><a href='#project' onClick={()=>setshowMenu(false)}>Project</a></li>
        <li><a href='#skill' onClick={()=>setshowMenu(false)}>Skills</a></li>
        <li><a href='#contact' onClick={()=>setshowMenu(false)}>Contact</a></li>
       </ul>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
