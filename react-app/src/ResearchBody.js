import React from "react";
import "./research.css";
import {Row, Col, Button} from "react-bootstrap"
import Paper from "./image/flowchart-new.png";
import SignPaper from "./image/signpaper.jpg"
import Violent from "./image/violent.png"


export default function ResearchBody(){
    return(
        <div className="Researchbody">
            <div className="research-container">
            <p className="research-text"><b>Research Highlights</b></p>
                <Row>

                    <Col xs={12} md={4} lg={4}>
              
            <div className="card-research">
            <img src= {Paper} alt="paper" className="img-research1" />
            <hr/>
            {/* <span class="tag tag-purple">Published</span> */}
  <div className="container">
  {/* <Button className="button">
 <a href="https://www.researchgate.net/profile/Mahmudul-Haque-4/publication/360812725_Machine_Learning_Models_for_Content_Classification_in_Film_Censorship_and_Rating/links/629219a58d19206823e2cf70/Machine-Learning-Models-for-Content-Classification-in-Film-Censorship-and-Rating.pdf" target="_blank">Published</a></Button> */}
 <Button className="button" >
 <a href=" https://ieeexplore.ieee.org/abstract/document/9775816" target="_blank">IEEEXPLORE</a></Button>
 <br/>
 
  
    <p style={{fontSize:15, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}><b>Machine Learning Models for Content
Classification in Film Censorship and Rating.</b></p> 
    <p style={{color: "gray", margin: 5, fontSize: 14}}>Automated Film Censorship and Rating (AFCR) has
recently turned out to be a major research area of Machine
Learning (ML). The production and streaming services of films
including movies, tv-series, animations and other audio-visual
contents have been widely expanded leading to their manual
censorship and rating to be a more exhausting task. Development
of ML based methods has thus been emerging to designing an
AFCR system. However, the initial ad-hoc efforts of developing
the AFCR system demand a “complete” conceptual model of the
system with its potential classes and their criteria. This paper
primarily attempts to determine both the general and contextual
classes of the content, and their criteria for an AFCR system. Besides, the state-of-the-art AFCR systems have been systematically
reviewed to identify their underlying ML models, advantages and
limitations. With a comparative analysis of the exiting ML models, we have demonstrated the effectiveness of sequential and multimodal analysis in the development of an efficient AFCR system.</p>  <br/>
<br/> <br/> <br/> <br/>
<p  style={{ fontSize: 12, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}>2022 International Conference on Innovations in Science, Engineering and
Technology.</p>
  </div>
 

  </div>

                    </Col>



                    <Col xs={12} md={4} lg={4}>
                   
            <div className="card1-research" >
            <img src= {Violent} alt="violent" className="img-research2" />
            <hr/>
            {/* <span class="tag tag-purple">Published</span> */}
  <div className="container">
  {/* <Button className="button">
 <a href="https://www.researchgate.net/profile/Mahmudul-Haque-4/publication/360812725_Machine_Learning_Models_for_Content_Classification_in_Film_Censorship_and_Rating/links/629219a58d19206823e2cf70/Machine-Learning-Models-for-Content-Classification-in-Film-Censorship-and-Rating.pdf" target="_blank">Published</a></Button> */}
 <Button className="button">
 <a href=" https://ieeexplore.ieee.org/abstract/document/9775874" target="_blank">IEEEXPLORE</a></Button>
 <br/>
 
  
    <p style={{fontSize:15, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}><b>Developing BrutNet: A New Deep CNN Model with GRU for
Realtime Violence Detection.</b></p> 
    <p style={{color: "gray", margin: 5, fontSize: 14}}>Computer vision with deep learning has recently
emerged for Automatic Violence Detection and Classification
(AVDC) with enormous potential. This paper reports an early development of a new Deep Convolutional Neural Network (DCNN)
model that we call BrutNet. Building on the Gated Recurrent Unit
(GRU), the BrutNet is designed to operate on the patterns within
multiple frames of a video or video clips of shape 160 × 90 with
a duration of at least 3 seconds. For obtaining the image-feature
set and the pattern of each frame, convolutional layers were
considered for each frame of the time distributed layer. The model
thus encodes the data from 4D to 2D to obtain a 512-features
set for each frame. The temporal nature of these frames is then
extracted by the GRU layer as a 1D vector, which is processed by
several dense layers. A binary classification is thereby performed
denoting the content as violent and non-violent. Dropout layers
with a dropping rate of 0.25 were added to avoid overfitting the
model. Besides, ReLu-activation and sigmoid-activation functions
were defined in the hidden and output layers, respectively. Being
trained with a recent high-resolution AVDC video dataset and
appropriate hyper-parameters on the NVIDIA Tesla K80 GPU of
Google Colab, the initial testing and validation of the model has
recorded a test accuracy of 90.00% outperforming the earlier
LSTM based ResNet50 model.</p> <br/> 
<p  style={{ fontSize: 12, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}>2022 International Conference on Innovations in Science, Engineering and
Technology.</p>
  </div>
 

  </div>

                    </Col>


                    <Col xs={12} md={4} lg={4}>
                   
                   <div className="card2-research" >
                   <img src= {SignPaper} alt="signpaper" className="img-research" />
                   <hr/>
                   {/* <span class="tag tag-purple">Published</span> */}
         <div className="container">
         {/* <Button className="button">
        <a href="https://www.researchgate.net/profile/Mahmudul-Haque-4/publication/360812725_Machine_Learning_Models_for_Content_Classification_in_Film_Censorship_and_Rating/links/629219a58d19206823e2cf70/Machine-Learning-Models-for-Content-Classification-in-Film-Censorship-and-Rating.pdf" target="_blank">Published</a></Button> */}
        <Button className="button">
        <a href="https://ieeexplore.ieee.org/document/9667804"  target="_blank">IEEEXPLORE</a></Button>
        <br/>
        
         
           <p style={{fontSize:15, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}><b>Improving Automatic Sign Language Translation with Image Binarisation and Deep Learning.</b></p> 
           <p style={{color: "gray", margin: 5, fontSize: 14}}> Sign Language Translation (SLT) has been widely investigated to provide a futuristic solution to tackle human speech and hearing disability. Recent deep learning-based SLT models have redefined computer vision-based detection and classification to automatically translate the hand-gestured based sign language (SL) into natural language (NL) with higher accuracy. Unlike the existing models that directly learn from the natural image-sets, in this paper, we propose a 2D Convolutional Neural Network (CNN) model with customised hyper-parameters to be trained with binary SL image-sets. We thus introduce a binarisation step to preprocess the images of size 28 × 28 to feed the model. Preliminary results of our model trained with binarised image-set demonstrate its potential with an impressive classification accuracy of 99.99% on the NVIDIA Tesla K80 GPU environment (Google Colab) for an automatic SLT system.</p> <br/><br/> <br/> <br/> <br/> <br/>
       <p  style={{ fontSize: 12, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}>2021 5th International Conference on Electrical Engineering and
Information Communication Technology (ICEEICT).</p>
         </div>
        
       
         </div>
       
                           </Col>
         
                </Row>
           

            
            </div>


            
         

        </div>
    )
}