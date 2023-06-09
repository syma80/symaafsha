import React from "react";
import { Button, Col, Container, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import './rest.css';

export default function Rest(){
    return(
        <div className="rest">





                      <p style={{color: "white", fontFamily: "serif", fontSize:19}}>To follow my work at <a  style={{ color: "#cf2e2e"}} href="https://www.researchgate.net/profile/Syma-Afsha" target="_blank">ResearchGate</a>.</p>
                    
                      <Row >
                  <Col xs={6} sm={6} md={4} lg={4}>
            <Link style={{color: "white", textDecoration: "none"}} to ="/about-me"><Button variant="outline-primary" className="home-button" >Read More</Button></Link></Col>
            <Col  xs={6} sm={6} md={4} lg={4} >
            <a style={{color: "white", textDecoration: "none"}} href="https://drive.google.com/file/d/129mDal8P_cEGxH5xxcqBfxBRQvDptgJE/view?usp=sharing" target="_blank"> <Button variant="outline-primary" className="home-button" >My Resume</Button></a></Col>
            
                  </Row>
                     
                 
                      
        </div>
        

    )
}