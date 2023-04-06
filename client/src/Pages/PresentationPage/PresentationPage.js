//Classic Imports
import React from 'react';

//Router Imports
import { useNavigate } from 'react-router-dom';

//CSS Imports
import './PresentationPage';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const PresentationPage = () => {
  const navigate = useNavigate();
  const SignUpHandle = () => {
    navigate('/SignUp');
  };
  const SignInHandle = () => {
    navigate('./LogIn');
  };

  return (
    <>
      <Container fluid="md">
        <Row>
          <Col md={6}>
            <Button variant="primary" onClick={SignUpHandle}>
              SignUp
            </Button>{' '}
          </Col>
          <Col md={4}>
            <Button variant="primary" onClick={SignUpHandle}>
              LogIn
            </Button>{' '}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default PresentationPage;
