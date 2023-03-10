import React from 'react';
import { Col, Image, Row, Stack, Container } from "react-bootstrap";


function About() {
  return (
    
    <Row className="d-flex flex-row justify-content-between align-item-start mt-5">
    <Col className="d-flex flex-column text-center " xs={11} lg={3} >
  <a href="https://github.com/JonJon50" style={{ textDecoration: 'none' }}>
  <div style={{ color: 'white', fontFamily: 'Arial', fontSize: '25px' }}>Hi, I'm John</div>
    <Image src="https://picsum.photos/200 " className="shadow-md my-4 img-fluid rounded shadow-lg border-round p-4 img-hover" />
  </a>
</Col>

    <Col xs={11} lg={8} className="my-5 " >
    <div className="d-flex align-items-start">
  <Stack gap={3} >
      <div className="transparent ">My name is John and I'm a motivated tech professional and problem solver with a background in big data. Experience with analytical thinking, project manage, strong team skills, and excellent verbal and written communication.</div>
      <div className="transparent">Trained at [University of Central Florida (UCF)] coding boot camp and earned a certificate in full-stack web development. </div>
      <div className="transparent">Innovative problem-solver passionate about developing apps; focused development. Strengths in creativity, teamwork, and building projects from ideation to execution.</div>
    </Stack>
    </div>
    </Col>
   </Row>



  );
}

export default About;


