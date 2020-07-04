import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer (){

    return(
        <footer className='mt-2'>
            <Container className='bg-dark text-warning' fluid={true}>
                <Row className='border-top justify-content-between p-3'>
                    <Col className="p-5" md={3} sm={12}>
                        Valli Lakshmanan
                    </Col>
                    <Col className="p-5 d-flex justify-content-end" md={3}>
                        <div>
                        This is site was made using create-react-app and with the help of <a href='https://www.youtube.com/watch?v=41-jn5tdg50&list=PLnpdZyv-BjINbUjmTUsyziHz_4fa9hM5G&index=1' target='_blank'>this tutorial.</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;
