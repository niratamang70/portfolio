import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/resume.pdf';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  const handleResume = () => {
    window.open(resume, '_blank');
  };

  const handleHireMe = () => {
    window.open('https://www.linkedin.com/in/nira-tamang/', '_blank');
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
        <Container className="d-flex align-items-center">
          <Navbar.Brand href="#" className="fw-bolder">
            <Link to="/" className="py-1 logo">
              Nira Tamang
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="toggle-icon"
            style={{ boxShadow: 'none' }}
            onClick={toggleHandler}
          >
            <FontAwesomeIcon icon={toggle ? faXmark : faBars} className="toggle-btn" />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto text-center" navbarScroll>
              <Nav.Item className="px-4">
                <Link to="/about" className="text-decoration-none nav-items">
                  About
                </Link>
              </Nav.Item>
              {/* <Nav.Item className="px-4">
                <Link to="/" className="text-decoration-none nav-items">
                  Projects
                </Link>
              </Nav.Item> */}
              <Nav.Item className="px-4" onClick={handleResume}>
                <Link className="text-decoration-none nav-items">Resume</Link>
              </Nav.Item>
            </Nav>
            <Button variant="outline-primary" className="rounded-pill px-4" onClick={handleHireMe}>
              Hire me
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
