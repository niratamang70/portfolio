import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import nira2 from '../images/nira2.jpg';

const AboutMe = () => {
  const handleCVDownload = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/niraTamangCvUpdated.pdf`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'niraTamangCv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="about-me-container">
      <Container>
        <Row className="about-me align-items-center">
          <Col lg={4} md={12}>
            <div>
              <Image src={nira2} fluid rounded className="about-me-image" />
            </div>
          </Col>
          <Col lg={8} md={12} className="ps-lg-5 mt-lg-0 mt-5">
            <div className="about-me-description">
              <h5 className="mb-1">MY INTRO</h5>
              <h3>About Me</h3>
              <p className="mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam eius obcaecati nisi voluptate incidunt
                reprehenderit. Ea blanditiis veritatis dolores? Alias quos repellat optio enim totam! Nam totam neque
                accusamus assumenda?
              </p>
              <div className="my-info mt-md-5 mt-4">
                <ul className="single-info">
                  <li className="name-style">Name</li>
                  <li>:</li>
                  <li>
                    <p>Nira Tamang</p>
                  </li>
                </ul>
                <ul className="single-info">
                  <li className="name-style">Age</li>
                  <li>:</li>
                  <li>
                    <p>24</p>
                  </li>
                </ul>
                <ul className="single-info">
                  <li className="name-style">From</li>
                  <li>:</li>
                  <li>
                    <p>Sindhupalchowk,Nepal</p>
                  </li>
                </ul>
                <ul className="single-info">
                  <li className="name-style">Email</li>
                  <li>:</li>
                  <li>
                    <p>neera678@gmail.com</p>
                  </li>
                </ul>
              </div>
              <Button className="mt-5" onClick={handleCVDownload}>
                Download CV
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
