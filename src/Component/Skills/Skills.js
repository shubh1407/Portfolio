import React from 'react';
import './Skills.css';
import { ProgressBar } from 'react-bootstrap';

export default function Skills() {
    return (
        <div className="container-fluid py-5" id="Skills">
        <div className="container component__space">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="text-uppercase text-primary">My Skills</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Java</h6>
                  <h6 className="font-weight-bold">4 Years</h6>
                </div>
                <ProgressBar now={90} />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Spring Framework</h6>
                  <h6 className="font-weight-bold">3 years</h6>
                </div>
                <ProgressBar now={80} />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Spring Boot</h6>
                  <h6 className="font-weight-bold">2.5 Years</h6>
                </div>
                <ProgressBar now={75} />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Python/Pytorch</h6>
                  <h6 className="font-weight-bold">1-2 years</h6>
                </div>
                <ProgressBar now={60} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Javascript</h6>
                  <h6 className="font-weight-bold">1-2 years</h6>
                </div>
                <ProgressBar now={60} />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Angular JS</h6>
                  <h6 className="font-weight-bold">1-2 years</h6>
                </div>
                <ProgressBar now={60} />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">React JS</h6>
                  <h6 className="font-weight-bold">0.6 year</h6>
                </div>
                <ProgressBar now={40} />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Jenkins/CI-CD pipeline</h6>
                  <h6 className="font-weight-bold">1 year</h6>
                </div>
                <ProgressBar now={70} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
