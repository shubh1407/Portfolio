import React from 'react';
import './About.css';
import aboutImg from '../Home/img/profile.jpg';
import pdfFile from '../About/shubham-resume.pdf';
function About() {
    window.addEventListener("scroll", function(){
        const upToTop = document.querySelector("a.bottom__to__top");
         upToTop.classList.toggle("active", window.scrollY > 0)
      });
    return (
        <div id="About" className='about component__space'>
            <div className='container'>
                <div className='row'>
                    <div className='col__2'>
                        <img src={aboutImg} alt="" className='about__img'></img>
                    </div>
                    <div className='col__2'>
                        <h1 className='about__heading'>
                            About Me
                        </h1>
                        <div className='about__meta'>
                            <p className='about__text p__color'>
                                Hello, I'm Shubham Agarwal,currently working as a Senior Software Engineer at Xoriant in Finance Model Risk Management Team.I have Bachlor of technology Degree in CS from KNIT Sultanpur.
                            </p>
                            <p className='about__text p__color'>
                                Previously, I worked at E-commerce Banckend team in Nagarro as a Senior Engineer, where I worked on Java 8, Spring boot and Rest Apis.
                            </p>
                            <p className='about__text p__color'>
                                I also worked as a Software Developer in Amdocs for Billing Project where I worked on Account Recievable module which handles all financial activities for telecom user.
                            </p>
                            <p className='about__text p__color'>
                                I also worked as a full stack developer in Telemune for various Telecom domain projects,Here I worked on Java, Struts, Spring , AngularJS techstack to develop various User Platforms.
                            </p>
                            <p className='about__text p__color'>
                                I am keen interested in learning new things.
                            </p>
                            <p className='about__text p__color'>
                                We, <b>InnovTeam</b> always believe <i>"One Innovative Idea can change life of thousands."</i> and always trying to implement new ideas using latest technologies.
                            </p>
                            <div className="about__button d__flex align__items__center">
                            <a href={pdfFile} download="shubham.pdf">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Contact Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
      <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
    )
}

export default About
