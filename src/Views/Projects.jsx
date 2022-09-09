import React, { useEffect } from 'react';
import Project from '../components/Project';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mt-lg-0 mt-5">
        <Project left={true} />
      </div>
    </>
  );
};

export default Projects;
