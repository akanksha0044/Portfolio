import React from 'react';
import './skill.css';

const Skill = () => {
  return (
    <div className='skill' id="skill">
      <span className='skilltitle'>What I do</span>
      <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing <br/>& user-friendly
      websites.I have a strong understanding of design and a keen eye for detail. <br/>I am proficient in <b>HTML , CSS , ReactJS , Javascript </b> and also have knowledge of<b> Mongodb, MySql </b>. </span>
      <div className='skillbars'>
          <div className='skillbar'><img className='ui' src="/uiLogo.png"/>
          <div className='skillBarTxt'><h2>UI/UX designer</h2>
          <p className='para'>I specialize in the design of user interfaces (UI) that are not only aesthetically pleasing but also highly functional and intuitive.</p></div>
          </div>
          <div className='skillbar'><img className='web' src="/webde.jpg"/>
           <div className='skillBarTxt'>
            <h2>Frontend Developer</h2>
            <p className='para'>I am frontend developer with experience buliding responsive and optimized sites. </p>
            </div>
            </div>
          
      </div>
      <span className='skilltitle'>Skills</span>
      <div className='skill2'>
       <div className='skillimg'>
        <img className='imges' alt='' src='./Html.png'/>
        <span>HTML</span>
        <img className='imges' alt='' src='./Css.png'/>
        <span>CSS</span>
        <img className='imges' alt='' src='./React.png'/>
        <span>ReactJS</span>
       </div>
        <div className='skillimg'>
        <img className='imges' alt='' src='./sql.png'/>
        <span>SQL</span>
        <img className='imges' alt='' src='./Mongo.png'/>
        <span>Mongodb</span>
        <img className='imges' alt='' src='./Node.png'/>
        <span>NodeJS</span>
        </div>
        <div className='skillimg'>
        <img className='imges' alt='' src='./Git.png'/>
        <span>Github</span>
        <img className='imges' alt='' src='./JS.png'/>
        <span>Javascript</span>
        <img className='imges' alt='' src='./Cpp.png'/>
        <span>C++</span>
        </div>

      
      </div>
    </div>
  )
}

export default Skill
