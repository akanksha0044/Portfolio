import React from 'react'
import './intro.css';

const Intro = () => {
  return (
    <section id='intro'> 
      <div className='introCont'>
        <span className='hello'>Hello,</span>
        <span className='nametxt'>I'm
        <span className='namee'> Akanksha Maurya</span><br/>Web developer</span>
        <p className='intropara'>My expertise spans a wide range of web technologies, including <br/>HTML, CSS, JavaScript, and proficiency in 
        popular frameworks like<br/> ReactJS . I take pride in my ability to turn
         innovative ideas into <br/> functional and visually captivating websites.</p>
        <button className='introbtn'>Hire me</button>
      </div>
      <img className="bgimg" src='ak.png'/>
    </section>
  )
}

export default Intro
