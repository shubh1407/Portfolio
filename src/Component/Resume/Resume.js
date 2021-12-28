import React from 'react';
import './Resume.css';

export default function Resume() {
    return (
        <div className="container-fluid py-5" id="Resume">
            <div className="container component__space">
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}></h1>
                    <h1 className="text-uppercase text-primary">Education &amp; Expericence</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="mb-4">My Education</h3>
                        <div className="border-left border-primary pt-2 pl-4 ml-2">
                            <div className="position-relative ex-me mb-4">
                                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }} />
                                <h5 className="font-weight-bold mb-1">Bachelor of Technology (CS)</h5>
                                <p className="mb-2"><strong>Kamla Nehru Institue Of Technology</strong> | <small>2013 - 2017</small></p>
                                <p>
                                    It is Govt. autonomous technical institute which is affiliated by Dr. APJ Abdul Kalam Technical University.I completed my Bachelor of Technology (CS) with Hons. in 2017.
                                </p>
                            </div>
                            <div className="position-relative ex-me mb-4">
                                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }} />
                                <h5 className="font-weight-bold mb-1">Secondary School</h5>
                                <p className="mb-2"><strong>Agra Public School</strong> | <small>2011 - 2012</small></p>
                                <p>
                                    I passed my secondary school with 73% from C.B.S.E board affilated Agra Public School in 2012.
                                </p>
                            </div>
                            <div className="position-relative ex-me mb-4">
                                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }} />
                                <h5 className="font-weight-bold mb-1">High School</h5>
                                <p className="mb-2"><strong>Holy Public School</strong> | <small>2009 - 2010</small></p>
                                <p>I passed my high school with 86% from C.B.S.E board affilated Holy Public School in 2010.</p></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="mb-4">My Expericence</h3>
                        <div className="border-left border-primary pt-2 pl-4 ml-2">
                            <div className="position-relative ex-me mb-4">
                                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }} />
                                <h5 className="font-weight-bold mb-1">Senior Software Engineer</h5>
                                <p className="mb-2"><strong>Xoriant</strong> | <small> 11-2021 - Present</small></p>
                                <p> Working as a Senior Software Engineer at Xoriant in Finance Model Risk Management Team
                                </p> </div>
                            <div className="position-relative ex-me mb-4">
                                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }} />
                                <h5 className="font-weight-bold mb-1">Senior Engineer</h5>
                                <p className="mb-2"><strong>Nagarro</strong> | <small> 01-2021 - 11-2021</small></p>
                                <p>Worked as Senior Engineer to make customization and solve issues for Ecommerce Supply Chain Module.</p>
                            </div>
                            <div className="position-relative ex-me mb-4">
                                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }} />
                                <h5 className="font-weight-bold mb-1">Software Developer</h5>
                                <p className="mb-2"><strong>Amdocs</strong> | <small>11-2018 - 01-2021</small></p>
                                <p>Worked as Software Developer to customize Account Recievable Billing Module and solve UAT, production Issues and took part in system design meetings. </p>
                            </div>
                            <div className="position-relative ex-me mb-4">
                                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }} />
                                <h5 className="font-weight-bold mb-1">Software Engineer</h5>
                                <p className="mb-2"><strong>Telemune</strong> | <small>11-2018 - 01-2021</small></p>
                                <p>Worked as a full stack developer in Telemune for various Telecom domain projects,Here I worked on Java, Struts, Spring , AngularJS techstack to develop various User Platforms </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
