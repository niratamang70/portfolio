import React from 'react';
import { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import tcm from '../images/tcm.png';
import meyco from '../images/meyco.png';
import store from '../images/store.png';
const projects = [
  {
    id: '1',
    name: 'test mink',
    description:
      'App Allow To Select Different Color Palette With Custom Add Color Features Where User Can Create Their Library.',
    image: tcm,
    tags: ['Reactjs', 'Redux', 'React Toolkit Query', 'Redux']
  },
  {
    id: '2',
    name: 'himalaya general insurance',
    description:
      'App Allow To Select Different Color Palette With Custom Add Color Features Where User Can Create Their Library.',
    image: tcm,
    tags: ['Reactjs', 'Redux', 'React Toolkit Query', 'Redux']
  },
  {
    id: '3',
    name: 'Meyco Poolcovers',
    description:
      'App Allow To Select Different Color Palette With Custom Add Color Features Where User Can Create Their Library.',
    image: tcm,
    tags: ['Reactjs', 'Redux', 'React Toolkit Query', 'Redux']
  }
];

const Project = ({ left }) => {
  return (
    <div className="project-container">
      <Container>
        <h5 className={`fw-bold text-primary ${left ? 'text-left' : 'text-center'}`}>MY WORKS</h5>
        <h1 className={`fw-bolder  ${left ? 'text-left' : 'text-center'}`}>Some of my most recent projects</h1>

        <Row className="project-card">
          <Col lg={5} md={12} className="align-self-center ">
            <div>
              <div className="text-center">
                <Image src={tcm} fluid />
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} className="align-self-center offset-lg-1 mt-lg-0 mt-5">
            <div className="project-description ">
              <h3>Test Mink</h3>

              <p>
                App Allow To Select Different Color Palette With Custom Add Color Features Where User Can Create Their
                Own Color Palette. Built In Plain React Native Using React Navigation Library.
              </p>
              <ul className="tag-info single-info">
                <li className="name-style">Tags</li>
                <li>:</li>
                <li>
                  <p>Reactjs</p>
                </li>
                <li>
                  <p>React Tollkit Query</p>
                </li>
                <li>
                  <p>Rest Api</p>
                </li>
                <li>
                  <p>Rest Api</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="project-card">
          <Col lg={5} md={12} className="align-self-center order-lg-last">
            <div>
              <div className="text-center">
                <Image src={meyco} fluid />
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} className="align-self-center offset-lg-1 mt-lg-0 mt-5">
            <div className="project-description ">
              <h3>meyco poolcovers</h3>
              <p>
                App Allow To Select Different Color Palette With Custom Add Color Features Where User Can Create Their
                Own Color Palette. Built In Plain React Native Using React Navigation Library.
              </p>
              <ul className="tag-info single-info">
                <li className="name-style">Tags</li>
                <li>:</li>
                <li>
                  <p>Reactjs</p>
                </li>
                <li>
                  <p>React Tollkit Query</p>
                </li>
                <li>
                  <p>Rest Api</p>
                </li>
                <li>
                  <p>Redux</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="project-card">
          <Col lg={5} md={12} xs={12} className="align-self-center ">
            <div>
              <div className="text-center">
                <Image src={store} fluid />
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} xs={12} className="align-self-center offset-lg-1 mt-lg-0 mt-5">
            <div className="project-description ">
              <h3>Boa fresh food</h3>
              <p>
                App Allow To Select Different Color Palette With Custom Add Color Features Where User Can Create Their
                Own Color Palette. Built In Plain React Native Using React Navigation Library.
              </p>
              <ul className="tag-info single-info">
                <li className="name-style">Tags</li>
                <li>:</li>
                <li>
                  <p>Reactjs</p>
                </li>
                <li>
                  <p>React Tollkit Query</p>
                </li>
                <li>
                  <p>Rest Api</p>
                </li>
                <li>
                  <p>Redux</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="project-card">
          <Col lg={5} md={12} xs={12} className="align-self-center order-lg-last ">
            <div>
              <div className="text-center">
                <Image src={meyco} fluid />
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} xs={12} className="align-self-center offset-lg-1 mt-lg-0 mt-4 ">
            <div className="project-description ">
              <h3>meyco poolcovers</h3>
              <p>
                App Allow To Select Different Color Palette With Custom Add Color Features Where User Can Create Their
                Own Color Palette. Built In Plain React Native Using React Navigation Library.
              </p>
              <ul className="tag-info single-info">
                <li className="name-style">Tags</li>
                <li>:</li>
                <li>
                  <p>Reactjs</p>
                </li>
                <li>
                  <p>React Tollkit Query</p>
                </li>
                <li>
                  <p>Rest Api</p>
                </li>
                <li>
                  <p>Redux</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
