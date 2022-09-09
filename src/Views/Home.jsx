import React, { useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Qualifications from '../components/Qualifications';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-lg-0 mt-5">
      <Hero />
      <Qualifications />
      <AboutMe />
      <Project />
    </div>
  );
};

export default Home;
