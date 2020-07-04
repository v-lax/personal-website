import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Hero (props){
    return(
        <Jumbotron className="bg-dark text-warning jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                    { props.Title && <h1 className="display-1 font-weight-bolder">{props.Title}</h1> }
                    { props.Subtitle && <h2 className="display-4 font-weight-light">{props.Subtitle}</h2> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;