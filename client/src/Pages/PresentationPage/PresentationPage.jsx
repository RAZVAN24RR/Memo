//Classic Imports
import React from 'react';

//Router Imports
// import { useNavigate } from 'react-router-dom';

//CSS Imports
import './PresentationPage.css';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

//Components Imports

const PresentationPage = () => {
  return (
    <>
      <div className="Pres">
        <Container fluid="md">
          <Row>
            <h1>We are all connected</h1>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default PresentationPage;
