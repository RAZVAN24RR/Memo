import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FOOTER.css';
const Footer = () => {
  return (
    <footer className="bg-light container-fluid noscroll  ">
      <Container className="footer">
        <Row className="footer-row">
          <div className="d-flex justify-content-between  row  ">
            <Col md={6}>
              <h5>
                <b>About Us</b>
              </h5>
              <p>
                Our company was founded on the principles of excellence,
                integrity, and innovation. We believe that these values are the
                key to our success and the reason why our customers continue to
                choose us time and time again.
              </p>
            </Col>
            <Col style={{ marginTop: '2rem' }} md={6}>
              <h5>
                <b>Contact Us</b>
              </h5>
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
