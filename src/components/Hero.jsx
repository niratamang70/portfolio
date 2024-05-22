import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import nira from '../images/nira.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircle, faSquare, faHeart } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [isActive, setIsActive] = useState(true);
  let navigate = useNavigate();
  const discoverMeHandler = () => {
    navigate('./success', { replace: true });
  };

  return (
    <div className="main ">
      <div className="main-container">
        <Container className="py-md-5 pt-4">
          <Row className="d-flex justify-content-between align-items-center pt-4">
            <Col lg={6} md={12} className="pe-xl-5 ">
              <motion.div
                style={{ width: '0px', height: '0px' }}
                animate={{
                  rotate: isActive ? 360 : 360
                }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <FontAwesomeIcon icon={faStar} style={{ color: 'dodgerblue' }} size="2x" />
              </motion.div>
              <div className="introduction">
                <h4>Hi,I am Nira Tamang</h4>
                <h1 className="mb-3 mt-1">
                  <Typewriter
                    options={{ loop: true, autoStart: true, cursor: '|', cursorClassName: 'cursor' }}
                    onInit={typewriter => {
                      typewriter
                        .typeString('DEVELOPER')
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString('DEVELOPER')
                        .deleteAll()
                        .start();
                    }}
                  ></Typewriter>
                </h1>
                <p className="me-md-3">
                  I love to work in UI/UX designing. I always try my best to make good UI with the best UX.
                </p>

                <div className="d-flex align-items-center mt-4 mt-sm-5 ">
                  <Button
                    variant="primary"
                    className="btn1 me-2"
                    size="lg"
                    style={{ boxShadow: 'none' }}
                    onClick={discoverMeHandler}
                  >
                    Discover Me
                  </Button>
                </div>
                <motion.div
                  animate={{
                    rotate: isActive ? 360 : 360
                  }}
                  transition={{ duration: 40, repeat: Infinity }}
                >
                  <FontAwesomeIcon icon={faCircle} style={{ color: 'peachpuff' }} />
                </motion.div>
                <motion.div
                  style={{ float: 'right' }}
                  animate={{ y: [0, -290, 50, 0] }}
                  transition={{
                    duration: 40,
                    delay: 0.3,
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity
                  }}
                >
                  <FontAwesomeIcon icon={faCircle} style={{ color: 'orange' }} />
                </motion.div>
              </div>
            </Col>
            <Col lg={6} md={12} className="d-none d-lg-block">
              <motion.div
                animate={{ y: [0, 290, 50, 0] }}
                transition={{
                  duration: 50,
                  delay: 0.3,
                  ease: [0.5, 0.5, 0.5, 0.5],
                  repeat: Infinity
                }}
              >
                <FontAwesomeIcon icon={faCircle} style={{ color: 'purple' }} />
              </motion.div>

              <div className="image">
                <motion.div
                  animate={{
                    rotate: isActive ? 360 : 360,
                    y: [30, 0, 350, 0]
                  }}
                  transition={{ duration: 30, repeat: Infinity }}
                >
                  <FontAwesomeIcon icon={faSquare} style={{ color: 'dodgerblue' }} />
                </motion.div>
                {/* <Image src={nira} fluid style={{ width: '100%', height: 'auto' }} /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
