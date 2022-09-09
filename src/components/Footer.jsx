import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const socialMediaHandler = () => {};
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="contactbar-container py-5 text-center">
      <Container className="p-4">
        <div>
          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <Link to="/" className="py-1 footer-logo">
              N
            </Link>
            <p className="mt-4 text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, repudiandae!
            </p>
            <div className="socail-media mt-4 pb-3">
              <ul className="socail-media-icon">
                <li className="px-1" onClick={socialMediaHandler}>
                  <a
                    href="https://github.com/niratamang70"
                    target="_blank"
                    rel="noreferrer"
                    className="w3_agile_facebook"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className="px-1">
                  <a
                    href="https://www.instagram.com/neera.tamang/"
                    target="_blank"
                    rel="noreferrer"
                    className="w3_agile_facebook"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="px-1">
                  <a
                    href="https://www.linkedin.com/in/nira-tamang-063a1a200/"
                    target="_blank"
                    rel="noreferrer"
                    className="w3_agile_facebook"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li className="px-1">
                  <a
                    href="https://www.facebook.com/neera.tamang76/"
                    target="_blank"
                    rel="noreferrer"
                    className="w3_agile_facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="copy-right text-white mt-5 pt-4">{`© ${year} Nira Tamang. All rights reserved`}</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
