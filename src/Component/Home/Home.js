import React, { useState } from 'react';
import './Home.css';
import logo from './img/InnovTeam-logos.jpeg';
import Typical from 'react-typical';

function Home() {

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 0)
    });
    const [show, setShow] = useState(true);
    return (
        <div id="Home" className='home'>
            <div className='home__bg'>
                <div className='header d__flex align__items__center'>
                    <div className='logo'>
                        <img src={logo} alt=''></img>
                    </div>
                    <div className='navigation'>
                        <ul className='navbar d__flex ulNav'>
                            <a href='#Home'><li className='nav__items mx__15'>Home</li></a>
                            <a href='#About'><li className='nav__items mx__15'>About</li></a>
                            <a href='#Resume'><li className='nav__items mx__15'>Resume</li></a>
                            <a href='#Skills'><li className='nav__items mx__15'>Skills</li></a>
                            {/* <a href='#Members'><li className='nav__items mx__15'>Members</li></a> */}
                            <a href='#Contact'><li className='nav__items mx__15'>Contact</li></a>

                        </ul>
                    </div>
                    <div className="toggle__menu">
                        <svg onClick={() => setShow(!show)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-justify white pointer"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </div>
                    {show ? (
                        <div className="sideNavbar">
                            <ul className="sidebar d__flex">
                                <li className="sideNavbar">
                                    <a href="#Home">Home</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#About">About</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Resume">Resume</a>
                                </li>
                                <li className="sideNavbar">
                                     <a href="#Skills">Skills</a>
                                </li>
                                {/* <li className="sideNavbar">
                                    <a href="#Members">Members</a>
                                </li> */}
                                <li className="sideNavbar">
                                    <a href="#Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    ) : null}
                </div>
                {/* Home Content */}
                <div className='container'>
                    <div className='home__content'>
                        <div className='home__meta'>
                            <h1 className='home__text pz__10'>
                                WELCOME TO  INNOVTEAM WORLD
                            </h1>
                            <h2 className='home__text pz__10'>
                                Hi, I'm Shubham Agarwal
                            </h2>
                            <h3 className='home__text sweet'>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Ethusiastic Developer.",
                                        1000,
                                        "Full Stack Developer.",
                                        1000,
                                        "Spring Boot Developer.",
                                        1000,
                                        "Freelancer Developer.",
                                        1000,
                                    ]} />
                            </h3>
                            <div className="d-flex mb-4 align__items__center">
                                <a href="https://www.facebook.com/Shub123/" class="fab fa-facebook"></a>
                                <form action="mailto:shubhamagarwal1407@gmail.com"><button class="fab fa-google-plus"></button></form>
                                <a href="https://www.linkedin.com/in/shubham-agarwal-02608069" class="fab fa-linkedin"></a>
                                <a href="https://github.com/shubh1407?tab=repositories" class="fab fa-github"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
