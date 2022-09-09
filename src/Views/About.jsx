import React from 'react';
import { useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import Qualifications from '../components/Qualifications';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mt-lg-0 mt-5">
        <AboutMe />
        <Qualifications />
      </div>
    </>
  );
};

export default About;
