import React,{useRef} from 'react'
import "./contact.css";
import emailjs, { send } from '@emailjs/browser';
const Contact = () => {
 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pwlrx5k', 'template_9kg7w5c', form.current, 'XvBobKoBOy_yaP2Zc')
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact' id="contact" >
        <span className='contactTitle'>Contact</span>
        <span className='contactDesc'>Please fill out the form to discuss any work opportunies</span>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='Your name' className='name' name='user_name'/>
          <input type='email' placeholder='Your Email' className='email' name='user_email'/>
          <textarea placeholder='write your msg' rows={5} className='msg' name='message'></textarea>
          <button className='formbtn' type='submit' value={send}>Submit Button</button>
        </form>
        <div className='images'>
     <a href='https://www.instagram.com/_priya_maurya_8/' target='blank'><img className="logo"  src='./insta.png' alt='' /></a>     
       <a href='https://github.com/akanksha0044' target='blank'><img className="logo" src='./Git.png' alt=''/></a>   
         <a href='https://www.linkedin.com/in/akanksha-maurya-88987a192/' target='blank'><img className="logo" src='./inkedin.png' alt=''/></a> 

        </div>
      
    </div>
  )
}

export default Contact
