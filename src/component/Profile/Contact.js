import React from 'react';
import { Container,Row,Col,Card} from 'react-bootstrap'
const Contact=()=> { 
    return ( 
    <Container >
        <h2>Ways <span style={{color:"cyan"}}>to</span> contact <span style={{color:"cyan"}}>me</span> </h2>
        <Row className="d-flex justify-content-md-center" id="contact">
            <Col id="box" >
                <i class="far fa-envelope fa-lg" style={{fontSize:"2rem"}}></i>
                <h4>eya.letaief1@gmail.com</h4>
            </Col>
            <Col id="box" >
                <i class="fas fa-phone" style={{fontSize:"2rem"}}></i>
                <h4>(+216) 26 388 602</h4>
            </Col>
        </Row>
        <Row >
            <Col id="box" >
            <i class="fab fa-linkedin-in"></i>
                <h4>Eya LETAIEF</h4>
            </Col>
            <Col id="box">
                <i class="fab fa-github"></i>
                <h4>https://github.com/Eya-ltaief</h4>
            </Col>
        </Row>
        <Row >
            <Col id="box">
                <i class="fab fa-facebook-square"></i>
                <h4>Eya Letaief</h4>
            </Col>
            <Col id="box">
                <i class="fab fa-instagram"></i>
                <h4>eya_ltaief</h4>
            </Col>
        </Row>
        <br />
        <br />
        <br />
    </Container>

    );
}
export default Contact;
