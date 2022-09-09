import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mt-lg-0 mt-5">
        <div className="contact-container py-5">
          <Container className="py-lg-5 py-5">
            <div className="contact-header text-center mb-sm-5 mb-4">
              <h5 className="fw-bold text-primary">GET IN TOUCH</h5>
              <h3 className="fw-bolder">Contact Me</h3>
            </div>
            <Row>
              <Col lg={6} md={6} className="pe-lg-5 contact-left">
                <h3 className="mb-sm-4 mb-3">Contact Info</h3>
                <div className="contact-details">
                  <p>
                    <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
                    <p className="details mb-0">Kathmandu, Nepal</p>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} className="contact-icon" />{' '}
                    <p className="details hover-effect mb-0">+977........</p>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                    <p className="details hover-effect  mb-0">neera@gmail.com</p>
                  </p>
                </div>
                <h4 className="mb-3 mt-5">Follow Me</h4>
                <ul className="social-media-icon ">
                  <li>
                    <FontAwesomeIcon icon={faInstagram} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faGithub} />
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFacebook} />
                  </li>
                </ul>
              </Col>
              <Col lg={6} md={6} className="mt-md-0 mt-5 ps-lg-0">
                <form action="">
                  <div className="inputs">
                    <input type="text" name="name" placeholder="Full Name" className="contact-input" />
                    <input type="email" name="email" placeholder="Email" className="contact-input" />
                    <textarea type="text" name="message" placeholder="Your message" className="contact-input" />
                  </div>
                  <Button varient="primary">Submit</Button>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Contact;
