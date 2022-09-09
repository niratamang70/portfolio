import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Timeline from '../components/Timeline';
import Experience from './Experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSuitcase } from '@fortawesome/free-solid-svg-icons';

const Qualifications = () => {
  return (
    <div className="qualification-container">
      <Container className="text-center">
        <h5 className="fw-bold text-primary">RESUME</h5>
        <h1 className="fw-bolder">Awesome Journey</h1>
        <Row style={{ marginTop: '80px' }}>
          <Col lg={6} md={12} sm={12} className="mb-md-5 mb-sm-5 ">
            <div>
              <div className="justify-content-start d-flex ">
                <FontAwesomeIcon icon={faGraduationCap} size="xl" className="resume-font" />
                <p className="text-left" style={{ marginLeft: '20px', fontSize: '18px', fontWeight: 'bold' }}>
                  Education
                </p>
              </div>

              <Timeline />
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div>
              <div className="justify-content-start d-flex ">
                <FontAwesomeIcon icon={faSuitcase} size="xl" className="resume-font" />
                <p className="text-left" style={{ marginLeft: '20px', fontSize: '18px', fontWeight: 'bold' }}>
                  Education
                </p>
              </div>
              <Experience />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Qualifications;
