import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap'
const Content=()=> { 
    return ( 
    <Container fluid="lg" className="d-flex justify-content-between" id="content">
      <Row>
        <Col>
          <div className="FirstName">
            <h3 style={{color:"cyan"}}> My </h3> 
            <hr/><br />
            <br /><h3>Portfolio <span style={{color:"cyan"}}>.</span></h3>
            <br />
            <Button variant="outline-secondary" className="button"><h6>Contact me</h6></Button>{' '}
          </div>
        </Col>
        <Col><img src="/images/profile.jpg"  alt="profile"></img></Col>
        <Col>
          <div className="introduction">
            <h3>Introduction</h3>
            <hr />
            <br />
            <br />
            <h5>Electrical Automation Engineer, <br />Full Stack Web Developper</h5>
          </div>
        </Col>
      </Row>
    </Container>
            );
}
export default Content;
