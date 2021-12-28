import React from 'react';
import './Contact.css';
import contact from '../Home/img/contact.jpg'
import emailjs from 'emailjs-com';

function Contact() {
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('gmail', 'template_swbpxrk', e.target, 'user_bVR2zwQFmgsHTWfPxm64N')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return (
        <div id="Contact" className='contact component__space'>
            <div className='row'>
                <div className='col__2'>
                    <div className='contact__box'>
                        <div className='contact__meta'>
                            <h1 className='hire__text'>Contact Me.</h1>
                            <p className='hire__text white'>I am available for freelance work. Connect with me via email:</p>
                            <p className='hire__text white'>email : <b><strong>shubhamagarwal1407@gmail.com</strong></b></p>
                        </div>
                        <div className='input__box'>
                            <form onSubmit={sendEmail}>
                                <input name='name' type="text" className="contact name" placeholder='Your name *' />
                                <input name='email' type="text" className="contact email" placeholder='Your Email *' />
                                <input name='subject' type="text" className="contact subject" placeholder='Write a Subject' />
                                <textarea name="message" id='message' placeholder='Write your message' />
                                <button className='btn contact pointer' type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex mb-4 align__items__center">
                        <a href="https://www.facebook.com/Shub123/" class="fab fa-facebook"></a>
                        <form action="mailto:shubhamagarwal1407@gmail.com"><button class="fab fa-google-plus"></button></form>
                        <a href="https://www.linkedin.com/in/shubham-agarwal-02608069" class="fab fa-linkedin"></a>
                        <a href="https://github.com/shubh1407?tab=repositories" class="fab fa-github"></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
