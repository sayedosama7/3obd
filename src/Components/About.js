import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const About = () => {
  return (
    <div>
      <Container fluid className='about py-5 text-center' id='about'>
        <Row>
          <Col md="12">
            <h2 className='text-light fw-bold pb-4 wow bounceInDown'>About Me</h2>
            <p className='text-light fw-bold wow bounceInUp'>
              Hi, I am Abdelrahman, a back-end developer specializing in ASP.NET
              <br /> with over 2 years of experience in building robust and scalable web applications.
              <br /> My journey as a self-taught developer has equipped me with strong skills
              in server-side development,
              <br /> focusing on efficient and secure code to deliver high-performance solutions.
            </p>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
