import React from "react";
import "./publication.css";

import {Row, Col, Card, Container} from "react-bootstrap"

export default function ContactBody(){

    return(
        <div className="contact" style={{background: "black",  
        fontFamily: "serif"}}>
             <p className="publication-text"><b>Contact Me</b></p>
             <Container>
             <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    
<h style={{color:"white"}}>Mail ID: <a href="" target="_blank">symaafsha.eece@gmail.com</a></h>
                    
                </Col>
            </Row>
             </Container>
          
        </div>
    )
}