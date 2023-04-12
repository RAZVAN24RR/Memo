import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './footer.css';
const Footer = () => {
  return (
    <footer className="bg-light container-fluid noscroll">
      <Container>
        <Row style={{ paddingTop: '4rem' }}>
          <div className="d-flex justify-content-between   ">
            <Col md={6}>
              <h5>About Us</h5>
              <p>
                Our company was founded on the principles of excellence,
                integrity, and innovation. We believe that these values are the
                key to our success and the reason why our customers continue to
                choose us time and time again.
              </p>
            </Col>
            <Col md={{ span: 10, offset: 3 }}>
              <h5>Contact Us</h5>
              <p>
                <i className="bi bi-geo-alt"></i> Piața Consiliul Europei 2,
                Timișoara 300627
              </p>
              <p>
                <i className="bi bi-telephone"></i> 0256 224 1342
              </p>
              <p>
                <i className="bi bi-envelope"></i> memo@app.com
              </p>
            </Col>
          </div>
        </Row>
        <Row>
          <Col lg={12}>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="/">Terms &amp; Conditions</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <p>&copy; {new Date().getFullYear()} Memo. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
