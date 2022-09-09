import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

export const SingleProject = () => {
  const projects = [];
  return (
    <>
      {projects.map(project => (
        <Row className="project-card" key={project.id}>
          <Col lg={5} md={12} className="align-self-center">
            <div>
              <div className="text-center">
                <Image src="" fluid />
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} className="align-self-center offset-lg-1">
            <div className="project-description ">
              <h3>{project.name}</h3>

              <p>{project.description}</p>
              <ul className="single-info">
                <li className="name-style">Tags</li>
                <li>:</li>
                {project.tags.map(tag => (
                  <li>{tag}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
};
