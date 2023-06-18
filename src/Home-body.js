import React from "react";
import './App.css';
import "animate.css/animate.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Rest from "./rest"
import myImage from './image/cv.png';
import { Container, Card, Row, Col, Button } from "react-bootstrap";

export default function HomeBody(){
    return(
        <div className="Home">
            <Container>
      
      <Row>

        <Col xs={12} md={6} lg={6} >

          <Card className="home-card" style={{backgroundColor: "black"}} >
            <Card.Img

              src={myImage} alt="MYIMAGE" className='myimage'> 
            </Card.Img>

          </Card>
          <hr className="hr" />

        </Col>
       
        <Col xs={12} md={6} lg={6} >
         
<Container className="container-home">
            <Card.Body className='body-text'>
              <Card.Title className='about-title'><b> I am Syma Afsha, a Researcher, Machine Learning, and Web Developer.</b> </Card.Title>
            <br/>
              
              <Card.Text className='about-text'> 
                I received my Bachelor of Science (B.Sc.) degree from the Department of Electrical, Electrical and Communication Engineering (EECE) at the Military Institute of Science and Technology (MIST), Bangladesh. <br/>
                <br/> My areas of interest in terms of research are Robotics, Artificial Intelligence (AI), Machine Learning (ML), Computer Vision (CV), Natural Language Processing (NLP), and Mobile Cellular Technology. Currently, I am working on real-time applications of deep learning based on inappropriate content detection.
              </Card.Text>

          <Rest/>
        
            </Card.Body>
        </Container>
   
        </Col>

      </Row>
  
    </Container>

        </div>

    )
}