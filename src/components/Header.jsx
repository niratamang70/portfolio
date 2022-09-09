import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 16) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
  }, []);
  return (
    <>
      <Navbar expand="lg" className={`${isScroll ? 'navbar-header' : 'no-navbar-header'} nav-bar`} fixed="top">
        <Container>
          <Navbar.Brand href="#" className="fw-bolder">
            <Link to="/" className="py-1 logo">
              N
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="toggle-icon"
            style={{ boxshadow: 'none' }}
            onClick={toggleHandler}
          >
            <FontAwesomeIcon icon={toggle ? faXmark : faBars} className="toggle-btn" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="  justify-content-end flex-grow-1 pe-3 fw-bold text-center " navbarScroll>
              <Nav.Item className="px-4">
                <Link to="/" className="text-decoration-none nav-iems">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item className="px-4">
                <Link to="/about" className="text-decoration-none nav-iems">
                  About
                </Link>
              </Nav.Item>
              <Nav.Item href="#action2" className="px-4">
                <Link to="/projects" className="text-decoration-none nav-iems">
                  Projects
                </Link>
              </Nav.Item>
              <Nav.Item href="#action2" className="px-4">
                <Link to="/contact" className="text-decoration-none nav-iems">
                  Contact
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
